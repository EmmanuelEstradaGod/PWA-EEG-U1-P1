//console.log("sw: Hola Mundo, ya es tarde; fuga xd");
//let url = window.location.href
//let swDirect = "/miRepositorio/sw.js"

self.addEventListener("install",() => {
    console.log("SW: Instalado");
});

self.addEventListener("activate",() => {
    console.log("SW: Activado y controlando...");
});

self.addEventListener("fetch", (event) => {
    if (event.request.url.includes(".jpg")) {
        let newResp = fetch("PWA-EEG-U1-P1/image/tiburcio.jpg");
        console.log("Es una imagen");
        event.respondWith(newResp);
    }

    if (event.request.url.includes("page.css")) {
        let newResp = new Response(`body{
            background-color: black;
            color: red;
        }` , {
            headers:{
                'Content-Type':'text/css'
            }
        }
        );
        event.respondWith(newResp)
    }
});