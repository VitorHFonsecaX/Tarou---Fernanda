// Adiciona um efeito de "revelação" sutil ao rolar a página
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% da seção visível
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona uma classe para animar a entrada
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Para de observar após a primeira animação
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('hidden-section'); // Estilo inicial (opacity: 0, transform: translateY(20px))
        sectionObserver.observe(section);
    });
});

// Adicione aqui qualquer JS para o slider de depoimentos ou outras interações.
