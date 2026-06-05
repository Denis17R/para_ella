const boton = document.getElementById("btnMensaje");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
  mensaje.classList.remove("oculto");

  mensaje.scrollIntoView({
    behavior: "smooth"
  });
});

const texto = document.getElementById("texto");

const mensajeTexto =
  "Han pasado casi tres meses... y me alegra muchísimo haberte conocido.";

let index = 0;

function escribirTexto(){

  if(index < mensajeTexto.length){

    texto.innerHTML += mensajeTexto.charAt(index);

    index++;

    setTimeout(escribirTexto, 50);
  }

}

escribirTexto();

function revelar(){

  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((elemento) => {

    const windowHeight = window.innerHeight;

    const elementTop =
      elemento.getBoundingClientRect().top;

    const visible = 100;

    if(elementTop < windowHeight - visible){

      elemento.classList.add("active");

    }

  });

}

window.addEventListener("scroll", revelar);