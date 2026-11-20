const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

function setMenuOpen(isOpen) {
  menuToggle.setAttribute('aria-expanded', String(isOpen));
}

menuToggle.hidden = false;
menuToggle.addEventListener('click', () => {
  setMenuOpen(menuToggle.getAttribute('aria-expanded') === 'false');
});

navigation.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link || menuToggle.getAttribute('aria-expanded') !== 'true') return;

  setMenuOpen(false);
  const section = document.querySelector(link.hash);
  section.setAttribute('tabindex', '-1');
  section.focus({ preventScroll: true });
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape' || menuToggle.getAttribute('aria-expanded') !== 'true') return;

  setMenuOpen(false);
  menuToggle.focus();
});
