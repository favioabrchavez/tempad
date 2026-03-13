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

const ADJUST_MIN = 60;
const ADJUST_SEC = 10;

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
      setTimerColor(1); // reset a blanco
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
   COLOR GRADUAL DEL RELOJ
   =====================================================
   ratio = 1.0  → blanco
   ratio = 0.25 → empieza a virar a amarillo
   ratio = 0.0  → amarillo puro
   ratio < 0    → rojo (tiempo excedido)
*/
function lerpColor(c1, c2, t) {
  return [
    Math.round(c1[0] + (c2[0] - c1[0]) * t),
    Math.round(c1[1] + (c2[1] - c1[1]) * t),
    Math.round(c1[2] + (c2[2] - c1[2]) * t)
  ];
}

function setTimerColor(ratio) {
  let bg, textColor;

  const white  = [255, 255, 255];
  const orange = [255, 140, 0];
  const red    = [220, 30, 30];

  if (ratio >= 0.5) {
    bg        = "rgb(255,255,255)";
    textColor = "#000";
  } else if (ratio > 0) {
    const t = 1 - (ratio / 0.5);
    const [r, g, b] = lerpColor(white, orange, t);
    bg        = `rgb(${r},${g},${b})`;
    textColor = t > 0.6 ? "#fff" : "#000";
  } else {
    bg        = "rgb(220,30,30)";
    textColor = "#fff";
  }

  timerDisplay.style.background = bg;
  timerDisplay.style.color      = textColor;

  if (popupWindow && !popupWindow.closed) {
    popupWindow.postMessage({
      time:       timerDisplay.innerText,
      color:      textColor,
      background: bg
    }, "*");
  }
}

/* =====================================================
   ACTUALIZACIÓN DESDE RELOJ REAL
   ===================================================== */
function updateFromClock() {
  remainingSeconds = Math.round((endTimestamp - Date.now()) / 1000);
  updateDisplay();
  setTimerColor(remainingSeconds / totalSeconds);
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
            transition: background 0.5s;
          }
          #popup-timer {
            font-family: Arial, sans-serif;
            font-size: 35vw;
            font-weight: bold;
            color: #000;
            transition: color 0.5s;
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
