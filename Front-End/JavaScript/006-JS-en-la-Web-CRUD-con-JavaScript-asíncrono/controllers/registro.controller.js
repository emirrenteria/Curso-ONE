import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); // desactivamos el evento por defecto, por eso, enviamos el parametro evento, sino lo fuerammos dejado basio
    const nombre = document.querySelector("[data-nombre]").value; // el .value es para que nos selecione solo el valor que sino nos trae todo el input
    const email = document.querySelector("[data-email]").value;
    clientServices.
    crearCliente(nombre, email)
    .then(() => {
        window.location.href = "/screens/registro_completado.html"
    })
    .catch(err => console.log(err))
});