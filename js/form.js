document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const confirmation = document.getElementById('formConfirmation');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // проста валідація
        if (message.length < 5) {
            alert('Повідомлення має бути більше 5 символів');
            return;
        }

        // зберігаємо у localStorage
        localStorage.setItem('contact_email', email);
        localStorage.setItem('contact_message', message);

        // очищаємо форму
        form.reset();

        // показуємо підтвердження
        confirmation.style.display = 'block';

        // ховаємо повідомлення через 3 секунди
        setTimeout(() => {
            confirmation.style.display = 'none';
        }, 3000);
    });
});
