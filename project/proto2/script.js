// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here
    //for the sketch page
    function setup() {
      var myCanvas = createCanvas(725, 425);
      myCanvas.parent('mySketch');
      background(#36373d);
    }

    function draw () {

      stroke(#eaeaeb);
      strokeWeight(3);
      fill(#36373d);
      rect(0, 0, 723, 423);

      var color = #eaeaeb;
      var size = #36373d;
    }



});
