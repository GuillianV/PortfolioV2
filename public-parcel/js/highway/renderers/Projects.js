import Highway from '@dogstudio/highway'
import  gsap from 'gsap';
import * as Swiper from 'swiper'

//Load user controls
import LoadHeader from '../userControls/header'
import LoadFooter from '../userControls/footer'
import { MobileOverflow, MatchMedia, detectMob } from '../../detectmobile'

class Projects extends Highway.Renderer {


    onEnter() {
        //Javascript a lancer lorsque la page se charge
    }

    onEnterCompleted() {
        //Javascript a lancer lorsque la page est chargé
        let windowsWidth = MatchMedia();
        let IsMobile = detectMob();

        MobileOverflow()
        LoadHeader()
        LoadFooter()

        //SWIPER INTRODUCE
        var swiperProjects = new Swiper.Swiper('.swiper-Projects', {
            init: false,
            slidesPerView: 1,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            spaceBetween: 30,
            loop: true,
            grabCursor: true,
            speed: 600,

        })
        swiperProjects.init()


    }

    onLeave() {
        //Javascript a lancer lorsque la page part/unload
    }

    onLeaveCompleted() {
        //Javascript a lancer lorsque la page est partie
    }
}

export default Projects;