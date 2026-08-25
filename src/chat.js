const formN = document.querySelector("#nombre-form")
const nombreP = document.querySelector("#nombre-input")
const saludo = document.querySelector("#saludo");
const generoP = document.querySelector("#genero-input")

formN.addEventListener("submit", (event) =>
{
    event.preventDefault();

    const nombre = nombreP.value;
    const genero = generoP.value
    const hora = new Date().getHours();

    let mensaje

    if (hora >= 6 && hora < 12) {
    mensaje = "Buenos días";
    } else if (hora >= 12 && hora < 19) {
    mensaje = "Buenas tardes";
    } else {
    mensaje = "Buenas noches";
    }


    saludo.textContent = "Hola" + " " + nombre + " y tu genero es " + genero + "\n" + mensaje + " " + nombre
    
});