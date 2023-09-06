export const duration = 15 * 100;
const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function showOutput(output, message) {
  output.value = "";
  output.value += message;
}

export function handleError(output, err) {
  const errorMessage = err.message;
  const errorLines = errorMessage.split("\n");
  const lastErrorLine = errorLines[errorLines.length - 2];
  showOutput(output, lastErrorLine);
}

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function takeScreenshot() {
  const screenshot_target = document.body;
  html2canvas(
    screenshot_target,
    {
      scale: "2",
      windowHeight: document.documentElement.offsetHeight
    }
  ).then((canvas) => {
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = "screenshot.png";
    a.click();
  });
}

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function particles(particleCount) {
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}

function basicCannon() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}

function Cannons(dateNow, interval) {
  const animationEnd = dateNow + duration;
  interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      return clearInterval(interval)
    }
    const particleCount = 50 * (timeLeft/duration);
    particles(particleCount);
  }, 250);
  basicCannon();
}

export function showResult(confettiInterval, dateNow, results) {
  if (results.every(e => e == true)) {
    Cannons(dateNow, confettiInterval);
    showOutput(output, "Correcto!");
  } else {
    showOutput(output, "Incorrecto, vuelve a intentarlo!");
  }
}