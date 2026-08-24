(() => {
  'use strict';
  const html = document.documentElement;
  const lang = html.dataset.lang || 'en';
  const root = html.dataset.root || '';
  const languages = {
    en: { flag: '🇬🇧', code: 'EN', name: 'English' },
    it: { flag: '🇮🇹', code: 'IT', name: 'Italiano' },
    mt: { flag: '🇲🇹', code: 'MT', name: 'Malti' },
    de: { flag: '🇩🇪', code: 'DE', name: 'Deutsch' },
    es: { flag: '🇪🇸', code: 'ES', name: 'Español' },
    fr: { flag: '🇫🇷', code: 'FR', name: 'Français' },
    ru: { flag: '🇷🇺', code: 'RU', name: 'Русский' }
  };

  function decorate() {
    const menu = document.getElementById('languageMenu');
    if (!menu) return;

    if (!menu.querySelector('[data-lang-link="mt"]')) {
      const mt = document.createElement('a');
      mt.setAttribute('role', 'menuitem');
      mt.dataset.langLink = 'mt';
      mt.href = `${root}mt/`;
      const de = menu.querySelector('[data-lang-link="de"]');
      menu.insertBefore(mt, de || null);
    }

    menu.querySelectorAll('[data-lang-link]').forEach((link) => {
      const key = link.dataset.langLink;
      const info = languages[key];
      if (!info) return;
      link.innerHTML = `<span class="lang-flag" aria-hidden="true">${info.flag}</span><span>${info.name}</span>`;
      if (key === lang) link.setAttribute('aria-current', 'true');
    });

    const label = document.querySelector('.language-button .language-code, .language-button span:first-child');
    const current = languages[lang] || languages.en;
    if (label) label.textContent = `${current.flag} ${current.code}`;
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', decorate);
  else decorate();
})();
