import Highway from '@dogstudio/highway'
import Fade from './transitions/fade'
import Home from './renderers/Home'
import About from './renderers/About'
import Error404 from './renderers/Error404'

const H = new Highway.Core({
    transitions:{
        default:Fade
    },
    renderers: {
       Home,
       About,
       Error404
    },
})
