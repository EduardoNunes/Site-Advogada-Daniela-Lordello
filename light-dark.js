function lightDark() {
    var troca = document.getElementById('light-dark')
    var alt = troca.getAttribute('alt');

    var body = document.body;
    
    const preto = 'rgb(28, 28, 27)'
    const roxo = 'rgb(102, 36, 131)'
    const branco = 'rgb(254, 254, 254)'
    const rosa = 'rgb(231, 29, 115)'

    const pretoBackground = '28, 28, 27'
    const brancoBackground = '254, 254, 254'

    if (alt ==='light') {
        troca.setAttribute('src', '/assets/lua.png');
        troca.setAttribute('alt', 'dark');

        body.style.backgroundImage = 'url(/assets/marmore-preto-roxo.jpg)'

        document.documentElement.style.setProperty('--cor-preto', branco);
        document.documentElement.style.setProperty('--cor-branco', preto);
        document.documentElement.style.setProperty('--cor-roxo', rosa);
        document.documentElement.style.setProperty('--cor-rosa', roxo);
        document.documentElement.style.setProperty('--cor-background-branco', pretoBackground);
    }
    else {
        troca.setAttribute('src', '/assets/sol.png');
        troca.setAttribute('alt', 'light');

        body.style.backgroundImage = 'url(/assets/textura-marmore.jpg)'

        document.documentElement.style.setProperty('--cor-preto', preto);
        document.documentElement.style.setProperty('--cor-branco', branco);
        document.documentElement.style.setProperty('--cor-roxo', roxo);
        document.documentElement.style.setProperty('--cor-rosa', rosa);
        document.documentElement.style.setProperty('--cor-background-branco', brancoBackground);
    }
}