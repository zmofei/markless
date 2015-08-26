var StyleConf = {
    'h1': 'margin: 50px 0 20px; font-size: 30px;',
    'h2': 'margin: 35px 0 20px; font-size: 26px;',
    'h3': 'margin: 20px 0; font-size: 21px;',
    'h4': 'font-size: 18px;',
    'h5': 'font-size: 16px;',
    'h6': 'font-size: 16px;',
    'blockquotes' : 'padding: 10px 15px; border-left: 10px solid #D6DBDF;  margin: 0 0 20px; background:none repeat scroll 0 0 rgba(102,128,153,.05); color:rgb(44, 62, 80); min-height: 18px;',
    'text': 'margin-bottom:15px;'
}

function Style(mode) {
    return StyleConf[mode]
}

export default Style;