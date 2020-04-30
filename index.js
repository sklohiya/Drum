// alert ("Hello");

//Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);

}


function handleClick() {
  // this.style.color = "white";
  var buttonInnetHTML = this.innerHTML;

  makeSound(buttonInnetHTML);
  buttonAnimation(buttonInnerHTML);
}

//Detecting Key Press

document.addEventListener("keypress", function() {
  makeSound(event.key);
  buttonAnimation(event.key);
});


function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var tom1 = new Audio("sounds/snare.mp3");
      tom1.play();
      break;
    case "k":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;
    case "l":
      var tom1 = new Audio("sounds/kick-bass.mp3");
      tom1.play();
      break;
    default: console.log(buttonInnetHTML)

  }

}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
