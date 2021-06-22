import Highway from '@dogstudio/highway'
import  gsap from 'gsap';

//Load user controls
import LoadHeader from '../userControls/header'
import { LoadContact } from '../../images';
import LoadFooter from '../userControls/footer'
import { MobileOverflow, MatchMedia, detectMob } from '../../detectmobile'

class Contact extends Highway.Renderer {


    onEnter() {
        //Javascript a lancer lorsque la page se charge
    }

    onEnterCompleted() {
        //Javascript a lancer lorsque la page est chargé
        let windowsWidth = MatchMedia();
        let IsMobile = detectMob();

        MobileOverflow()
        LoadHeader()
        LoadContact()
        LoadFooter()
   
        let cv = document.querySelector(".downloadCV");
        cv.href = "/CVGuillian.pdf"
    }

    onLeave() {
        //Javascript a lancer lorsque la page part/unload
    }

    onLeaveCompleted() {
        //Javascript a lancer lorsque la page est partie
    }
}

export default Contact;