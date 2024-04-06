function showContent(contentId) {
    // Ocultar todo el contenido actual
    var allContent = document.querySelectorAll('.content-item');
    allContent.forEach(item => {
        item.style.display = 'none';
    });

    // Mostrar el contenido específico seleccionado
    var contentToShow = document.getElementById(contentId);
    if (contentToShow) {
        contentToShow.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Mostrar el contenido de Objetivo por defecto
    const objetivo = document.getElementById('objetivo');
    objetivo.style.display = 'block';
    
    // Obtener los enlaces del menú de navegación y las secciones de contenido
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.contenido');

    // Agregar un evento de clic a cada enlace del menú
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevenir la acción predeterminada del enlace

            // Obtener el ID del objetivo del enlace clicado
            const targetId = link.getAttribute('href').substring(1);

            // Ocultar todas las secciones de contenido y mostrar solo la seleccionada
            sections.forEach(section => {
                section.style.display = 'none';
                if (section.id === targetId) {
                    section.style.display = 'block';
                }
            });

            // Mostrar la sublista desplegable de ITIL si se hace clic en el enlace correspondiente
            if (targetId === 'itil') {
                const itilSublist = document.getElementById('itil-subcategories');
                if (itilSublist) {
                    itilSublist.style.display = 'block';
                }
            } else {
                const itilSublist = document.getElementById('itil-subcategories');
                if (itilSublist) {
                    itilSublist.style.display = 'none';
                }
            }
        });
    });

    // Agregar un evento de clic a cada sección de contenido
    sections.forEach(section => {
        section.addEventListener('click', () => {
            // Ocultar todas las secciones de contenido y mostrar solo la seleccionada
            sections.forEach(sec => {
                sec.style.display = 'none';
            });
            section.style.display = 'block';
        });
    });
});