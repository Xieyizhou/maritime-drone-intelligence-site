const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const header = document.querySelector('[data-header]');

const updateHeader = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
};

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

if (menuButton && navigation) {
  const setMenu = (open) => {
    menuButton.setAttribute('aria-expanded', String(open));
    navigation.dataset.open = String(open);
    header?.classList.toggle('menu-open', open);
  };

  menuButton.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) setMenu(false);
  });
}
