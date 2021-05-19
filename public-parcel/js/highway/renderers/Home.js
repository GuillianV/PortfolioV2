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
            init: true,
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerColumnFill: 'row',
            grabCursor: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
        };


      //  var swiperBouteille = new Swiper('.swiper-container-introduce', swiperOptions)


    }

    onLeave() {
        //Javascript a lancer lorsque la page part/unload
    }

    onLeaveCompleted() {
        //Javascript a lancer lorsque la page est partie
    }
}

export default Home;