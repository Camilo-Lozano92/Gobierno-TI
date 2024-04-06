document.addEventListener('DOMContentLoaded', function () {
    // Mostrar el contenido de Objetivo por defecto
    const objetivo = document.getElementById('objetivo');
    objetivo.style.display = 'block';

    // Obtener los enlaces del menú de navegación y las secciones de contenido
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.contenido');
    const itilSublist = document.getElementById('itil-subcategories');

    // Función para mostrar una sección de contenido por su ID
    function showContentById(contentId) {
        sections.forEach(section => {
            section.style.display = 'none';
        });
        const selectedSection = document.getElementById(contentId);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        }
    }

    // Agregar un evento de clic a cada enlace del menú
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevenir la acción predeterminada del enlace

            // Obtener el ID del objetivo del enlace clicado
            const targetId = link.getAttribute('href').substring(1);

            // Ocultar el contenido principal excepto la sublista de ITIL
            if (targetId !== 'itil') {
                sections.forEach(section => {
                    if (section !== itilSublist) {
                        section.style.display = 'none';
                    }
                });
            }

            // Mostrar la sublista de ITIL si se hace clic en la sección ITIL
            if (targetId === 'itil') {
                itilSublist.style.display = 'block';
            } else {
                itilSublist.style.display = 'none';
            }

            showContentById(targetId); // Mostrar contenido de la sección correspondiente

            // Detener la propagación del evento
            e.stopPropagation();
        });
    });

    // Agregar un evento de clic a cada enlace de la sublista de ITIL
    itilSublist.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

            const contentId = link.getAttribute("data-content-id");
            showContentById(contentId); // Mostrar contenido de ITIL seleccionado

            // Mostrar la sublista de ITIL
            itilSublist.style.display = 'block';
        });
    });

    // Agregar un evento de clic al documento para cerrar la sublista cuando se hace clic fuera de ella o en otro elemento del menú principal
    document.addEventListener('click', function (event) {
        const clickedElement = event.target;
        if (!itilSublist.contains(clickedElement) && !clickedElement.closest('nav')) {
            itilSublist.style.display = 'none';
        }
    });
});
