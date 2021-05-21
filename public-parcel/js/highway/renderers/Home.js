import Highway from '@dogstudio/highway'
import gsap from 'gsap';
import * as Swiper from 'swiper'



//Load user controls
import LoadHeader from '../userControls/header'


class Home extends Highway.Renderer {


    onEnter() {
        //Javascript a lancer lorsque la page se charge
    }

    onEnterCompleted() {
        //Javascript a lancer lorsque la page est chargé
        LoadHeader()
        

        var swiperBouteille = new Swiper.Swiper('.swiper-container', {
            init: false,
            slidesPerView: 1,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            spaceBetween: 30,
            loop: true,
            grabCursor: true,
            speed: 600,
        
        })

        swiperBouteille.init()
        
      


    }

    onLeave() {
        //Javascript a lancer lorsque la page part/unload
    }

    onLeaveCompleted() {
        //Javascript a lancer lorsque la page est partie
    }
}

export default Home;