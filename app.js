/* ═══════════════════════════════════════════════
   app.js — Tempad · Controlador
   Lee ?tipo= de la URL y carga TEMPAD_DATA[tipo]
   ═══════════════════════════════════════════════ */

// ── Leer parámetro de URL ──────────────────────────────────────────────
const params  = new URLSearchParams(window.location.search);
const tipo    = params.get('tipo') || '';
const SESSION = TEMPAD_DATA[tipo];

// ── Aplicar colores de sesión como variables CSS ───────────────────────
if (SESSION) {
  document.documentElement.style.setProperty('--c-session', SESSION.color);
  document.documentElement.style.setProperty('--c-shading', SESSION.shadingColor);
  document.title = `Tempad — ${SESSION.nombre}`;
}

// ── BroadcastChannel (sincronización con clock.html) ──────────────────
let channel = null;
try {
  channel = new BroadcastChannel('tempad_channel');
  channel.addEventListener('message', (e) => {
    if (e.data.type === 'REQUEST_STATE') broadcastCurrentState();
  });
} catch (err) {
  console.warn('BroadcastChannel no disponible:', err);
}

// ── Estado del temporizador ────────────────────────────────────────────
const state = {
  selectedIndex:    null,
  isRunning:        false,
  isPaused:         false,
  durationMs:       0,
  startTimestamp:   null,
  endTimestamp:     null,
  remainingAtPause: null,
  tickInterval:     null
};

// ── Referencias al DOM ─────────────────────────────────────────────────
const elAssignmentInfo = document.getElementById('assignmentInfo');
const elTimerBox       = document.getElementById('timerBox');
const elTimerDigits    = document.getElementById('timerDisplay');
const elBtnStart       = document.getElementById('btnStart');
const elBtnPause       = document.getElementById('btnPause');
const elDisplayStart   = document.getElementById('displayStart');
const elDisplayEnd     = document.getElementById('displayEnd');
const elProgramList    = document.getElementById('programList');
const elProgramTitle   = document.getElementById('programTitle');
const elBtnSoloReloj   = document.getElementById('btnSoloReloj');

// ── Utilidades ─────────────────────────────────────────────────────────

// Siempre MM:SS (ej. 60 min → "60:00", nunca "1:00:00")
function formatTime(ms) {
  const neg      = ms < 0;
  const abs      = Math.abs(ms);
  const totalSec = Math.floor(abs / 1000);
  const mins     = Math.floor(totalSec / 60);
  const secs     = totalSec % 60;
  return `${neg ? '-' : ''}${mins}:${String(secs).padStart(2, '0')}`;
}

// Hora real del dispositivo (ej. "9:40:05 a.m.")
function formatClock(ts) {
  const d    = new Date(ts);
  let   h    = d.getHours();
  const m    = String(d.getMinutes()).padStart(2, '0');
  const s    = String(d.getSeconds()).padStart(2, '0');
  const ampm = h >= 12 ? 'p.m.' : 'a.m.';
  h = h % 12 || 12;
  return `${h}:${m}:${s} ${ampm}`;
}

// Colores del temporizador según % restante
function getTimerColors(pct) {
  if (pct > 50) return { bg: '#ffffff', text: '#000000', border: '#e0e0e0' };
  if (pct > 25) return { bg: '#fff2cc', text: '#000000', border: '#fff2cc' };
  if (pct > 10) return { bg: '#ffd966', text: '#000000', border: '#ffd966' };
  if (pct > 0)  return { bg: '#fbbc04', text: '#000000', border: '#fbbc04' };
                return   { bg: '#ea4335', text: '#ffffff', border: '#ea4335' };
}

function applyTimerColors(colors) {
  elTimerBox.style.background  = colors.bg;
  elTimerBox.style.borderColor = colors.border;
  elTimerDigits.style.color    = colors.text;
}

function computeRemaining() {
  if (state.isPaused)  return state.remainingAtPause;
  if (state.isRunning) return state.endTimestamp - Date.now();
  return state.durationMs;
}

function broadcastCurrentState() {
  if (!channel) return;
  const remaining = computeRemaining();
  const pct       = state.durationMs > 0 ? (remaining / state.durationMs) * 100 : 100;
  const colors    = getTimerColors(pct);
  channel.postMessage({ type: 'TICK', timeStr: formatTime(remaining), bg: colors.bg, text: colors.text });
}

// ── Renderizar programa ────────────────────────────────────────────────
function renderProgram() {
  if (!SESSION) {
    elProgramList.innerHTML = `<p style="padding:16px;color:#888;font-size:.9rem">
      Programa no encontrado: <strong>${tipo}</strong></p>`;
    return;
  }

  elProgramTitle.textContent = SESSION.nombre || 'Programa';
  elProgramList.innerHTML    = '';

  SESSION.programa.forEach((item, i) => {
    const hasMins = item.mins != null;
    const row     = document.createElement('div');
    row.className = 'prog-row' + (hasMins ? ' clickable' : '');
    if (i === state.selectedIndex) row.classList.add('selected');

    // Título en una sola línea con color de tipo
    const titleEl = document.createElement('div');
    titleEl.className = `prog-row-title tipo-${item.tipo}`;
    titleEl.innerHTML = item.texto;

    row.appendChild(titleEl);

    if (hasMins) {
      const input   = document.createElement('input');
      input.type    = 'number';
      input.className = 'dur-input';
      input.value   = item.mins;
      input.min     = 1;
      input.max     = 999;

      input.addEventListener('click', (e) => e.stopPropagation());

      const commit = () => {
        const val = parseInt(input.value, 10);
        if (!isNaN(val) && val > 0) {
          item.mins = val;
          if (i === state.selectedIndex && !state.isRunning && !state.isPaused) {
            state.durationMs = val * 60 * 1000;
            elTimerDigits.textContent = formatTime(state.durationMs);
            applyTimerColors(getTimerColors(100));
            broadcastCurrentState();
          }
        } else {
          input.value = item.mins;
        }
      };

      input.addEventListener('blur', commit);
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter')  input.blur();
        if (e.key === 'Escape') { input.value = item.mins; input.blur(); }
      });

      row.appendChild(input);
      row.addEventListener('click', () => selectItem(i));
    } else {
      row.appendChild(document.createElement('div'));
    }

    elProgramList.appendChild(row);
  });
}

