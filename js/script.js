const btnLogin = document.getElementById('btn-login');
const btnSign = document.getElementById('btn-sign');
const buttonMenu = document.querySelector('.button-menu');
const navLinks = document.querySelector('.nav-links');

function handleButtonClick(button, otherButton) {
    button.style.outline = 'solid 3px var(--primary)';
    button.style.backgroundColor = '#fff';
    otherButton.style.outline = 'none';
    otherButton.style.backgroundColor = 'var(---secondary)';
}

btnLogin.addEventListener('click', () => {
    handleButtonClick(btnLogin, btnSign);
});

btnSign.addEventListener('click', () => {
    handleButtonClick(btnSign, btnLogin);
});

buttonMenu.addEventListener('click', () => {
    buttonMenu.classList.toggle('active');
    if (buttonMenu.classList.contains('active')) {
        navLinks.style.display = 'block';

        setTimeout(() => {
            navLinks.style.transform = 'scale(1)';
        }, 300);
    } else {
        navLinks.style.transform = 'scale(0)';
        setTimeout(() => {
            navLinks.style.display = 'none';
        }, 300);
    }
});
