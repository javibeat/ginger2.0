document.addEventListener('DOMContentLoaded', function() {
    // Carga el menú
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-container').innerHTML = data;
            // Después de cargar el menú, inicializa cualquier funcionalidad dependiente de jQuery
            initializejQueryFeatures();
        })
        .catch(error => console.error(error));
});

function initializejQueryFeatures() {
    // Asegúrate de que jQuery esté cargado
    if (window.jQuery) {
        // Funcionalidad de jQuery para el scroll down arrow
        $('.scroll-down-arrow').click(function(){
            $('html, body').animate({
                scrollTop: $("#nextSection").offset().top
            }, 1000); // 1000 milisegundos para el efecto de desplazamiento
        });
    } else {
        console.error('jQuery is not loaded');
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("testimonial-item");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

// Funcionalidad de deslizamiento táctil para dispositivos móviles
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(evt) {
    touchStartX = evt.touches[0].clientX;
}

function handleTouchMove(evt) {
    touchEndX = evt.touches[0].clientX;
}

function handleTouchEnd() {
    if (touchStartX - touchEndX > 50) {
        // Deslizar a la izquierda
        changeSlide(1);
    }
    if (touchEndX - touchStartX > 50) {
        // Deslizar a la derecha
        changeSlide(-1);
    }
}

const slider = document.querySelector('.testimonial-slider');
if (slider) {
    slider.addEventListener('touchstart', handleTouchStart, false);
    slider.addEventListener('touchmove', handleTouchMove, false);
    slider.addEventListener('touchend', handleTouchEnd, false);
}
