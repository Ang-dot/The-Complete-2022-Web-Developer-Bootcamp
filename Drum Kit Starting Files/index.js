var button = document.getElementsByClassName("drum");

function playAudio(trigger) {
    switch (trigger) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            break;

        case "a":
            audio = new Audio("sounds/kick.mp3");
            break;

        case "s":
            audio = new Audio("sounds/snare.mp3");
            break;

        case "d":
            audio = new Audio("sounds/tom1.mp3");
            break;

        case "j":
            audio = new Audio("sounds/tom2.mp3");
            break;

        case "k":
            audio = new Audio("sounds/tom3.mp3");
            break;

        case "l":
            audio = new Audio("sounds/tom4.mp3");
            break;
        
        default: console.log(this);
    }
    audio.play();
}

function pressAnimation(trigger) {
    targetButton = document.getElementsByClassName(trigger)[0];
    targetButton.classList.add("pressed");
    setTimeout(function() {
        targetButton.classList.remove("pressed");
    }, 100);
}

document.addEventListener("keydown", (e) => {
    var keyValue = e.key;
    playAudio(keyValue);
    pressAnimation(keyValue);
});

for (var i=0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        playAudio(buttonInnerHTML);
        pressAnimation(buttonInnerHTML);
    });
}