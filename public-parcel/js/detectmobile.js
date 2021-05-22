
function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}


function MobileOverflow() {

    if (detectMob()) {
        var x = document.querySelector("html");
        x.style.overflowX = "hidden"

        var y = document.querySelector("body");
        y.style.overflowX = "hidden"
    }
}


export {MobileOverflow}