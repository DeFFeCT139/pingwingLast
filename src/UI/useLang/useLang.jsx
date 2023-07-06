import Language from './LanguageСonfig/LanguageСonfig.json'

// выбор по умолчанию 
let lang = 'ru'

// выбор языка на сайте
export const postLang = (lengs) => {
    lang = lengs
}

// меняю язык
export const useLang = ( block) => {
    if (lang === 'ru'){ 
        return(setLang(Language.ru, block))
    } else if (lang === 'en'){
        return(setLang(Language.en, block))
    } else if (lang === 'ger'){
        return(setLang(Language.ger, block))
    } else if (lang === 'ar'){
        return(setLang(Language.ar, block))
    } else if (lang === 'fr'){
        return(setLang(Language.fr, block))
    }
}

// указываю деректорию
const setLang = (Language, block) =>{
    if (block === 'header'){
        return(Language.header)
    } else if (block === 'paralax'){
        return(Language.paralax)
    } else if (block === 'contact'){
        return(Language.main.contact)
    } else if (block === 'about'){
        return(Language.main.about)
    } else if (block === 'slider'){ 
        return(setslider(Language.main.about.slider))
    }
}

// подгоняю данные слайдера в подобающий вид
const setslider = (Language) =>{
    let Languages = Object.values(Language)
    let btns = Languages.map(item => Object.values(item.btns))
    for (let index = 0; index < Languages.length; index++) Languages[index].btns = btns[index]
    return(Languages)
}