var popup = document.getElementById("over");
var donate = document.getElementById("donate-box");
function status() {
    popup.style.opacity = 1;
}

function statusoff() {
    fadeOut(popup);
}
function fadeOut(element) {
    var opacity = 1;
    var interval = setInterval(function () {
        if (popup.style.opacity > 0) {
            opacity -= 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 50);
}

function feed() {
    var fedstatus = document.getElementById("fed");
    var hungrystatus = document.getElementById("hungry");
    fedstatus.style.display = "block";
    hungrystatus.style.display = "none";
}



function openDonate() {
    donate.style.visibility = 'visible';
}

function closeDonate() {
    donate.style.visibility = 'hidden';
}