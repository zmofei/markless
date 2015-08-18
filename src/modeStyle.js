StyleConf = {
    'h1': 'margin: 50px 0 20px; font-size: 30px;',
    'h2': 'margin: 35px 0 20px; font-size: 26px;',
    'h3': 'margin: 20px 0; font-size: 21px;',
    'h4': 'font-size: 18px;',
    'h5': 'font-size: 16px;',
    'h6': 'font-size: 16px;',
}

function Style(mode) {
    console.log(mode.ret)
    return StyleConf[mode]
}

module.exports = Style;
