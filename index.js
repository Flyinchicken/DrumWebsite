const buttons = document.querySelectorAll("button");

function playSound(letter){
    switch(letter){
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log("Not a defined key!"); 
    }
}

// Adding mouse click event listener to each key, so each of them when clicked will play a sound
 for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", 
    function () {
        playSound(this.innerHTML);
        animateKeyDown(this.innerHTML);
    });
 }

 // adding keyboard listener to the entire document, so the website responds to any key pressed
 document.addEventListener("keydown", function (e) {
    playSound(e.key);
    animateKeyDown(e.key);
 });

 function animateKeyDown(keyLiteral){
    var keyPressed = document.querySelector("." + keyLiteral);
    keyPressed.classList.add("pressed");
    setTimeout(function (){
        keyPressed.classList.remove("pressed");
    }, 100);
 }