document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das standardmäßige Absenden des Formulars

    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    const correctPassword = 'VadimDerBoss'; // Hier wird das korrekte Passwort festgelegt

    if (password === correctPassword) {
        // Leite zur neuen Benutzeroberfläche weiter
        window.location.href = 'new_interface.html';
    } else {
        message.textContent = 'Falsches Passwort. Bitte versuche es erneut.';
        message.classList.remove('hidden');
        message.style.color = '#ff0000';
    }
});
