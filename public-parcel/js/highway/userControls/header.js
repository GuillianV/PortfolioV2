import gsap from 'gsap';
import Transform from '../../transform'

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

    const T = new Transform("header-presentation-container","header-presentation-right-img",20)

}

export default LoadHeader;