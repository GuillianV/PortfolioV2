import gsap from 'gsap';


// Animation Header
function LoadHeader() {

    //Annimation nom
    gsap.fromTo(".header-presentation-left-vibert", {
        xPercent: -100,
        opacity: 0,

    }, {
        duration: 1,
        xPercent: 0,
        opacity: 1
    });

    gsap.fromTo(".header-presentation-left-vallet", {
        xPercent: 100,
        opacity: 0,

    }, {
        duration: 1,
        xPercent: 0,
        opacity: 1
    });

    gsap.fromTo(".header-presentation-left-guillian", {
        xPercent: -100,
        opacity: 0,

    }, {
        duration: 1,
        xPercent: 0,
        opacity: 1
    });

    //Image guillian-header
    gsap.fromTo(".header-presentation-right span img", {
        boxShadow: "none"

    }, {
        duration: 1,
        boxShadow: "black 5px 5px",
    });

   

}

export default LoadHeader;