// Animación al hacer scroll
function mostrarElementosConScroll() {
    const elementos = document.querySelectorAll('.ocultar');
    elementos.forEach(elemento => {
        const posicionElemento = elemento.getBoundingClientRect().top;
        const alturaVentana = window.innerHeight;
        if (posicionElemento < alturaVentana * 0.8) {
            elemento.classList.add('mostrar');
        }
    });
}

window.addEventListener('scroll', mostrarElementosConScroll);
