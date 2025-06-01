const burger = document.getElementById('burger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// Відкрити меню
burger.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
});

// Закрити при кліку на overlay
overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});
