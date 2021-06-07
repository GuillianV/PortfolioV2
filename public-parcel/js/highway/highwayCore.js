//Load Libs
import Highway from '@dogstudio/highway'
import  gsap from 'gsap';

//Load Transition
import Fade from './transitions/fade'
import { Loader,LoaderOut } from './transitions/loader'

//Load user controls
import LoadHeader from './userControls/header'
import LoadLang from '../lang'

//Load Renderers
import Home from './renderers/Home'
import About from './renderers/About'
import Mentions from './renderers/Mentions'
import Projects from './renderers/Projects'
import Skills from './renderers/Skills'
import Contact from './renderers/Contact'
import Error404 from './renderers/Error404'


//Initialise Website


window.onload = function () {
    
    LoadLang()
    LoaderOut("#loader")
}


//Création de la class router
class Router {
    constructor(settings) {
        this.core = new Highway.Core(settings);

        this.core.on('NAVIGATE_IN', ({ to, trigger, location }) => {

            

        });

        this.core.on('NAVIGATE_END', ({ to, from, trigger, location }) => {

            LoadLang()
            LoaderOut("#loader")
            

        });

     

        //Viens chercher le wrapper sur la page
        this.wrap = document.querySelector("[data-router-wrapper]");
    }
}

//Déclaration de notre Router
const router = new Router({
    transitions: {
        default: Loader
    },
    renderers: {
        Home,
        About,
        Error404,
        Contact,
        Skills,
        Projects,
        Mentions
    },
});

