import Highway from '@dogstudio/highway'
import gsap from 'gsap';
import {MotionPathPlugin} from 'gsap/MotionPathPlugin'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(MotionPathPlugin,ScrollToPlugin,ScrollTrigger)
import * as Swiper from 'swiper'

import LoadHeader from '../userControls/header'
import { MobileOverflow, MatchMedia, detectMob } from '../../detectmobile'


class Home extends Highway.Renderer {


    onEnter() {
        //Javascript a lancer lorsque la page se charge
    }

    onEnterCompleted() {
        //Javascript a lancer lorsque la page est chargé
        MobileOverflow()
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

        let windowsWidth = MatchMedia();
        let IsMobile = detectMob();

        console.log(windowsWidth)
        console.log(IsMobile)

        

        // let tl = gsap.timeline({
        //     scrollTrigger: {
        //       markers:true,
        //       trigger: ".other1",
        //       endTrigger:".other3",
        //       start: "top 80%", 
        //       end: "top 10%", 
        //       scrub: 1, 
        //     }
        // });

        // tl.to(".other2",{
        //     x:100
        // })
 


    }

    onLeave() {
        //Javascript a lancer lorsque la page part/unload
    }

    onLeaveCompleted() {
        //Javascript a lancer lorsque la page est partie
    }
}

export default Home;