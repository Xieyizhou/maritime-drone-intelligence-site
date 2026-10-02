document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (menu && nav) {
  const close = (restoreFocus = false) => {
    menu.setAttribute('aria-expanded', 'false');
    nav.dataset.open = 'false';
    if (restoreFocus) menu.focus();
  };
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav.dataset.open = String(open);
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') close(true);
  });
  document.addEventListener('click', event => {
    if (!nav.contains(event.target) && !menu.contains(event.target)) close();
  });
  document.addEventListener('focusin', event => {
    if (!nav.contains(event.target) && !menu.contains(event.target)) close();
  });
  window.matchMedia('(min-width: 651px)').addEventListener('change', () => close());
}
const copyButton = document.querySelector('[data-copy-email]');
if (copyButton) {
  copyButton.hidden = false;
  const status = document.querySelector('.copy-status');
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(copyButton.dataset.copyEmail);
      status.textContent = 'Email address copied.';
    } catch {
      status.textContent = 'Copy is unavailable here. Select the email address above, or use “Write an email”.';
    }
  });
}
// Preserve previously shared research inquiry links.
if (new URLSearchParams(location.search).get('intent') === 'matched-record') {
  document.querySelector('#research-inquiry')?.scrollIntoView();
}
