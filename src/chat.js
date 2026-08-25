const formN = document.querySelector("#nombre-form")
const nombreP = document.querySelector("#nombre-input")
const saludo = document.querySelector("#saludo");

formN.addEventListener("submit", (event) =>
{
    event.preventDefault();

    const nombre = nombreP.value;

    saludo.textContent = "Hola" + " " + nombre
});