const preload = document.querySelector(".preload"), allEditor = document.querySelectorAll(".code div"), resizer = document.querySelector(".resizer");


let count = 1, editorData = [];

window.onload = () => {

    require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@latest/min/vs' } });
    window.MonacoEnvironment = {
        getWorkerUrl: () => URL.createObjectURL(new Blob([`self.MonacoEnvironment = {
            baseUrl: 'https://unpkg.com/monaco-editor@latest/min/'
        };
        importScripts('https://unpkg.com/monaco-editor@latest/min/vs/base/worker/workerMain.js');`], { type: 'text/javascript' }))
    };

    require(["vs/editor/editor.main"], function () {
        monaco.editor.defineTheme('dracula', dracula)
    });

    allEditor.forEach(e => {
        const lang = e.getAttribute("lang");
        if (lang) {
            e.style = `/* position: inherit; */width: 100%;height: 33.33%;overflow: hidden;resize: none;`;
            const value = e.getAttribute("value") || "";
            require(["vs/editor/editor.main"], function () {

                const editor = monaco.editor.create(e, {
                    value: value,
                    language: lang,
                    automaticLayout: true,
                    theme: 'dracula',
                });
                const obj = {
                    lang: lang,
                    editor: editor,
                    div: e
                };
                editorData.push(obj);
                if (allEditor.length <= count) {
                    preview();
                    stopLoading();
                    return;
                };
                count++
            });
        }

        // EXPORT
        const exportBtn = document.querySelector("#export");
        exportBtn.addEventListener("click", async (ev) => {
            const editorHTML = editorData[0].editor;
            const editorCSS = editorData[1].editor;
            const editorJS = editorData[2].editor;

            const zip = new JSZip();
            const html_doc = '<!DOCTYPE html>\n<html lang="en">\n\t<head>\n\t<meta charset="UTF-8">\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t<meta http-equiv="X-UA-Compatible" content="ie=edge">\n\t\t<link rel="stylesheet" href="style.css">\n\t</head>\n\t<body>\n\t' + editorHTML.getValue() + '\n\t<script src="script.js">\n\t<\/script>\n\t</body>\n</html>';
            zip.file("index.html", html_doc);
            zip.file("style.css", editorCSS.getValue());
            zip.file("script.js", editorJS.getValue());
            zip.generateAsync({ type: "blob" }).then(function (blob) {
                saveAs(blob, "web.zip");
            }, function (err) {
                console.log(err)
            })
        });
        // CLEAR
        const clearBtn = document.querySelector("#clear");
        clearBtn.addEventListener("click", async (ev) => {
            editorData.forEach(e => {
                e = e.editor;
                if (e) {
                    e.setValue("")
                }
            });
            preview()
        })
    });

    // CONSOLE
    const consoleBtn = document.querySelector("#console");
    const console = document.querySelector(".console");
    const close = document.querySelector("#closeConsole");
    consoleBtn.addEventListener("click", async (ev) => {
        console.style.display = console.style.display == "block" ? "none" : "block"
    });
    close.addEventListener("click", async (ev) => {
        console.style.display = "none"
    });


    // DRAG 1
    const first = document.querySelector(".code"), second = document.querySelector(".preview"), sep = document.querySelector(".resizer.vertical")
        , sep1 = document.querySelector("#sep1")
        , sep2 = document.querySelector("#sep2")
        , sep3 = document.querySelector("#sep3");
    let md;
    sep.onmousedown = (e) => {
        md = {
            e,
            offsetLeft: sep.offsetLeft,
            offsetTop: sep.offsetTop,
            firstWidth: first.offsetWidth,
            secondWidth: second.offsetWidth
        };


        document.onmousemove = (e) => {
            //console.log("mouse move: " + e.clientX);
            const delta = {
                x: e.clientX - md.e.clientX,
                y: e.clientY - md.e.clientY
            };

            delta.x = Math.min(Math.max(delta.x, -md.firstWidth), md.secondWidth);
            sep.style.left = md.offsetLeft + delta.x + "px";
            first.style.width = (md.firstWidth + delta.x) + "px";
            second.style.width = (md.secondWidth - delta.x) + "px";
        };
        document.onmouseup = () => {
            //console.log("mouse up");
            document.onmousemove = document.onmouseup = null;
        }
    };
    // DRAG 2


}

function preview() {
    const editorHTML = editorData[0].editor;
    const editorCSS = editorData[1].editor;
    const editorJS = editorData[2].editor;

    const htmlCode = editorHTML.getValue();
    const cssCode = "<style>" + editorCSS.getValue() + "</style>";
    const jsCode = "<script>" + editorJS.getValue() + "</script>";

    const frame = document.getElementById("preview").contentWindow.document
    frame.open()
    frame.write(htmlCode + cssCode + jsCode)
    frame.close()
}


function loading() {
    preload.style.display = "block";
    preload.style.opacity = "1";
}
function stopLoading() {
    preload.style.opacity = "0";
    setTimeout(() => {
        preload.style.display = "none";
    }, 120);
}


