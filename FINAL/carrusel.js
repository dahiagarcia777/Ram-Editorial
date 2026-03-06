const imagenes = document.querySelectorAll(".carrusel-fondo img");
let index = 0;

function cambiarImagen() {
    imagenes[index].classList.remove("activo");
    index = (index + 1) % imagenes.length;
    imagenes[index].classList.add("activo");
}

setInterval(cambiarImagen, 4000);