/* =====================================================
   TEMPAD – CONTROL DE TIEMPO PROFESIONAL
   =====================================================
   - Basado en reloj real del dispositivo
   - Evita desfases entre PC, Zoom y teléfono
   - Permite ajustes de tiempo en vivo
*/

/* =========================
   REFERENCIAS AL DOM
   ========================= */
const timerDisplay = document.getElementById("timer");
const currentName  = document.getElementById("current-name");
const startBtn     = document.getElementById("start");
const stopBtn      = document.getElementById("stop");
const startTimeEl  = document.getElementById("start-time");
const endTimeEl    = document.getElementById("end-time");
const plusMinBtn   = document.getElementById("plus-min");
const minusMinBtn  = document.getElementById("minus-min");
const plusSecBtn   = document.getElementById("plus-sec");
const minusSecBtn  = document.getElementById("minus-sec");

/* =========================
   VARIABLES DE CONTROL
   ========================= */
let totalSeconds     = 0;
let remainingSeconds = 0;
let timer            = null;
let startTimestamp   = null;
let endTimestamp     = null;
let popupWindow      = null;

const ADJUST_MIN = 60;  // 1 minuto
const ADJUST_SEC = 10;  // base para snap

/* =====================================================
   INICIALIZAR FILAS (llamar después de generarlas)
   ===================================================== */
function initRows() {
  const rows = document.querySelectorAll("#schedule tbody tr");

  rows.forEach(row => {
    row.addEventListener("click", () => {
      rows.forEach(r => r.classList.remove("selected"));
      row.classList.add("selected");

      const name    = row.cells[0]?.innerText.trim();
      const minutes = parseInt(row.cells[1]?.innerText.trim());

      if (isNaN(minutes) || minutes <= 0) return;

      currentName.innerText = name;
      totalSeconds     = minutes * 60;
      remainingSeconds = totalSeconds;

      startTimestamp = null;
      endTimestamp   = null;
      startTimeEl.innerText = "--:--";
      endTimeEl.innerText   = "--:--";

      updateDisplay();
      timerDisplay.style.background = "#fff";
      timerDisplay.style.color      = "#000";

      clearInterval(timer);
      startBtn.classList.remove("active");
      stopBtn.classList.remove("active");
    });
  });
}

/* =====================================================
   BOTÓN INICIO
   ===================================================== */
startBtn.addEventListener("click", () => {
  if (!totalSeconds) return;

  const now = Date.now();

  if (!startTimestamp) {
    startTimestamp = now;
    endTimestamp   = startTimestamp + totalSeconds * 1000;
    startTimeEl.innerText = formatClock(startTimestamp);
    endTimeEl.innerText   = formatClock(endTimestamp);
  }

  startBtn.classList.add("active");
  stopBtn.classList.remove("active");

  clearInterval(timer);
  timer = setInterval(updateFromClock, 500);
});

/* =====================================================
   BOTÓN PAUSA
   ===================================================== */
stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  stopBtn.classList.add("active");
  startBtn.classList.remove("active");
});

/* =====================================================
   AJUSTE MANUAL DE TIEMPO
   ===================================================== */
function adjustTime(seconds) {
  if (!endTimestamp) return;
  endTimestamp     += seconds * 1000;
  remainingSeconds  = Math.round((endTimestamp - Date.now()) / 1000);
  endTimeEl.innerText = formatClock(endTimestamp);
  updateDisplay();
}

// Snap al múltiplo de 10s más cercano en la dirección indicada
function adjustSnap(direction) {
  if (!endTimestamp) return;
  const current = Math.round((endTimestamp - Date.now()) / 1000);
  const mod = current % ADJUST_SEC;
  let delta;
  if (direction > 0) {
    delta = mod === 0 ? ADJUST_SEC : ADJUST_SEC - mod;
  } else {
    delta = mod === 0 ? -ADJUST_SEC : -mod;
  }
  adjustTime(delta);
}

plusMinBtn.addEventListener("click",  () => adjustTime( ADJUST_MIN));
minusMinBtn.addEventListener("click", () => adjustTime(-ADJUST_MIN));
plusSecBtn.addEventListener("click",  () => adjustSnap(+1));
minusSecBtn.addEventListener("click", () => adjustSnap(-1));

/* =====================================================
   ACTUALIZACIÓN DESDE RELOJ REAL
   ===================================================== */
function updateFromClock() {
  remainingSeconds = Math.round((endTimestamp - Date.now()) / 1000);
  updateDisplay();

  const ratio = remainingSeconds / totalSeconds;

  if (ratio > 0.1) {
    timerDisplay.style.background = "#fff";
    timerDisplay.style.color      = "#000";
  } else if (ratio > 0) {
    timerDisplay.style.background = "rgba(255, 196, 0, 1)";
    timerDisplay.style.color      = "#000";
  } else {
    timerDisplay.style.background = "red";
    timerDisplay.style.color      = "#fff";
  }

  if (popupWindow && !popupWindow.closed) {
    popupWindow.postMessage({
      time:       timerDisplay.innerText,
      color:      timerDisplay.style.color,
      background: timerDisplay.style.background
    }, "*");
  }
}

/* =====================================================
   FORMATO DEL CRONÓMETRO (mm:ss)
   ===================================================== */
function updateDisplay() {
  const absSeconds = Math.abs(remainingSeconds);
  const minutes    = Math.floor(absSeconds / 60);
  const seconds    = absSeconds % 60;
  const sign       = remainingSeconds < 0 ? "-" : "";
  timerDisplay.innerText =
    `${sign}${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

/* =====================================================
   FORMATO DE HORA REAL (HH:MM:SS)
   ===================================================== */
function formatClock(timestamp) {
  return new Date(timestamp).toLocaleTimeString([], {
    hour:   "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

/* =====================================================
   BOTÓN "SOLO RELOJ"
   ===================================================== */
const soloBtn = document.createElement("button");
soloBtn.textContent = "SOLO RELOJ";
soloBtn.classList.add("solo-btn");
document.querySelector(".left-panel").prepend(soloBtn);

soloBtn.addEventListener("click", () => {
  if (popupWindow && !popupWindow.closed) {
    popupWindow.focus();
    return;
  }

  popupWindow = window.open("", "SoloReloj", "width=400,height=300");
  popupWindow.document.write(`
    <html>
      <head>
        <title>tempad-view</title>
        <style>
          body {
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fff;
          }
          #popup-timer {
            font-family: Arial, sans-serif;
            font-size: 35vw;
            font-weight: bold;
            color: #000;
          }
        </style>
      </head>
      <body>
        <div id="popup-timer">00:00</div>
        <script>
          window.addEventListener("message", (event) => {
            const data = event.data;
            const el   = document.getElementById("popup-timer");
            if (data.time) {
              el.innerText = data.time;
              el.style.color = data.color || "#000";
              document.body.style.background = data.background || "#fff";
            }
          });
        <\/script>
      </body>
    </html>
  `);
});
