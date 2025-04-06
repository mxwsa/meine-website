// Funktion, um eine Sektion anzuzeigen und alle anderen zu verstecken
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}
