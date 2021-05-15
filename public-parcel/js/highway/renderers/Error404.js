import Highway from '@dogstudio/highway'
import  gsap from 'gsap';

class Error404 extends Highway.Renderer {


    onEnter() {
        //Javascript a lancer lorsque la page se charge
    }

    onEnterCompleted() {
        //Javascript a lancer lorsque la page est chargé
    }

    onLeave() {
        //Javascript a lancer lorsque la page part/unload
    }

    onLeaveCompleted() {
        //Javascript a lancer lorsque la page est partie
    }
}

export default Error404;