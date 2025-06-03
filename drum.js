var n = document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    var buttonInnerHTML = this.innerHTML;
    Sound(buttonInnerHTML);
})
}
document.addEventListener("keypress", function(event) { //here keypress is a keyword used to do an event when alphabetic,numeric or punctuation key is pressed down.

    Sound(event.key);
  });
function myfunction()
{
    var audio= new Audio();//new Audio is object created and is used to embed sound content in documents.
}
function Sound(key) {

    switch (key) {
      case "a":
        var a = new Audio("sounds/tom-1.mp3");
        a.play();
        break;
  
      case "s":
        var s = new Audio("sounds/tom-2.mp3");
        s.play();
        break;
  
      case "d":
        var d = new Audio('sounds/tom-3.mp3');
        d.play();
        break;
  
      case "f":
        var f = new Audio('sounds/tom-4.mp3');
        f.play();
        break;
  
      case "g":
        var g = new Audio('sounds/snare.mp3');
        g.play();
        break;
  
      case "h":
        var h = new Audio('sounds/crash.mp3');
        h.play();
        break;
  
      case "j":
        var j = new Audio('sounds/kick-bass.mp3');
        j.play();
        break;
  
  
      default: console.log(key);
    }
}