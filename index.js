// Select button classes
let drumButtons = document.querySelectorAll(".drum").length;


// For Loop for selecting out buttonInnerHTML
for (let i = 0; i < drumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}

// Switch Case for selecting our audios
const makeSound = (key) => {
    switch (key) {
        case "w":
            let tomOne = new Audio("sounds/tom-1.mp3")
            tomOne.play();
            break;

        case "a":
            let tomTwo = new Audio("sounds/tom-2.mp3")
            tomTwo.play();
            break;

        case "s":
            let tomThree = new Audio("sounds/tom-3.mp3")
            tomThree.play();
            break;

        case "d":
            let tomFour = new Audio("sounds/tom-4.mp3")
            tomFour.play();
            break;

        case "j":
            let snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;

        case "k":
            let crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;

        case "l":
            let kickBass = new Audio("sounds/kick-bass.mp3")
            kickBass.play();
            break;

        default:
            console.log(key)
    }
}

// Add event listener for pressing
document.addEventListener("keypress", function (e) {
    makeSound(e.key);
    buttonAnimation(e.key);
})

// Function for button animation
const buttonAnimation = (currentKey) => {
    let activeButton = document.querySelectorAll("." + currentKey);
    // Give class
    activeButton.classList.add("pressed");
    // remove it after the given time
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100)
}