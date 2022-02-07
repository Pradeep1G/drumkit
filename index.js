for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var letter = this.innerHTML;

    funswitch(letter);

  });
}

function funswitch(ke){

  switch (ke) {
    case "w":
      var sund = new Audio("tom-1.mp3");
      sund.play();
      break;

    case "a":
      var sund = new Audio("tom-2.mp3");
      sund.play();
      break;

    case "s":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var sund = new Audio("tom-4.mp3");
      sund.play();
      break;

    case "j":
      var sund = new Audio("snare.mp3");
      sund.play();
      break;

    case "k":
      var sund = new Audio("crash.mp3");
      sund.play();
      break;

    case "l":
      var sund = new Audio("kick-bass.mp3");
      sund.play();
      break;

    default:
      console.log(ke);
  }
}

document.addEventListener("keydown", function(){
  funswitch(event.key);
})


// var sund= new audio("tom-1.mp3");
//   sund.play;
