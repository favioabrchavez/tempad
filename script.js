let timerDisplay = document.getElementById("timer");
let currentName = document.getElementById("current-name");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let rows = document.querySelectorAll("#schedule tbody tr");

let totalSeconds = 0;
let remainingSeconds = 0;
let timer = null;
let popupWindow = null;

// Seleccionar discurso
rows.forEach(row => {
  row.addEventListener("click", () => {
    rows.forEach(r => r.classList.remove("selected"));
    row.classList.add("selected");

    let name = row.cells[0].innerText.trim();
    let minutes = parseInt(row.cells[1].innerText.trim());

    if (isNaN(minutes) || minutes <= 0) {
      alert("Por favor ingresa un número válido de minutos.");
      return;
    }

    currentName.innerText = name;
    totalSeconds = minutes * 60;
    remainingSeconds = totalSeconds;
    updateDisplay();

    // Estado inicial: fondo blanco y letras negras
    timerDisplay.style.color = "#000";
    timerDisplay.style.background = "#fff";

    clearInterval(timer);
    startBtn.classList.remove("active");
    stopBtn.classList.remove("active");
  });
});

// Iniciar cuenta regresiva
startBtn.addEventListener("click", () => {
  if (!remainingSeconds && remainingSeconds !== 0) return;

  startBtn.classList.add("active");
  stopBtn.classList.remove("active");

  clearInterval(timer);
  timer = setInterval(() => {
    remainingSeconds--;
    updateDisplay();

    let ratio = remainingSeconds / totalSeconds;

    // Normal
    if (ratio > 0.1) {
      timerDisplay.style.background = "#fff";
      timerDisplay.style.color = "#000";
    }

    // Último 10%
    if (ratio <= 0.1 && ratio > 0) {
      timerDisplay.style.background = "yellow";
      timerDisplay.style.color = "#000";
    }

    // En negativo
    if (remainingSeconds <= 0) {
      timerDisplay.style.background = "red";
      timerDisplay.style.color = "#ffffff";
    }

    // Actualizar ventana secundaria si existe
    if (popupWindow && !popupWindow.closed) {
      popupWindow.postMessage({
        time: timerDisplay.innerText,
        color: timerDisplay.style.color,
        background: timerDisplay.style.background
      }, "*");
    }

  }, 1000);
});

// Detener cuenta regresiva
stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  stopBtn.classList.add("active");
  startBtn.classList.remove("active");
});

// Mostrar formato mm:ss sin convertir a horas (permite negativos)
function updateDisplay() {
  let absSeconds = Math.abs(remainingSeconds);
  let minutes = Math.floor(absSeconds / 60);
  let seconds = absSeconds % 60;
  let sign = remainingSeconds < 0 ? "-" : "";
  timerDisplay.innerText = `${sign}${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// Botón para abrir solo reloj
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
        <title>Solo Reloj</title>
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
            const el = document.getElementById("popup-timer");
            if (data.time) {
              el.innerText = data.time;
              el.style.color = data.color || "#000";
              document.body.style.background = data.background || "#fff";
            }
          });
        </script>
      </body>
    </html>
  `);
});
