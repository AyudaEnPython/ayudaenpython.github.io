import { init } from './events.js'
import { Exercises } from './exercises.js'
import { showResult, handleError } from './utils.js';

let confettiInterval = null;
const pre_code = '#!/usr/bin/python3\n\n\ndef main():\n    # Code here...\n' +
  '    pass\n\n\nif __name__ == "__main__":\n     main()\n';
const filename = "https://ayudaenpython.com/challenges/data/"
const output = document.getElementById("output");
output.value = "...\n";

const exercises = new Exercises();
exercises.loadData(filename)
  .then(() => { exercises.createExercise(); } )
  .catch(error => { console.error("Error:", error); });

const editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  mode: {
    name: "python",
    version: 3,
    singleLineStringErrors: false,
  },
  lineNumbers: true,
  indentUnit: 4,
  theme: "dracula",
  keyMap: "default",
});
editor.setOption("scrollbarStyle", "overlay");
editor.setValue(pre_code);

init(exercises, editor, output, evaluateCode);

async function main() {
  let pyodide = await loadPyodide({
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.21.3/full/",
  });
  output.value = pyodide.runPython(`
    import sys
    sys.version
  `);
  output.value += "\nReady!\n";
  output.value = "";
  return pyodide;
}

let pyodideReady = main();

function runCode(pyodide, code, input_) {
  pyodide.runPython(`
    import io
    sys.stdout = io.StringIO()
    input = lambda: "${input_}"
  `);
  pyodide.runPython(code);
  let result = pyodide.runPython("sys.stdout.getvalue()").trim();
  return result
}

async function evaluateCode() {
  const results = [];
  let pyodide = await pyodideReady;
  try {
    const { inputs, outputs } = exercises.getTest();
    const code = editor.getValue();
    inputs.forEach((input_, i) => {
      const result = runCode(pyodide, code, input_);
      results.push(outputs[i] == result);
    });
    showResult(confettiInterval, Date.now(), results);
  } catch (err) { 
    handleError(output, err); 
  }
}

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.altKey && e.key === "j") {
    evaluateCode();
  }
});
