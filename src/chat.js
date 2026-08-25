const formN = document.querySelector("#nombre-form")
const nombreP = document.querySelector("#nombre-input")
const saludo = document.querySelector("#saludo");
const generoP = document.querySelector("#genero-input")
const edadP = document.querySelector("#edad-input")
const botonIdioma = document.querySelector("#idioma-button");
const titulo = document.querySelector("#titulo");

formN.addEventListener("submit", (event) =>
{
    event.preventDefault();

    const nombre = nombreP.value;
    const genero = generoP.value;
    const edad = edadP.value;
    const hora = new Date().getHours();

    let mensaje
    let genero2

    if(edad > 30)
    {
        if(genero == "Hombre" )
        {
            genero2 = "senior"
        }
        else
        {
            genero2 = "seniora"
        }
    }
    else
    {
        if(genero == "Hombre")
        {
            genero2 = "Joven"
        }
        else
        {
            genero2 = "Jovencita"
        }
    }
    
    if (hora >= 6 && hora < 12) 
    {
        mensaje = "Buenos días";
    } 
    else 
        if (hora >= 12 && hora < 19)
        {
            mensaje = "Buenas tardes";
        } 
        else 
        {
            mensaje = "Buenas noches";
        }


    saludo.textContent = "Hola" + " " + nombre + " y te saluda como " + genero2 + "\n" + mensaje + " " + nombre
    
});

botonIdioma.addEventListener("click", () => 
{
    let idioma = "es";
    
    if (idioma === "es")
    {
        
        idioma = "en";

        titulo.textContent = "Hello, what is your name?";
        botonIdioma.textContent = "Español";
      } 
      else 
      {
        idioma = "es";

        titulo.textContent = "Hola, ¿cuál es tu nombre?";
        botonIdioma.textContent = "English";
      }
});