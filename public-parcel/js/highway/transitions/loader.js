import Highway from '@dogstudio/highway'
import  gsap from 'gsap';


class Loader extends Highway.Transition {

    in({ from, to, done }) {
        // Reset Scroll
        window.scrollTo(0, 0);

        from.remove();
        done();
      

    }

    out({ from, done }) {
        
        LoaderIn(done,"#loader")

    }

}

export { Loader }



function LoaderIn(done,loader){
    let loaderIn = gsap.timeline();

    loaderIn.set(loader, {
        xPercent: -35,
        yPercent: 90,
        rotate:45,

    });

    loaderIn.to(loader, {
        xPercent: 0,
        yPercent: 0,
        rotate:45,
        duration: 1.5,
        ease: "power2.out",
        onComplete: done,
    });
}

export { LoaderIn };

function LoaderOut(loader){
    let loaderOut = gsap.timeline();

    loaderOut.to(loader, {
        xPercent: 35,
        yPercent: -90,
        rotate:45,
        duration: 3, 
        ease: "power4.out",
    });
    loaderOut.set(loader, {
        xPercent: -35,
        yPercent: 90,
        rotate:45,
        delay:2,
    });
}

export { LoaderOut };



export default Loader;