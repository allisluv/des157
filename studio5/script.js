// JavaScript Document
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

var colors = document.getElementById('colors');
var board = document.getElementById('board');

addEventListener("swipeleft", clear());
addEventListener("swiperight", clear());
function clear() {
  colors.style.backgroundColor="white";
  colors.style.color="black";
  var secs = document.getElementsByClassName('new');
  while (secs.length > 0) {
    secs[0].parentNode.removeChild(secs[0]);
  }
}


});

function allowDrop(ev) {
  ev.preventDefault();
}

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
  }

  function dropR(ev) {
    var bg = colors.style.backgroundColor;
    console.log(bg);
    if (bg == "white") {
      colors.style.backgroundColor="red";
      colors.style.color="red";
    } else {
      var sec = document.createElement("SECTION");
      board.appendChild(sec);
      sec.style.backgroundColor="red";
      sec.style.opacity=".5";
      sec.className="new";
      console.log(sec.className);
    }
  }

  function dropY(ev) {
    var bg = colors.style.backgroundColor;
    console.log(bg);
    if (bg == "white") {
      colors.style.backgroundColor="yellow";
      colors.style.color="yellow";
    } else {
      var sec = document.createElement("SECTION");
      board.appendChild(sec);
      sec.style.backgroundColor="yellow";
      sec.style.opacity=".5";
      sec.className="new";
    }
  }

  function dropB(ev) {
    var bg = colors.style.backgroundColor;
    console.log(bg);
    if (bg == "white") {
      colors.style.backgroundColor="blue";
      colors.style.color="blue";
    } else {
      var sec = document.createElement("SECTION");
      board.appendChild(sec);
      sec.style.backgroundColor="blue";
      sec.style.opacity=".5";
      sec.className="new";
    }
  }

  function dropK(ev) {
    var bg = colors.style.backgroundColor;
    console.log(bg);
    if (bg == "white") {
      colors.style.backgroundColor="black";
      colors.style.color="black";
    } else {
      var sec = document.createElement("SECTION");
      board.appendChild(sec);
      sec.style.backgroundColor="black";
      sec.style.opacity=".5";
      sec.className="new";
    }
  }

  function dropW(ev) {
    var bg = colors.style.backgroundColor;
    console.log(bg);
    if (bg == "white") {
      colors.style.backgroundColor="white";
      colors.style.color="white";
    } else {
      var sec = document.createElement("SECTION");
      board.appendChild(sec);
      sec.style.backgroundColor="white";
      sec.style.opacity=".5";
      sec.className="new";
    }
  }
