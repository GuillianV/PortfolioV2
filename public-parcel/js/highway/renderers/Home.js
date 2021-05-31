import Highway from '@dogstudio/highway'
import gsap, { Expo } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(MotionPathPlugin, ScrollToPlugin, ScrollTrigger)
import * as Swiper from 'swiper'

import LoadHeader from '../userControls/header'
import LoadFooter from '../userControls/footer'
import { MobileOverflow, MatchMedia, detectMob } from '../../detectmobile'
import Transform from '../../transform'


class Home extends Highway.Renderer {


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
        var swiperIntroduce = new Swiper.Swiper('.swiper-container', {
            init: false,
            slidesPerView: 1,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            spaceBetween: 30,
            loop: true,
            grabCursor: true,
            speed: 600,

        })
        swiperIntroduce.init()

        
        if(!IsMobile){
            const T = new Transform("header-presentation-container","header-presentation-right-img",20)
        }

        //CONTENT ANNIMATION
        if (windowsWidth == "960" || windowsWidth == "full") {
            let startMod
            let endMod
            let debugMode = false

            if(windowsWidth == "960"){
                startMod = "top 100%"
                endMod = "top 60%"
            }
            else{
                startMod = "top 80%"
                endMod = "top 30%"
            }
                
            if(IsMobile){
                startMod = "top 100%"
                endMod = "top 90%"
            }


            //COMPETANCES
            let skillsText = gsap.timeline({
                scrollTrigger: {
                    markers: debugMode,
                    trigger: ".other1",
                    start: startMod,
                    end: endMod,
                    scrub: 1,
                }
            });

            skillsText.fromTo(".other2", {
                xPercent: -100,
                opacity: 0

            }, {
                xPercent: 0,
                opacity: 1,
                ease: Expo.easeInOut
            })


            let skillsImg = gsap.timeline({
                scrollTrigger: {
                    markers: debugMode,
                    trigger: ".other1",
                    start: startMod,
                    end: endMod,
                    scrub: 1,
                }
            });

            skillsImg.fromTo(".other1 a img", {
                webkitFilter: "blur(8px)"
            }, {
                webkitFilter: "blur(0px)",
                rotate:2
                
            })

           



            //MES PROJETS
            let ProjText = gsap.timeline({
                scrollTrigger: {
                    markers: debugMode,
                    trigger: ".other3",
                    start: startMod,
                    end: endMod,
                    scrub: 1,
                }
            });

            
            ProjText.fromTo(".other3 ", {
                xPercent: 100,
                opacity: 0

            }, {
                xPercent: 0,
                opacity: 1,
                ease: Expo.easeInOut
            })

            let ProjImg = gsap.timeline({
                scrollTrigger: {
                    markers: debugMode,
                    trigger: ".other3",
                    start: startMod,
                    end: endMod,
                    scrub: 1,
                }
            });

            ProjImg.fromTo(".other4 a img", {
                webkitFilter: "blur(8px)"
            }, {
                webkitFilter: "blur(0px)",
                rotate:-2
            })


             //A PROPOS
             let ProposText = gsap.timeline({
                scrollTrigger: {
                    markers: debugMode,
                    trigger: ".other5",
                    start: startMod,
                    end: endMod,
                    scrub: 1,
                }
            });

            
            ProposText.fromTo(".other6", {
                xPercent: -100,
                opacity: 0

            }, {
                xPercent: 0,
                opacity: 1,
                ease: Expo.easeInOut
            })
            
            let ProposImg = gsap.timeline({
                scrollTrigger: {
                    markers: debugMode,
                    trigger: ".other5",
                    start: startMod,
                    end: endMod,
                    scrub: 1,
                }
            });

            ProposImg.fromTo(".other5 a img", {
                webkitFilter: "blur(8px)"
            }, {
                webkitFilter: "blur(0px)",
                rotate:2
            })



              //CONTACT
              let ContactText = gsap.timeline({
                scrollTrigger: {
                    markers: debugMode,
                    trigger: ".other7",
                    start: startMod,
                    end: endMod,
                    scrub: 1,
                }
            });

            
            ContactText.fromTo(".other7", {
                xPercent: 100,
                opacity: 0

            }, {
                xPercent: 0,
                opacity: 1,
                ease: Expo.easeInOut
            })
            
            let ContactImg = gsap.timeline({
                scrollTrigger: {
                    markers: debugMode,
                    trigger: ".other7",
                    start: startMod,
                    end: endMod,
                    scrub: 1,
                }
            });

            ContactImg.fromTo(".other8 a img", {
                webkitFilter: "blur(8px)"
            }, {
                webkitFilter: "blur(0px)",
                rotate:-2
            })

        }

    }

    onLeave() {
        //Javascript a lancer lorsque la page part/unload
    }

    onLeaveCompleted() {
        //Javascript a lancer lorsque la page est partie
    }
}

export default Home;