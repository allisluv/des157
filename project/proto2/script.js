// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here
    //for the sketch page
    function setup() {
      var myCanvas = createCanvas(725, 425);
      myCanvas.parent('mySketch');
    }

    function draw () {
      colorMode(HSB);
      stroke(235, 1, 92);
      strokeWeight(3);
      fill(233, 10, 24);
      rect(0, 0, 723, 423);


    }



});
