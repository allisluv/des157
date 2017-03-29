var siz;
var h;
var s;
var b;

    //for the sketch page
    function setup() {
      var myCanvas = createCanvas(725, 425);
      myCanvas.parent('mySketch');
      colorMode(HSB);
      stroke(235, 1, 92);
      strokeWeight(3);
      fill(233, 10, 24);
      rect(0, 0, 723, 423);

      siz = 20;
      h = 235;
      s = 1;
      b = 92;
    }

    document.getElementById('black').addEventListener('click', function () {
      h = 233; s = 10; b = 24;
    });
    document.getElementById('red').addEventListener('click', function () {
      h = 0; s = 26; b = 86;
    });
    document.getElementById('redDark').addEventListener('click', function () {
      h = 0; s = 25; b = 71;
    });
    document.getElementById('orange').addEventListener('click', function () {
      h = 34; s = 26; b = 86;
    });
    document.getElementById('orangeDark').addEventListener('click', function () {
      h = 34; s = 25; b = 71;
    });
    document.getElementById('yellow').addEventListener('click', function () {
      h = 64; s = 26; b = 86;
    });
    document.getElementById('yellowDark').addEventListener('click', function () {
      h = 66; s = 26; b = 72;
    });
    document.getElementById('green').addEventListener('click', function () {
      h = 155; s = 24; b = 85;
    });
    document.getElementById('greenDark').addEventListener('click', function () {
      h = 157; s = 25; b = 71;
    });
    document.getElementById('blue').addEventListener('click', function () {
      h = 200; s = 26; b = 86;
    });
    document.getElementById('blueDark').addEventListener('click', function () {
      h = 200; s = 26; b = 72;
    });
    document.getElementById('purple').addEventListener('click', function () {
      h = 267; s = 21; b = 81;
    });
    document.getElementById('purpleDark').addEventListener('click', function () {
      h = 267; s = 21; b = 68;
    });
    document.getElementById('white').addEventListener('click', function () {
      h = 235; s = 1; b = 92;
    });
    document.getElementById('small').addEventListener('click', function () {
      siz = 10;
    });
    document.getElementById('medium').addEventListener('click', function () {
      siz = 20;
    });
    document.getElementById('large').addEventListener('click', function () {
      siz = 30;
    });




    function mouseDragged() {
      paint(siz, h, s, b);
    }

    function paint (siz, h, s, b) {
      noStroke();
      fill(h, s, b);
      ellipse(mouseX,mouseY, siz, siz);
    }