// ── Seleccionar asignación ─────────────────────────────────────────────
function selectItem(index) {
  const item = SESSION.programa[index];
  if (!item.mins) return;

  resetTimerState();
  state.selectedIndex = index;
  state.durationMs    = item.mins * 60 * 1000;

  elAssignmentInfo.innerHTML = `
    <p class="assignment-nombre">${SESSION.nombre}</p>
    <p class="assignment-title-text tipo-${item.tipo}">${item.texto}</p>
  `;

  elTimerDigits.textContent = formatTime(state.durationMs);
  applyTimerColors(getTimerColors(100));
  elDisplayStart.textContent = '--:--';
  elDisplayEnd.textContent   = '--:--';

  elBtnStart.disabled = false;
  elBtnPause.disabled = true;
  elBtnPause.textContent = 'PAUSA';
  elBtnPause.classList.remove('resuming');

  renderProgram();
  broadcastCurrentState();
}

// ── Iniciar temporizador ───────────────────────────────────────────────
function startTimer() {
  if (state.selectedIndex === null || state.isRunning) return;

  state.isRunning      = true;
  state.isPaused       = false;
  state.startTimestamp = Date.now();
  state.endTimestamp   = state.startTimestamp + state.durationMs;

  elDisplayStart.textContent = formatClock(state.startTimestamp);
  elDisplayEnd.textContent   = formatClock(state.endTimestamp);
  elBtnStart.disabled        = true;
  elBtnPause.disabled        = false;

  state.tickInterval = setInterval(tick, 100);
  tick();
}

// ── Pausar / Reanudar ──────────────────────────────────────────────────
function togglePause() {
  if (!state.isRunning && !state.isPaused) return;

  if (state.isPaused) {
    state.endTimestamp = Date.now() + state.remainingAtPause;
    state.isRunning    = true;
    state.isPaused     = false;
    elDisplayEnd.textContent = formatClock(state.endTimestamp);
    elBtnPause.textContent   = 'PAUSA';
    elBtnPause.classList.remove('resuming');
    state.tickInterval = setInterval(tick, 100);
    tick();
  } else {
    state.remainingAtPause = state.endTimestamp - Date.now();
    state.isRunning        = false;
    state.isPaused         = true;
    clearInterval(state.tickInterval);
    elBtnPause.textContent = 'REANUDAR';
    elBtnPause.classList.add('resuming');
  }
}

// ── Reset interno ──────────────────────────────────────────────────────
function resetTimerState() {
  state.isRunning = state.isPaused = false;
  state.startTimestamp = state.endTimestamp = state.remainingAtPause = null;
  clearInterval(state.tickInterval);
  state.tickInterval = null;
}

// ── Ajustar tiempo final ───────────────────────────────────────────────
function adjustTime(deltaSec) {
  if (!state.isRunning && !state.isPaused) return;
  const deltaMs = deltaSec * 1000;
  state.endTimestamp += deltaMs;
  if (state.isPaused) {
    state.remainingAtPause += deltaMs;
    const pct = (state.remainingAtPause / state.durationMs) * 100;
    elTimerDigits.textContent = formatTime(state.remainingAtPause);
    applyTimerColors(getTimerColors(pct));
    broadcastCurrentState();
  }
  elDisplayEnd.textContent = formatClock(state.endTimestamp);
}

// ── Tick ───────────────────────────────────────────────────────────────
function tick() {
  if (!state.isRunning) return;
  const remaining = state.endTimestamp - Date.now();
  const pct       = (remaining / state.durationMs) * 100;
  const timeStr   = formatTime(remaining);
  const colors    = getTimerColors(pct);

  elTimerDigits.textContent = timeStr;
  applyTimerColors(colors);

  if (channel) {
    channel.postMessage({ type: 'TICK', timeStr, bg: colors.bg, text: colors.text });
  }
}

// ── Event listeners ────────────────────────────────────────────────────
elBtnSoloReloj.addEventListener('click', () => {
  window.open('clock.html', 'tempad_clock',
    'width=1280,height=720,menubar=no,toolbar=no,location=no,status=no');
});

elBtnStart.addEventListener('click', startTimer);
elBtnPause.addEventListener('click', togglePause);

document.querySelectorAll('.btn-adjust').forEach(btn => {
  btn.addEventListener('click', () => adjustTime(parseInt(btn.dataset.delta, 10)));
});

// ── Inicializar ────────────────────────────────────────────────────────
if (!SESSION) {
  document.title = 'Tempad — Programa no encontrado';
}

renderProgram();
