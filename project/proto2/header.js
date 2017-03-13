// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here
    var menu = document.getElementById('menu');
    var arrow = document.getElementById('arrowSide');
    console.log(arrow);
    var list = document.getElementsByClassName('nav');
    var start = 20;
    arrow.style.webkitTransform = "rotate(0deg)";

    menu.addEventListener("click", open_close)

    arrow.addEventListener("click", open_close)

    function open_close() {
      if (arrow.style.webkitTransform == "rotate(0deg)") {
        arrow.style.webkitTransform = "rotate(180deg)";
        var spread = start;
        for (var i=0; i <= list.length; i++) {
          list[i].style.left = spread+"px";
          spread = spread + 145;
        }
      } else {
        arrow.style.webkitTransform = "rotate(0deg)";
        for (var i=0; i <= list.length; i++) {
          list[i].style.left = "-165px";
        }
      }
      list[i].style.left = "-165px";
      console.log(spread);
    }

});
