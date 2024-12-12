function scary() {
    popup.style.visibility = 'visible';

    setTimeout(fadeOut, 3000, popup);
}
function fadeOut(element) {
    var opacity = 1;

    var interval = setInterval(function () {
        if (opacity > 0) {
            opacity -= 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval); 
            element.style.visibility = 'hidden';
            popup.style.opacity = 1;

        }
    }, 50);
}
