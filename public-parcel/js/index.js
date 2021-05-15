import Highway from '@dogstudio/highway'
import  gsap from 'gsap';
// import Fade from './transition'
// import {Home,About} from './renderers'

// import Express from 'express';
// import Http from 'http'
// const express = Express
// let app = express()
class Home extends Highway.Renderer {


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

export { Home };

class About extends Highway.Renderer {


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
// let http = Http
// let server = http.Server(app)
class Fade extends Highway.Transition {
    in({ from, to, done }) {
      // Reset Scroll
      window.scrollTo(0, 0);
  
      // Remove Old View
      from.remove();
  
      // Animation
      gsap.fromTo(to, 0.5,
        { opacity: 0 },
        {
          opacity: 1,
          onComplete: done
        }
      );
    }
  
    out({ from, done }) {
      // Animation
      gsap.fromTo(from, 0.5,
        { opacity: 1 },
        {
          opacity: 0,
          onComplete: done
        }
      );
    }
}

const H = new Highway.Core({
    transitions:{
        default:Fade
    },
    renderers: {
       Home,
       About
    },
})
