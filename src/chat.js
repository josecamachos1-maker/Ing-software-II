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
    let nombre2

    if(nombre == "")
    {
        nombre2 = "visitante"

    }
    else
    {
        nombre2 = nombre

    }
    if(edad > 30)
    {
        if(genero == "hombre" )
        {
            genero2 = "senior"
        }
        else
            if(genero == "mujer")
        {
            genero2 = "seniora"
        }
    }
    else
    {
        if(genero == "hombre")
        {
            genero2 = "Joven"
        }
        else
            if(genero == "mujer")
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


    saludo.textContent = "Hola" + " " + nombre2 + " y te saluda como " + genero2 + "\n" + mensaje + " " + nombre2
    
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