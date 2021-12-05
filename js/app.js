let contextSW = "/PWA-EEG-U1-P1-/sw.js"
let url = window.location.href;
console.log("Hola Mundo desde app.js");

if (navigator.serviceWorker) {
    if (url.includes("localhost")) {
        contextSW = "/sw.js";
    }
    navigator.serviceWorker.register(contextSW);
}