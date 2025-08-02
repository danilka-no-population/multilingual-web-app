(function () {
    const SUPPORTED_LANGS = ['en', 'de', 'es', 'fr', 'ja', 'pt', 'hi'];
    const DEFAULT_LANG = 'en';
    const queryParams = new URLSearchParams(window.location.search);
    const langParam = queryParams.get('lang')?.toLowerCase();

    let lang;
    if (SUPPORTED_LANGS.includes(langParam)) {
        lang = langParam;
    } else {
        const browserLang = navigator.language.slice(0, 2).toLowerCase();
        lang = SUPPORTED_LANGS.includes(browserLang) ? browserLang : DEFAULT_LANG;
    }

  fetch(`i18n/${lang}.json`)
    .then((response) => {
      if (!response.ok) throw new Error(`Failed to load i18n file for lang: ${lang}`);
      return response.json();
    })
    .then((translations) => {
      applyTranslations(translations);
    })
    .catch((err) => {
      console.error(err);
    });

    function applyTranslations(translations) {
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach((el) => {
            const key = el.getAttribute('data-lang');
            let translated = translations[key] || key;

            translated = translated.replace(/\{\{(.*?)\}\}/g, (_, varName) => {
                const attrName = varName.trim();
                if (el.dataset[attrName]) {
                    return el.dataset[attrName];
                }
                return '';
            });

            el.innerHTML = translated;
        });
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.access-blocks__item');
    const continueBtn = document.querySelector('.continue-btn');
    const bestOffer = document.querySelector('.best-offer');
    let selectedIndex = 0;

    blocks.forEach(b => b.classList.remove('selected'));
    blocks[0].classList.add('selected');
    bestOffer.classList.add('highlighted');

    blocks.forEach((block, index) => {
        block.addEventListener('click', () => {
            blocks.forEach(b => b.classList.remove('selected'));
            block.classList.add('selected');
            selectedIndex = index;

            if (index === 0) {
                bestOffer?.classList.add('highlighted');
            } else {
                bestOffer?.classList.remove('highlighted');
            }
        });
    });

    continueBtn.addEventListener('click', () => {
        if (selectedIndex === 0) {
            window.location.href = 'https://apple.com/';
        } else if (selectedIndex === 1) {
            window.location.href = 'https://google.com/';
        } else {
            alert('Please select an access option.');
        }
    });
});