import { takeScreenshot, getRandomNumber } from "./utils.js";

const toggleTheme = document.getElementById("toggle-theme");
const toggleMode = document.getElementById("toggle-mode");
const vimToggle = document.getElementById("vim-toggle");
const nextButton = document.getElementById("e-next");
const prevButton = document.getElementById("e-prev");
const runButton = document.getElementById("run");
const clearButton = document.getElementById("clear");
const numberInput = document.getElementById("e-number-input");
const confirmButton = document.getElementById("e-confirm");
const randomButton = document.getElementById("e-random");
const cameraButton = document.getElementById("take-photo");

export function init(exercises, editor, output, callback) {
  toggleMode.addEventListener("click", () => {
    if (editor.getOption("keyMap") == "vim") {
      editor.setOption("keyMap", "default");
      vimToggle.textContent = "toggle_off";
    } else {
      editor.setOption("keyMap", "vim");
      vimToggle.textContent = "toggle_on";
    }
  });
  toggleTheme.addEventListener("click", () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
      editor.setOption("theme", "default");
      document.body.classList.remove("default-mode")
      document.body.classList.add("dark-mode")
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
      editor.setOption("theme", "dracula");
      document.body.classList.remove("dark-mode")
      document.body.classList.add("default-mode")
    }
  });
  nextButton.addEventListener("click", () => {
    exercises.nextIndex();
    exercises.createExercise();
  });
  prevButton.addEventListener("click", () => {
    exercises.prevIndex();
    exercises.createExercise();
  });
  runButton.addEventListener("click", () => {
    output.value = callback();
  });
  clearButton.addEventListener("click", () => {
    output.value = "";
  })
  confirmButton.addEventListener("click", () => {
    const max_ = exercises.getMaxIndex();
    let inputNumber = Number(numberInput.value);
    if (inputNumber < 0 || inputNumber > max_) {
        inputNumber = getRandomNumber(0, max_);
    }
    exercises.setIndex(inputNumber);
    exercises.createExercise();
    numberInput.value = "";
  })
  randomButton.addEventListener("click", () => {
    const max_ = exercises.getMaxIndex();
    const inputNumber = getRandomNumber(0, max_);
    exercises.setIndex(inputNumber);
    exercises.createExercise();
    numberInput.value = "";
  })
  cameraButton.addEventListener("click", () => {
    takeScreenshot();
  })
}
