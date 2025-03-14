// Seleccionar todos los botones de las pestañas y el contenido
const pestaniaBoton = document.querySelectorAll('.pestaniaBoton');
const contenido = document.querySelectorAll('.contenido');

// Función para cambiar de pestaña
function switchTab(event) {
    const tabId = event.currentTarget.getAttribute('data-tab'); // Asegura que obtenemos el botón correcto

    if (event.currentTarget.classList.contains('pestania-activada')) {
        return; // Si ya está activa, no hacer nada
    }

    // Ocultar todo el contenido de las pestañas
    contenido.forEach(content => content.classList.remove('visible'));

    // Mostrar solo la pestaña seleccionada
    document.getElementById(tabId).classList.add('visible');

    // Quitar la clase 'pestania-activada' de todos los botones
    pestaniaBoton.forEach(button => button.classList.remove('pestania-activada'));

    // Añadir la clase 'pestania-activada' al botón clickeado
    event.currentTarget.classList.add('pestania-activada');
}

// Añadir el evento de clic a cada botón de pestaña
pestaniaBoton.forEach(button => button.addEventListener('click', switchTab));

// Mostrar solo la primera pestaña al cargar la página
document.querySelector('.contenido').classList.add('visible');
