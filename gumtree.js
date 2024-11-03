(() => {
    let ready = false;
    function updateFlatmates() {
        if (ready) {
            return;
        }
        if (document.readyState === 'interactive') {
            const css = `
                [role="navigation"] {
                    display: none !important;
                }
            `;
            const style = document.createElement('style');
            const head = document.body;
            style.type = 'text/css';
            style.setAttribute('id', 'firefox-va-styles');
            style.appendChild(document.createTextNode(css));
            head.appendChild(style);
            ready = true;
        }
    }
    document.addEventListener('readystatechange', () => updateFlatmates());
    if (document.location.href.includes('facebook.com/settings')) {
        document.location.href = 'https://www.facebook.com/messages';
    }
})();
