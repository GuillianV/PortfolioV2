import Highway from '@dogstudio/highway'
import Fade from './transitions/fade'
import LoadHeader from './userControls/header'
import Home from './renderers/Home'
import About from './renderers/About'
import Error404 from './renderers/Error404'


//Initialise Website
LoadHeader()


//Création de la class router
class Router {
    constructor(settings) {
        this.core = new Highway.Core(settings);

        this.core.on('NAVIGATE_IN', ({ to, trigger, location }) => {

            
            if (to.page.querySelector("header")) {
                LoadHeader()
            }

        });

        if (this.core.properties.view.dataset.routerNocache) {
            this.core.cache.delete(this.core.location.href);
        }

        //Viens chercher le wrapper sur la page
        this.wrap = document.querySelector("[data-router-wrapper]");
    }
}

//Déclaration de notre Router
const router = new Router({
    transitions: {
        default: Fade
    },
    renderers: {
        Home,
        About,
        Error404
    },
});

