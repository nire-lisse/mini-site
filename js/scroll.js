document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); // При виході з зони видимості
            }
        });
    }, {
        threshold: 0.1 // 10% елемента має бути видно, щоб активувалось
    });

    elements.forEach(el => observer.observe(el));
});
