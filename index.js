function abrirHamburger() {
    let menu = document.getElementById('menuHamburger')
    let display = window.getComputedStyle(menu).getPropertyValue('display')

    let onOff = document.getElementById("on-off")

    if (display === 'none') {
        menu.style.display = 'block'
        onOff.setAttribute('src', '/assets/x-preto.png');
        onOff.setAttribute('alt', 'voltar');
    }
    else {
        menu.style.display = 'none'
        onOff.setAttribute('src', '/assets/menu.png');
        onOff.setAttribute('alt', 'hamburguer');
    }
}