const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('nav');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelector('#year').textContent = new Date().getFullYear();
