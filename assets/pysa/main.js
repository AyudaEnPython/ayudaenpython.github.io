const file_select = document.getElementById("file_select");
const file_elem = document.getElementById("file_elem");
const output = document.getElementById("output");
const editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    mode: {
        name: "python",
        version: 3,
        singleLineStringErrors: false,
    },
    lineNumbers: true,
    indentUnit: 4,
    theme: "dracula",
});

editor.setOption("scrollbarStyle", "overlay");
output.value = "...\n";

document.addEventListener(
    "keydown",
    (e) => {
        if (e.shiftKey && e.key == "Enter") {
            e.preventDefault();
            evaluatePy();
        }
    },
    false
);

file_select.addEventListener(
    "click",
    (e) => {
        if (file_elem) {
            file_elem.click();
        }
        e.preventDefault();
    },
    false
);

function takeScreenshot() {
    const screenshot_target = document.getElementById("editor-zone");
    // let el = document.getElementById("buttonSwitch");
    // el.classList.add("hidden");
    html2canvas(
        screenshot_target,
        {
            scale: "2",
            onclone: (screenshot_target) => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve()
                    }, 400)
                })
            }
    }).then((canvas) => {
        const a = document.createElement("a");
        a.href = canvas.toDataURL("image/png");
        a.download = "screenshot.png";
        a.click();
        // el.classList.add("visible");
    });
}

function loadFile(file_select) {
    let reader = new FileReader();
    reader.onload = function (e) {
        editor.setValue(e.target.result);
    };
    reader.readAsText(file_select.files[0]);
}

function downloadFile(){
    let text = editor.getValue();
    let blob = new Blob([text], {
        type: "text/plain;charset=utf-8"
    });
    const a = document.createElement("a");
    a.download = "main.py";
    if (window.webkitURL != null) {
        a.href = window.webkitURL.createObjectURL(blob);
    } else {
        a.href = window.URL.createObjectURL(blob);
    }
    a.click();
}

function showOutput(s) {
    output.value += s;
}

function clearOutput() {
    output.value = "";
}

function clearEditor() {
    editor.setValue("");
}

async function main() {
    let pyodide = await loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.21.3/full/",
    });
    output.value = pyodide.runPython(`
        import sys
        sys.version
    `);
    output.value += "\nReady!\n";
    clearOutput(output);
    return pyodide;
}

let pyodideReady = main();

async function evaluatePy() {
    let pyodide = await pyodideReady;
    try {
        pyodide.runPython(`
            import io
            sys.stdout = io.StringIO()
    `);
        let result = pyodide.runPython(editor.getValue());
        let output = pyodide.runPython("sys.stdout.getvalue()");
        showOutput(output);
    } catch (err) {
        showOutput(err);
    }
}