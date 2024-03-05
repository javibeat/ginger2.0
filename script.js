// Espera a que el DOM se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    fetch('menu.html') // Ruta a tu archivo menu.html
        .then(response => response.text())
        .then(data => {
            // Inserta el menú en el elemento con el id 'menu-container'
            document.getElementById('menu-container').innerHTML = data;
            // Activa cualquier script o funcionalidad adicional aquí si es necesario
        })
        .catch(error => console.error(error));
});
