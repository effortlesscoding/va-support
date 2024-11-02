function updateFlatmates() {
    const css = `
        header > nav, #nav-myaccount {
            display: none;
        }
    `;
    const style = document.createElement('style');
    const head = document.head || document.getElementsByTagName('head')[0];
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);

    document.querySelector('#nav-myaccount').remove();
}
updateFlatmates();
