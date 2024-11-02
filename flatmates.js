(() => {
    let ready = false;
    function updateFlatmates() {
        if (ready) {
            return;
        }
        if (document.readyState === 'interactive') {
            const css = `
                header > nav, #nav-myaccount {
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
})();
console.log('START!!!');