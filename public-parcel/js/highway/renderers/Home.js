import Highway from '@dogstudio/highway'
import gsap from 'gsap';
import Swiper from 'swiper'

//Load user controls
import LoadHeader from '../userControls/header'


class Home extends Highway.Renderer {


    onEnter() {
        //Javascript a lancer lorsque la page se charge
    }

    onEnterCompleted() {
        //Javascript a lancer lorsque la page est chargé
        LoadHeader()
        
        var swiperOptions = {
            init: false,
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            effect: 'flip',
            grabCursor: true,
            speed: 600,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
        };

        var swiperBouteille = new Swiper('.swiper-container-introduce', swiperOptions)
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