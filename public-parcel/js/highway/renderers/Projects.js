import Highway from '@dogstudio/highway'
import gsap from 'gsap';
import * as Swiper from 'swiper'
import { Navigation } from 'swiper';

Swiper.Swiper.use([Navigation]);

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
            grabCursor: true,
            observer: true,
            observeParents: true,
            speed: 600,
            navigation: {
                nextEl: '.swiper-projet-right',
                prevEl: '.swiper-projet-left',
            },

        })


        let experiences = document.querySelectorAll('[data-experiences-popup]')
        for (let experience of experiences) {
            experience.addEventListener("click", function () {
                
                let fixed = document.querySelectorAll(".ct-fixed")
                for (let fix of fixed) {
                    fix.style.transform = "scale(1)"
                }

               
                if (experience.dataset.experiencesPopup == "autoit") {

                    let imgs = [
                        require("../../../assets/img/header-bg.png"),
                        require("../../../assets/img/guillian-back.png"),
                        require("../../../assets/icons/fenec.png"),
                    ]
                    LoadCtPopup(imgs,experience.dataset.experiencesPopup)
                }

                

               
            });
        }


        function LoadCtPopup(images,dataset){
            let wrapper = document.querySelector(".swiper-wrapper");
            wrapper.innerHTML = "";



            for (let img of images) {
                var newDiv = document.createElement("div");
                newDiv.classList.add("swiper-slide");
                var newImg = document.createElement("img");
                newImg.classList.add("image-cover")
                newDiv.appendChild(newImg)
                newImg.src = img
                wrapper.appendChild(newDiv)
            }

            let eleme = document.querySelectorAll("[data-experiences-popup-"+dataset+"]")
            let title = document.querySelector("#popup-title")
            let desc = document.querySelector("#popup-description")
            let tech = document.querySelector("#popup-technologie")
            
            for(let elem of eleme){
               if(elem.dataset.popupTitle == "popup-title"){
                title.innerHTML = elem.innerHTML
               }
               if(elem.dataset.popupTitle == "popup-description"){
                desc.innerHTML = elem.innerHTML
               }
               if(elem.dataset.popupTitle == "popup-technologie"){
                tech.innerHTML = elem.innerHTML
               }
            }
            swiperProjects.init()
        }




        let ct_cross = document.querySelector('.ct-fixed-cross')

        ct_cross.addEventListener("click", function () {
            let fixed = document.querySelectorAll(".ct-fixed")
            for (let fix of fixed) {
                fix.style.transform = "scale(0)"
            }
        });



    }

    onLeave() {
        //Javascript a lancer lorsque la page part/unload
    }

    onLeaveCompleted() {
        //Javascript a lancer lorsque la page est partie
    }
}

export default Projects;