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
