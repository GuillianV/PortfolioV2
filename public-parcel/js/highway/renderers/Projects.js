import Highway from '@dogstudio/highway'
import gsap from 'gsap';
import * as Swiper from 'swiper'
import { Navigation } from 'swiper';
import { Autoplay } from 'swiper';

Swiper.Swiper.use([Navigation,Autoplay]);

//Load user controls
import LoadHeader from '../userControls/header'
import { LoadProjects } from '../../images'
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
        LoadProjects()
        LoadFooter()

        //SWIPER AUTOIT
        var swiperAutoit = new Swiper.Swiper('.swiper-Autoit', {
            init: false,
            slidesPerView: 1,
            loop:true,
            spaceBetween: 30,
            grabCursor: true,
            speed: 600,
            navigation: {
                nextEl: '.swiper-projet-right-Autoit',
                prevEl: '.swiper-projet-left-Autoit',
            },autoplay: {
                delay:2000,
            }

        })
        swiperAutoit.init()

          //SWIPER DASHRAIDER
          var swiperDash = new Swiper.Swiper('.swiper-Dashraider', {
            init: false,
            slidesPerView: 1,
            loop:true,
            spaceBetween: 30,
            grabCursor: true,
            speed: 600,
            navigation: {
                nextEl: '.swiper-projet-right-Dashraider',
                prevEl: '.swiper-projet-left-Dashraider',
            },autoplay: {
                delay:2100,
            }

        })
        swiperDash.init()


           //SWIPER Portfolio
           var swiperPortfolio = new Swiper.Swiper('.swiper-Portfolio', {
            init: false,
            slidesPerView: 1,
            loop:true,
            spaceBetween: 30,
            grabCursor: true,
            speed: 600,
            navigation: {
                nextEl: '.swiper-projet-right-Portfolio',
                prevEl: '.swiper-projet-left-Portfolio',
            },autoplay: {
                delay:2200,
            }

        })
        swiperPortfolio.init()


          //SWIPER SpaceDim
          var SpaceDim = new Swiper.Swiper('.swiper-SpaceDim', {
            init: false,
            slidesPerView: 1,
            loop:true,
            spaceBetween: 30,
            grabCursor: true,
            speed: 600,
            navigation: {
                nextEl: '.swiper-projet-right-SpaceDim',
                prevEl: '.swiper-projet-left-SpaceDim',
            },autoplay: {
                delay:2300,
            }

        })
        SpaceDim.init()
        

            //SWIPER SpaceDim
            var Project2d = new Swiper.Swiper('.swiper-Project2d', {
                init: false,
                slidesPerView: 1,
                loop:true,
                spaceBetween: 30,
                grabCursor: true,
                speed: 600,
                navigation: {
                    nextEl: '.swiper-projet-right-Project2d',
                    prevEl: '.swiper-projet-left-Project2d',
                },autoplay: {
                    delay:2400,
                }
    
            })
            Project2d.init()

    }

    onLeave() {
        //Javascript a lancer lorsque la page part/unload
    }

    onLeaveCompleted() {
        //Javascript a lancer lorsque la page est partie
    }
}

export default Projects;