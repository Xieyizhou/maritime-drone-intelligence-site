const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (button && nav) {
  const close = (restoreFocus = false) => {
    button.setAttribute('aria-expanded', 'false');
    nav.dataset.open = 'false';
    if (restoreFocus) button.focus();
  };
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    nav.dataset.open = String(open);
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') close(true);
  });
  document.addEventListener('click', event => {
    if (!nav.contains(event.target) && !button.contains(event.target)) close();
  });
  document.addEventListener('focusin', event => {
    if (!nav.contains(event.target) && !button.contains(event.target)) close();
  });
  window.matchMedia('(min-width: 541px)').addEventListener('change', () => close());
}
