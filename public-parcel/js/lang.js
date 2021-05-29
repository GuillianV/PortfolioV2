import * as JSON from "../assets/traduction/trad.json"


function LoadLang() {


    let langueEnCours = document.documentElement.lang
    let langVerif = window.location.href.slice(-3)
    if (langVerif.indexOf("en") > -1) {
        console.log("en")
        langueEnCours = "en"
        document.documentElement.lang = "en"
    } else {
        console.log("fr")
        langueEnCours = "fr"
        document.documentElement.lang = "fr"
    }


    let Json = JSON;
    let language;


    for (let languagesEnCour of Json.languages) {
        if (languagesEnCour.code == langueEnCours) {
            language = languagesEnCour
        }
    }

    let dataHref = document.querySelectorAll("a")
    if (langueEnCours == "en") {
        for (let data of dataHref) {
            if(data.innerHTML != "FR" && data.innerHTML != "EN" ){
                let newHref = data.href
                newHref = newHref.replace('/fr', '/en')
                data.href = newHref
            }
        }
    }else{
        for (let data of dataHref) {
            if(data.innerHTML != "FR" && data.innerHTML != "EN" ){
                let newHref = data.href
                newHref = newHref.replace('/en', '/fr')
                data.href = newHref
            }
        }
    }




    let dataTraduction = document.querySelectorAll("[data-traduction]")
    for (let data of dataTraduction) {
        let traduction = findTraduction(data.dataset.traduction, language)
        if (traduction != null) {
            if(data.dataset.upper == "true"){
                data.innerHTML = traduction[1].toUpperCase()
            }else{
                data.innerHTML = traduction[1]
            }
            
        }

    }

    function findTraduction(data_traduction_value = null, Traductions = language) {

        if (data_traduction_value != null) {
            for (let Traduction of Traductions.allTrad) {
                if (Traduction.key == data_traduction_value) {
                    return [Traduction.key, Traduction.traduction]
                }
            }
            return null
        }
        else
            return null
    }

}

export default LoadLang;