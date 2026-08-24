(() => {
  'use strict';

  const html = document.documentElement;
  const lang = html.dataset.lang || 'en';
  const root = html.dataset.root || '';
  const validPages = new Set(['home', 'product', 'industries', 'plans', 'signup', 'demo', 'privacy', 'cookies', 'ai', 'terms']);
  const preferenceKey = 'duevio_privacy_preferences_v1';
  let messages = {};

  const localeMessages = {
    en: {
      invalid: 'Please complete all required fields and check that the passwords match.',
      signupOk: 'Preview validated. Production checkout is not connected in this repository yet.',
      demoOk: 'Preview validated. The production demo-request endpoint is not connected in this repository yet.',
      contact: 'Contact us',
      users: 'Agreed setup',
      requestSetup: 'Request setup',
      commercialOk: 'Preview validated. The production commercial follow-up endpoint is not connected in this repository yet.',
      next2Title: 'Commercial follow-up',
      next2Text: 'We review the selected plan, team size and implementation needs with you.',
      next3Title: 'Implementation path',
      next3Text: 'Agree setup, onboarding support and integration priorities before activation.'
    },
    it: {
      invalid: 'Completa tutti i campi obbligatori e verifica che le password coincidano.',
      signupOk: 'Anteprima validata. Il checkout di produzione non è ancora collegato in questo repository.',
      demoOk: 'Anteprima validata. L’endpoint di produzione per le richieste demo non è ancora collegato in questo repository.',
      contact: 'Contattaci',
      users: 'Configurazione concordata',
      requestSetup: 'Richiedi configurazione',
      commercialOk: 'Anteprima validata. L’endpoint di produzione per il contatto commerciale non è ancora collegato in questo repository.',
      next2Title: 'Contatto commerciale',
      next2Text: 'Verifichiamo con te piano scelto, dimensione del team ed esigenze di implementazione.',
      next3Title: 'Percorso di implementazione',
      next3Text: 'Concordiamo configurazione, supporto all’onboarding e priorità di integrazione prima dell’attivazione.'
    },
    de: {
      invalid: 'Bitte füllen Sie alle Pflichtfelder aus und prüfen Sie, ob die Passwörter übereinstimmen.',
      signupOk: 'Vorschau validiert. Der produktive Checkout ist in diesem Repository noch nicht angebunden.',
      demoOk: 'Vorschau validiert. Der produktive Endpunkt für Demo-Anfragen ist in diesem Repository noch nicht angebunden.',
      contact: 'Kontakt aufnehmen',
      users: 'Vereinbarte Konfiguration',
      requestSetup: 'Einrichtung anfragen',
      commercialOk: 'Vorschau validiert. Der produktive Endpunkt für die kommerzielle Abstimmung ist in diesem Repository noch nicht angebunden.',
      next2Title: 'Kommerzielle Abstimmung',
      next2Text: 'Wir prüfen mit Ihnen Tarif, Teamgröße und Implementierungsbedarf.',
      next3Title: 'Implementierungsweg',
      next3Text: 'Vereinbaren Sie Einrichtung, Onboarding-Support und Integrationsprioritäten vor der Aktivierung.'
    },
    es: {
      invalid: 'Completa todos los campos obligatorios y comprueba que las contraseñas coincidan.',
      signupOk: 'Vista previa validada. El checkout de producción todavía no está conectado en este repositorio.',
      demoOk: 'Vista previa validada. El endpoint de producción para solicitudes de demo todavía no está conectado en este repositorio.',
      contact: 'Contactar',
      users: 'Configuración acordada',
      requestSetup: 'Solicitar configuración',
      commercialOk: 'Vista previa validada. El endpoint de producción para seguimiento comercial todavía no está conectado en este repositorio.',
      next2Title: 'Seguimiento comercial',
      next2Text: 'Revisamos contigo el plan elegido, el tamaño del equipo y las necesidades de implantación.',
      next3Title: 'Ruta de implantación',
      next3Text: 'Acordamos configuración, soporte de onboarding y prioridades de integración antes de la activación.'
    },
    fr: {
      invalid: 'Complétez tous les champs obligatoires et vérifiez que les mots de passe correspondent.',
      signupOk: 'Aperçu validé. Le paiement de production n’est pas encore connecté dans ce dépôt.',
      demoOk: 'Aperçu validé. Le point de terminaison de production pour les demandes de démonstration n’est pas encore connecté dans ce dépôt.',
      contact: 'Nous contacter',
      users: 'Configuration convenue',
      requestSetup: 'Demander la configuration',
      commercialOk: 'Aperçu validé. Le point de terminaison de production pour le suivi commercial n’est pas encore connecté dans ce dépôt.',
      next2Title: 'Suivi commercial',
      next2Text: 'Nous examinons avec vous l’offre choisie, la taille de l’équipe et les besoins de mise en œuvre.',
      next3Title: 'Parcours de mise en œuvre',
      next3Text: 'Convenez de la configuration, du support onboarding et des priorités d’intégration avant activation.'
    },
    ru: {
      invalid: 'Заполните все обязательные поля и проверьте, что пароли совпадают.',
      signupOk: 'Предварительная версия проверена. Рабочая платёжная интеграция в этом репозитории пока не подключена.',
      demoOk: 'Предварительная версия проверена. Рабочий endpoint для заявок на демонстрацию в этом репозитории пока не подключён.',
      contact: 'Связаться с нами',
      users: 'Согласованная конфигурация',
      requestSetup: 'Запросить настройку',
      commercialOk: 'Предварительная версия проверена. Рабочая интеграция для коммерческого сопровождения в этом репозитории пока не подключена.',
      next2Title: 'Коммерческое сопровождение',
      next2Text: 'Мы вместе проверим выбранный тариф, размер команды и потребности внедрения.',
      next3Title: 'Путь внедрения',
      next3Text: 'До активации согласуем настройку, поддержку онбординга и приоритеты интеграции.'
    }
  };

  function currentRoute() {
    const hash = window.location.hash.replace(/^#/, '').split('?')[0];
    if (!hash || hash === 'signup-form' || hash === 'demo-form') return hash || 'home';
    return validPages.has(hash) ? hash : 'home';
  }

  function showPage(route) {
    let page = route;
    if (route === 'signup-form') page = 'signup';
    if (route === 'demo-form') page = 'demo';
    if (!validPages.has(page)) page = 'home';

    document.querySelectorAll('[data-page]').forEach((section) => {
      const active = section.dataset.page === page;
      section.hidden = !active;
      section.classList.toggle('active', active);
    });

    document.querySelectorAll('[data-route]').forEach((link) => {
      const active = link.dataset.route === page;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });

    const mobileNav = document.getElementById('mobileNav');
    const mobileToggle = document.querySelector('.mobile-toggle');
    if (mobileNav) mobileNav.hidden = true;
    if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');

    requestAnimationFrame(() => {
      if (route === 'signup-form') document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else if (route === 'demo-form') document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else window.scrollTo({ top: 0, behavior: 'auto' });
    });
  }

  async function loadTranslations() {
    if (lang === 'en') return;
    try {
      const response = await fetch(`${root}assets/i18n/${lang}.json`, { cache: 'no-cache' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      messages = await response.json();
      document.querySelectorAll('[data-i18n]').forEach((node) => {
        const value = messages[node.dataset.i18n];
        if (typeof value === 'string') node.textContent = value;
      });
      document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
        const value = messages[node.dataset.i18nPlaceholder];
        if (typeof value === 'string') node.setAttribute('placeholder', value);
      });
    } catch (error) {
      console.error('Duevio i18n loading error', error);
    }
  }

  function prepareLanguageMenu() {
    const names = { en: 'EN', it: 'IT', de: 'DE', es: 'ES', fr: 'FR', ru: 'RU' };
    const label = document.querySelector('.language-button span:first-child');
    if (label) label.textContent = names[lang] || 'EN';

    document.querySelectorAll('[data-lang-link]').forEach((link) => {
      const targetLang = link.dataset.langLink;
      if (targetLang === lang) link.setAttribute('aria-current', 'true');
      link.addEventListener('click', () => {
        const hash = window.location.hash || '#home';
        const base = link.getAttribute('href');
        link.setAttribute('href', `${base}${hash}`);
      });
    });

    const button = document.getElementById('languageButton');
    const menu = document.getElementById('languageMenu');
    if (!button || !menu) return;
    button.addEventListener('click', () => {
      const opening = menu.hidden;
      menu.hidden = !opening;
      button.setAttribute('aria-expanded', String(opening));
    });
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.language-switcher')) {
        menu.hidden = true;
        button.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function prepareMobileNav() {
    const toggle = document.querySelector('.mobile-toggle');
    const nav = document.getElementById('mobileNav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => {
      const opening = nav.hidden;
      nav.hidden = !opening;
      toggle.setAttribute('aria-expanded', String(opening));
    });
  }

  function updatePlanSummary() {
    const selected = document.querySelector('input[name="selectedPlan"]:checked')?.value || 'Essential';
    const plan = document.getElementById('summaryPlan');
    const users = document.getElementById('summaryUsers');
    const amount = document.getElementById('summaryAmount');
    if (plan) plan.textContent = selected;
    const copy = localeMessages[lang] || localeMessages.en;
    const submit = document.getElementById('signupSubmit');
    const next2Title = document.getElementById('next2Title');
    const next2Text = document.getElementById('next2Text');
    const next3Title = document.getElementById('next3Title');
    const next3Text = document.getElementById('next3Text');
    const t = (key, fallback) => messages[key] || fallback;
    if (selected === 'Essential') {
      if (users) users.textContent = '1';
      if (amount) amount.textContent = '€120';
      if (submit) submit.textContent = t('signup.continuePayment', 'Continue to secure payment');
      if (next2Title) next2Title.textContent = t('signup.next2Title', 'Secure payment');
      if (next2Text) next2Text.textContent = t('signup.next2Text', 'Essential continues to the payment provider.');
      if (next3Title) next3Title.textContent = t('signup.next3Title', 'Workspace access');
      if (next3Text) next3Text.textContent = t('signup.next3Text', 'Open your Essential workspace after payment.');
    } else {
      if (users) users.textContent = copy.users;
      if (amount) amount.textContent = copy.contact;
      if (submit) submit.textContent = copy.requestSetup;
      if (next2Title) next2Title.textContent = copy.next2Title;
      if (next2Text) next2Text.textContent = copy.next2Text;
      if (next3Title) next3Title.textContent = copy.next3Title;
      if (next3Text) next3Text.textContent = copy.next3Text;
    }
  }

  function validateForm(form) {
    let valid = form.checkValidity();
    const password = form.querySelector('[name="password"]');
    const confirm = form.querySelector('[name="passwordConfirm"]');
    if (password && confirm && password.value !== confirm.value) {
      valid = false;
      confirm.setCustomValidity('Passwords do not match');
    } else if (confirm) {
      confirm.setCustomValidity('');
    }
    if (!valid) form.reportValidity();
    return valid;
  }

  function prepareForms() {
    document.querySelectorAll('input[name="selectedPlan"]').forEach((radio) => radio.addEventListener('change', updatePlanSummary));
    updatePlanSummary();

    const signup = document.getElementById('signup-form');
    signup?.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = document.getElementById('signupStatus');
      const copy = localeMessages[lang] || localeMessages.en;
      if (!validateForm(signup)) {
        if (status) status.textContent = copy.invalid;
        return;
      }
      const selected = document.querySelector('input[name="selectedPlan"]:checked')?.value || 'Essential';
      if (status) status.textContent = selected === 'Essential' ? copy.signupOk : copy.commercialOk;
    });
    signup?.addEventListener('reset', () => setTimeout(() => {
      const status = document.getElementById('signupStatus');
      if (status) status.textContent = '';
      updatePlanSummary();
    }, 0));

    const demo = document.getElementById('demo-form');
    demo?.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = document.getElementById('demoStatus');
      const copy = localeMessages[lang] || localeMessages.en;
      if (!validateForm(demo)) {
        if (status) status.textContent = copy.invalid;
        return;
      }
      if (status) status.textContent = copy.demoOk;
    });
  }

  function readPreferences() {
    try {
      const raw = localStorage.getItem(preferenceKey);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function storePreferences(analytics, marketing) {
    const value = {
      essential: true,
      analytics: Boolean(analytics),
      marketing: Boolean(marketing),
      updatedAt: new Date().toISOString()
    };
    try { localStorage.setItem(preferenceKey, JSON.stringify(value)); } catch {}
    document.documentElement.dataset.analyticsConsent = String(value.analytics);
    document.documentElement.dataset.marketingConsent = String(value.marketing);
    return value;
  }

  function preparePrivacyControls() {
    const banner = document.getElementById('cookieBanner');
    const modal = document.getElementById('cookieModal');
    const analytics = document.getElementById('analyticsConsent');
    const marketing = document.getElementById('marketingConsent');
    const close = modal?.querySelector('.modal-close');

    const apply = (prefs) => {
      if (!prefs) return;
      document.documentElement.dataset.analyticsConsent = String(Boolean(prefs.analytics));
      document.documentElement.dataset.marketingConsent = String(Boolean(prefs.marketing));
      if (analytics) analytics.checked = Boolean(prefs.analytics);
      if (marketing) marketing.checked = Boolean(prefs.marketing);
    };

    const openModal = () => {
      apply(readPreferences() || { analytics: false, marketing: false });
      if (modal) modal.hidden = false;
      document.body.classList.add('modal-open');
      close?.focus();
    };
    const closeModal = () => {
      if (modal) modal.hidden = true;
      document.body.classList.remove('modal-open');
    };

    const existing = readPreferences();
    if (existing) apply(existing);
    else if (banner) banner.hidden = false;

    document.querySelectorAll('[data-cookie-action]').forEach((button) => {
      button.addEventListener('click', () => {
        const action = button.dataset.cookieAction;
        if (action === 'settings') return openModal();
        if (action === 'accept') storePreferences(true, true);
        if (action === 'reject') storePreferences(false, false);
        if (banner) banner.hidden = true;
      });
    });

    document.getElementById('saveCookieSettings')?.addEventListener('click', () => {
      storePreferences(analytics?.checked, marketing?.checked);
      if (banner) banner.hidden = true;
      closeModal();
    });
    document.getElementById('openCookieSettings')?.addEventListener('click', openModal);
    document.getElementById('footerCookieSettings')?.addEventListener('click', openModal);
    close?.addEventListener('click', closeModal);
    modal?.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && modal && !modal.hidden) closeModal(); });
  }

  async function init() {
    await loadTranslations();
    prepareLanguageMenu();
    prepareMobileNav();
    prepareForms();
    preparePrivacyControls();
    showPage(currentRoute());
    window.addEventListener('hashchange', () => showPage(currentRoute()));
  }

  init();
})();
