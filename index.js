/*BASIC FUNCTION WITH A BUTTON EVENT LISTENER*/
// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick(){
//   alert("I Gots CLICKERED");
//
// }

// keydown instead of keypress

/*ANONYMOUS FUNCTION*/
// document.querySelectorAll("button")[0].addEventListener("click", function() {
//   alert("I Gots CLICKERED");
//
// });
/*Using sound in javascript*/
// var audio = new Audio('sounds/tom1.mp3');
// audio.play();
// var numOfDrumBtns =  document.querySelectorAll(".drum").length;
// for (var i = 0; i < numOfDrumBtns; i++) {

function audioInput(input) {
  switch (input) {
    case "w":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
    case "a":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
    case "s":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
    case "d":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break
    case "j":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
    case "k":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
    case "l":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;


    default: console.log(input);

  }
}

function buttonAnimation(cKey) {
  var activeBtn = document.querySelector("."+cKey);
  activeBtn.classList.add("pressed");

  setTimeout(function(){
    activeBtn.classList.remove("pressed");
  }, 100);
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //alert("I Gots CLICKERED");

    /*'this' is used to select what is clicked*/
    //console.log(this.innerHTML);
    // this.style.color = "black";

    //What to do when click detected
    var buttonInnerHTML = this.innerHTML;
    audioInput(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);


  });
}

document.addEventListener("keydown", function(event) {

  audioInput(event.key);
  buttonAnimation(event.key);

})
