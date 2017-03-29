if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    console.log("good");
} else {
    // Sorry! No Web Storage support..
    console.log("didn't work");
}

var siz;
var h;
var s;
var b;

    //for the sketch page
    function setup() {
      var myCanvas = createCanvas(725, 425);
      myCanvas.parent('mySketch');
      colorMode(HSB);
      noStroke();
      fill(233, 10, 24);
      rect(0, 0, 725, 425);

      siz = 20;
      h = 235;
      s = 1;
      b = 92;
    }

    var black = document.getElementById('black');
    var re = document.getElementById('red');
    var redDark = document.getElementById('redDark');
    var orang = document.getElementById('orange');
    var orangeDark = document.getElementById('orangeDark');
    var yello = document.getElementById('yellow');
    var yellowDark = document.getElementById('yellowDark');
    var gree = document.getElementById('green');
    var greenDark = document.getElementById('greenDark');
    var blu = document.getElementById('blue');
    var blueDark = document.getElementById('blueDark');
    var purpl = document.getElementById('purple');
    var purpleDark = document.getElementById('purpleDark');
    var whit = document.getElementById('white');


    black.style.border = "1px solid #eaeaec";
    re.style.border = "1px solid #eaeaec";
    redDark.style.border = "1px solid #eaeaec";
    orang.style.border = "1px solid #eaeaec";
    orangeDark.style.border = "1px solid #eaeaec";
    yello.style.border = "1px solid #eaeaec";
    yellowDark.style.border = "1px solid #eaeaec";
    gree.style.border = "1px solid #eaeaec";
    greenDark.style.border = "1px solid #eaeaec";
    blu.style.border = "1px solid #eaeaec";
    blueDark.style.border = "1px solid #eaeaec";
    purpl.style.border = "1px solid #eaeaec";
    purpleDark.style.border = "1px solid #eaeaec";
    whit.style.border = "3px solid #eaeaec";

    black.style.right = "30px";
    re.style.right = "30px";
    redDark.style.right = "30px";
    orang.style.right = "30px";
    orangeDark.style.right = "30px";
    yello.style.right = "30px";
    yellowDark.style.right = "30px";
    gree.style.right = "30px";
    greenDark.style.right = "30px";
    blu.style.right = "30px";
    blueDark.style.right = "30px";
    purpl.style.right = "30px";
    purpleDark.style.right = "30px";
    whit.style.right = "28.5px";

    black.style.top = "100px";
    re.style.top = "130px";
    redDark.style.top = "160px";
    orang.style.top = "190px";
    orangeDark.style.top = "220px";
    yello.style.top = "250px";
    yellowDark.style.top = "280px";
    gree.style.top = "310px";
    greenDark.style.top = "340px";
    blu.style.top = "370px";
    blueDark.style.top = "400px";
    purpl.style.top = "430px";
    purpleDark.style.top = "460px";
    whit.style.top = "488.5px";



    console.log(black.style.border);
    console.log(red.style.border);

    black.addEventListener('click', function () {
      h = 233; s = 10; b = 24;
      black.style.border = "3px solid #eaeaec";
      re.style.border = "1px solid #eaeaec";
      redDark.style.border = "1px solid #eaeaec";
      orang.style.border = "1px solid #eaeaec";
      orangeDark.style.border = "1px solid #eaeaec";
      yello.style.border = "1px solid #eaeaec";
      yellowDark.style.border = "1px solid #eaeaec";
      gree.style.border = "1px solid #eaeaec";
      greenDark.style.border = "1px solid #eaeaec";
      blu.style.border = "1px solid #eaeaec";
      blueDark.style.border = "1px solid #eaeaec";
      purpl.style.border = "1px solid #eaeaec";
      purpleDark.style.border = "1px solid #eaeaec";
      whit.style.border = "1px solid #eaeaec";

      black.style.right = "28.5px";
      re.style.right = "30px";
      redDark.style.right = "30px";
      orang.style.right = "30px";
      orangeDark.style.right = "30px";
      yello.style.right = "30px";
      yellowDark.style.right = "30px";
      gree.style.right = "30px";
      greenDark.style.right = "30px";
      blu.style.right = "30px";
      blueDark.style.right = "30px";
      purpl.style.right = "30px";
      purpleDark.style.right = "30px";
      whit.style.right = "30px";

      black.style.top = "98.5px";
      re.style.top = "130px";
      redDark.style.top = "160px";
      orang.style.top = "190px";
      orangeDark.style.top = "220px";
      yello.style.top = "250px";
      yellowDark.style.top = "280px";
      gree.style.top = "310px";
      greenDark.style.top = "340px";
      blu.style.top = "370px";
      blueDark.style.top = "400px";
      purpl.style.top = "430px";
      purpleDark.style.top = "460px";
      whit.style.top = "490px";
    });
    re.addEventListener('click', function () {
      h = 0; s = 26; b = 86;
      black.style.border = "1px solid #eaeaec";
      re.style.border = "3px solid #eaeaec";
      redDark.style.border = "1px solid #eaeaec";
      orang.style.border = "1px solid #eaeaec";
      orangeDark.style.border = "1px solid #eaeaec";
      yello.style.border = "1px solid #eaeaec";
      yellowDark.style.border = "1px solid #eaeaec";
      gree.style.border = "1px solid #eaeaec";
      greenDark.style.border = "1px solid #eaeaec";
      blu.style.border = "1px solid #eaeaec";
      blueDark.style.border = "1px solid #eaeaec";
      purpl.style.border = "1px solid #eaeaec";
      purpleDark.style.border = "1px solid #eaeaec";
      whit.style.border = "1px solid #eaeaec";

      black.style.right = "30px";
      re.style.right = "28.5px";
      redDark.style.right = "30px";
      orang.style.right = "30px";
      orangeDark.style.right = "30px";
      yello.style.right = "30px";
      yellowDark.style.right = "30px";
      gree.style.right = "30px";
      greenDark.style.right = "30px";
      blu.style.right = "30px";
      blueDark.style.right = "30px";
      purpl.style.right = "30px";
      purpleDark.style.right = "30px";
      whit.style.right = "30px";

      black.style.top = "100px";
      re.style.top = "128.5px";
      redDark.style.top = "160px";
      orang.style.top = "190px";
      orangeDark.style.top = "220px";
      yello.style.top = "250px";
      yellowDark.style.top = "280px";
      gree.style.top = "310px";
      greenDark.style.top = "340px";
      blu.style.top = "370px";
      blueDark.style.top = "400px";
      purpl.style.top = "430px";
      purpleDark.style.top = "460px";
      whit.style.top = "490px";
    });
    redDark.addEventListener('click', function () {
      h = 0; s = 25; b = 71;
      black.style.border = "1px solid #eaeaec";
      re.style.border = "1px solid #eaeaec";
      redDark.style.border = "3px solid #eaeaec";
      orang.style.border = "1px solid #eaeaec";
      orangeDark.style.border = "1px solid #eaeaec";
      yello.style.border = "1px solid #eaeaec";
      yellowDark.style.border = "1px solid #eaeaec";
      gree.style.border = "1px solid #eaeaec";
      greenDark.style.border = "1px solid #eaeaec";
      blu.style.border = "1px solid #eaeaec";
      blueDark.style.border = "1px solid #eaeaec";
      purpl.style.border = "1px solid #eaeaec";
      purpleDark.style.border = "1px solid #eaeaec";
      whit.style.border = "1px solid #eaeaec";

      black.style.right = "30px";
      re.style.right = "30px";
      redDark.style.right = "28.5px";
      orang.style.right = "30px";
      orangeDark.style.right = "30px";
      yello.style.right = "30px";
      yellowDark.style.right = "30px";
      gree.style.right = "30px";
      greenDark.style.right = "30px";
      blu.style.right = "30px";
      blueDark.style.right = "30px";
      purpl.style.right = "30px";
      purpleDark.style.right = "30px";
      whit.style.right = "30px";

      black.style.top = "100px";
      re.style.top = "130px";
      redDark.style.top = "158.5px";
      orang.style.top = "190px";
      orangeDark.style.top = "220px";
      yello.style.top = "250px";
      yellowDark.style.top = "280px";
      gree.style.top = "310px";
      greenDark.style.top = "340px";
      blu.style.top = "370px";
      blueDark.style.top = "400px";
      purpl.style.top = "430px";
      purpleDark.style.top = "460px";
      whit.style.top = "490px";
    });
    orang.addEventListener('click', function () {
      h = 34; s = 26; b = 86;
      black.style.border = "1px solid #eaeaec";
      re.style.border = "1px solid #eaeaec";
      redDark.style.border = "1px solid #eaeaec";
      orang.style.border = "3px solid #eaeaec";
      orangeDark.style.border = "1px solid #eaeaec";
      yello.style.border = "1px solid #eaeaec";
      yellowDark.style.border = "1px solid #eaeaec";
      gree.style.border = "1px solid #eaeaec";
      greenDark.style.border = "1px solid #eaeaec";
      blu.style.border = "1px solid #eaeaec";
      blueDark.style.border = "1px solid #eaeaec";
      purpl.style.border = "1px solid #eaeaec";
      purpleDark.style.border = "1px solid #eaeaec";
      whit.style.border = "1px solid #eaeaec";

      black.style.right = "30px";
      re.style.right = "30px";
      redDark.style.right = "30px";
      orang.style.right = "28.5px";
      orangeDark.style.right = "30px";
      yello.style.right = "30px";
      yellowDark.style.right = "30px";
      gree.style.right = "30px";
      greenDark.style.right = "30px";
      blu.style.right = "30px";
      blueDark.style.right = "30px";
      purpl.style.right = "30px";
      purpleDark.style.right = "30px";
      whit.style.right = "30px";

      black.style.top = "100px";
      re.style.top = "130px";
      redDark.style.top = "160px";
      orang.style.top = "188.5px";
      orangeDark.style.top = "220px";
      yello.style.top = "250px";
      yellowDark.style.top = "280px";
      gree.style.top = "310px";
      greenDark.style.top = "340px";
      blu.style.top = "370px";
      blueDark.style.top = "400px";
      purpl.style.top = "430px";
      purpleDark.style.top = "460px";
      whit.style.top = "490px";
    });
    orangeDark.addEventListener('click', function () {
      h = 34; s = 25; b = 71;
      black.style.border = "1px solid #eaeaec";
      re.style.border = "1px solid #eaeaec";
      redDark.style.border = "1px solid #eaeaec";
      orang.style.border = "1px solid #eaeaec";
      orangeDark.style.border = "3px solid #eaeaec";
      yello.style.border = "1px solid #eaeaec";
      yellowDark.style.border = "1px solid #eaeaec";
      gree.style.border = "1px solid #eaeaec";
      greenDark.style.border = "1px solid #eaeaec";
      blu.style.border = "1px solid #eaeaec";
      blueDark.style.border = "1px solid #eaeaec";
      purpl.style.border = "1px solid #eaeaec";
      purpleDark.style.border = "1px solid #eaeaec";
      whit.style.border = "1px solid #eaeaec";

      black.style.right = "30px";
      re.style.right = "30px";
      redDark.style.right = "30px";
      orang.style.right = "30px";
      orangeDark.style.right = "28.5px";
      yello.style.right = "30px";
      yellowDark.style.right = "30px";
      gree.style.right = "30px";
      greenDark.style.right = "30px";
      blu.style.right = "30px";
      blueDark.style.right = "30px";
      purpl.style.right = "30px";
      purpleDark.style.right = "30px";
      whit.style.right = "30px";

      black.style.top = "100px";
      re.style.top = "130px";
      redDark.style.top = "160px";
      orang.style.top = "190px";
      orangeDark.style.top = "218.5px";
      yello.style.top = "250px";
      yellowDark.style.top = "280px";
      gree.style.top = "310px";
      greenDark.style.top = "340px";
      blu.style.top = "370px";
      blueDark.style.top = "400px";
      purpl.style.top = "430px";
      purpleDark.style.top = "460px";
      whit.style.top = "490px";
    });
    yello.addEventListener('click', function () {
      h = 64; s = 26; b = 86;
      black.style.border = "1px solid #eaeaec";
      re.style.border = "1px solid #eaeaec";
      redDark.style.border = "1px solid #eaeaec";
      orang.style.border = "1px solid #eaeaec";
      orangeDark.style.border = "1px solid #eaeaec";
      yello.style.border = "3px solid #eaeaec";
      yellowDark.style.border = "1px solid #eaeaec";
      gree.style.border = "1px solid #eaeaec";
      greenDark.style.border = "1px solid #eaeaec";
      blu.style.border = "1px solid #eaeaec";
      blueDark.style.border = "1px solid #eaeaec";
      purpl.style.border = "1px solid #eaeaec";
      purpleDark.style.border = "1px solid #eaeaec";
      whit.style.border = "1px solid #eaeaec";

      black.style.right = "30px";
      re.style.right = "30px";
      redDark.style.right = "30px";
      orang.style.right = "30px";
      orangeDark.style.right = "30px";
      yello.style.right = "28.5px";
      yellowDark.style.right = "30px";
      gree.style.right = "30px";
      greenDark.style.right = "30px";
      blu.style.right = "30px";
      blueDark.style.right = "30px";
      purpl.style.right = "30px";
      purpleDark.style.right = "30px";
      whit.style.right = "30px";

      black.style.top = "100px";
      re.style.top = "130px";
      redDark.style.top = "160px";
      orang.style.top = "190px";
      orangeDark.style.top = "220px";
      yello.style.top = "248.5px";
      yellowDark.style.top = "280px";
      gree.style.top = "310px";
      greenDark.style.top = "340px";
      blu.style.top = "370px";
      blueDark.style.top = "400px";
      purpl.style.top = "430px";
      purpleDark.style.top = "460px";
      whit.style.top = "490px";
    });
    yellowDark.addEventListener('click', function () {
      h = 66; s = 26; b = 72;
      black.style.border = "1px solid #eaeaec";
      re.style.border = "1px solid #eaeaec";
      redDark.style.border = "1px solid #eaeaec";
      orang.style.border = "1px solid #eaeaec";
      orangeDark.style.border = "1px solid #eaeaec";
      yello.style.border = "1px solid #eaeaec";
      yellowDark.style.border = "3px solid #eaeaec";
      gree.style.border = "1px solid #eaeaec";
      greenDark.style.border = "1px solid #eaeaec";
      blu.style.border = "1px solid #eaeaec";
      blueDark.style.border = "1px solid #eaeaec";
      purpl.style.border = "1px solid #eaeaec";
      purpleDark.style.border = "1px solid #eaeaec";
      whit.style.border = "1px solid #eaeaec";

      black.style.right = "30px";
      re.style.right = "30px";
      redDark.style.right = "30px";
      orang.style.right = "30px";
      orangeDark.style.right = "30px";
      yello.style.right = "30px";
      yellowDark.style.right = "28.5px";
      gree.style.right = "30px";
      greenDark.style.right = "30px";
      blu.style.right = "30px";
      blueDark.style.right = "30px";
      purpl.style.right = "30px";
      purpleDark.style.right = "30px";
      whit.style.right = "30px";

      black.style.top = "100px";
      re.style.top = "130px";
      redDark.style.top = "160px";
      orang.style.top = "190px";
      orangeDark.style.top = "220px";
      yello.style.top = "250px";
      yellowDark.style.top = "278.5px";
      gree.style.top = "310px";
      greenDark.style.top = "340px";
      blu.style.top = "370px";
      blueDark.style.top = "400px";
      purpl.style.top = "430px";
      purpleDark.style.top = "460px";
      whit.style.top = "490px";
    });
    gree.addEventListener('click', function () {
      h = 155; s = 24; b = 85;
      black.style.border = "1px solid #eaeaec";
      re.style.border = "1px solid #eaeaec";
      redDark.style.border = "1px solid #eaeaec";
      orang.style.border = "1px solid #eaeaec";
      orangeDark.style.border = "1px solid #eaeaec";
      yello.style.border = "1px solid #eaeaec";
      yellowDark.style.border = "1px solid #eaeaec";
      gree.style.border = "3px solid #eaeaec";
      greenDark.style.border = "1px solid #eaeaec";
      blu.style.border = "1px solid #eaeaec";
      blueDark.style.border = "1px solid #eaeaec";
      purpl.style.border = "1px solid #eaeaec";
      purpleDark.style.border = "1px solid #eaeaec";
      whit.style.border = "1px solid #eaeaec";

      black.style.right = "30px";
      re.style.right = "30px";
      redDark.style.right = "30px";
      orang.style.right = "30px";
      orangeDark.style.right = "30px";
      yello.style.right = "30px";
      yellowDark.style.right = "30px";
      gree.style.right = "28.5px";
      greenDark.style.right = "30px";
      blu.style.right = "30px";
      blueDark.style.right = "30px";
      purpl.style.right = "30px";
      purpleDark.style.right = "30px";
      whit.style.right = "30px";

      black.style.top = "100px";
      re.style.top = "130px";
      redDark.style.top = "160px";
      orang.style.top = "190px";
      orangeDark.style.top = "220px";
      yello.style.top = "250px";
      yellowDark.style.top = "280px";
      gree.style.top = "308.5px";
      greenDark.style.top = "340px";
      blu.style.top = "370px";
      blueDark.style.top = "400px";
      purpl.style.top = "430px";
      purpleDark.style.top = "460px";
      whit.style.top = "490px";
    });
    greenDark.addEventListener('click', function () {
      h = 157; s = 25; b = 71;
      black.style.border = "1px solid #eaeaec";
      re.style.border = "1px solid #eaeaec";
      redDark.style.border = "1px solid #eaeaec";
      orang.style.border = "1px solid #eaeaec";
      orangeDark.style.border = "1px solid #eaeaec";
      yello.style.border = "1px solid #eaeaec";
      yellowDark.style.border = "1px solid #eaeaec";
      gree.style.border = "1px solid #eaeaec";
      greenDark.style.border = "3px solid #eaeaec";
      blu.style.border = "1px solid #eaeaec";
      blueDark.style.border = "1px solid #eaeaec";
      purpl.style.border = "1px solid #eaeaec";
      purpleDark.style.border = "1px solid #eaeaec";
      whit.style.border = "1px solid #eaeaec";

      black.style.right = "30px";
      re.style.right = "30px";
      redDark.style.right = "30px";
      orang.style.right = "30px";
      orangeDark.style.right = "30px";
      yello.style.right = "30px";
      yellowDark.style.right = "30px";
      gree.style.right = "30px";
      greenDark.style.right = "28.5px";
      blu.style.right = "30px";
      blueDark.style.right = "30px";
      purpl.style.right = "30px";
      purpleDark.style.right = "30px";
      whit.style.right = "30px";

      black.style.top = "100px";
      re.style.top = "130px";
      redDark.style.top = "160px";
      orang.style.top = "190px";
      orangeDark.style.top = "220px";
      yello.style.top = "250px";
      yellowDark.style.top = "280px";
      gree.style.top = "310px";
      greenDark.style.top = "338.5px";
      blu.style.top = "370px";
      blueDark.style.top = "400px";
      purpl.style.top = "430px";
      purpleDark.style.top = "460px";
      whit.style.top = "490px";
    });
    blu.addEventListener('click', function () {
      h = 200; s = 26; b = 86;
      black.style.border = "1px solid #eaeaec";
      re.style.border = "1px solid #eaeaec";
      redDark.style.border = "1px solid #eaeaec";
      orang.style.border = "1px solid #eaeaec";
      orangeDark.style.border = "1px solid #eaeaec";
      yello.style.border = "1px solid #eaeaec";
      yellowDark.style.border = "1px solid #eaeaec";
      gree.style.border = "1px solid #eaeaec";
      greenDark.style.border = "1px solid #eaeaec";
      blu.style.border = "3px solid #eaeaec";
      blueDark.style.border = "1px solid #eaeaec";
      purpl.style.border = "1px solid #eaeaec";
      purpleDark.style.border = "1px solid #eaeaec";
      whit.style.border = "1px solid #eaeaec";

      black.style.right = "30px";
      re.style.right = "30px";
      redDark.style.right = "30px";
      orang.style.right = "30px";
      orangeDark.style.right = "30px";
      yello.style.right = "30px";
      yellowDark.style.right = "30px";
      gree.style.right = "30px";
      greenDark.style.right = "30px";
      blu.style.right = "28.5px";
      blueDark.style.right = "30px";
      purpl.style.right = "30px";
      purpleDark.style.right = "30px";
      whit.style.right = "30px";

      black.style.top = "100px";
      re.style.top = "130px";
      redDark.style.top = "160px";
      orang.style.top = "190px";
      orangeDark.style.top = "220px";
      yello.style.top = "250px";
      yellowDark.style.top = "280px";
      gree.style.top = "310px";
      greenDark.style.top = "340px";
      blu.style.top = "368.5px";
      blueDark.style.top = "400px";
      purpl.style.top = "430px";
      purpleDark.style.top = "460px";
      whit.style.top = "490px";
    });
    blueDark.addEventListener('click', function () {
      h = 200; s = 26; b = 72;
      black.style.border = "1px solid #eaeaec";
      re.style.border = "1px solid #eaeaec";
      redDark.style.border = "1px solid #eaeaec";
      orang.style.border = "1px solid #eaeaec";
      orangeDark.style.border = "1px solid #eaeaec";
      yello.style.border = "1px solid #eaeaec";
      yellowDark.style.border = "1px solid #eaeaec";
      gree.style.border = "1px solid #eaeaec";
      greenDark.style.border = "1px solid #eaeaec";
      blu.style.border = "1px solid #eaeaec";
      blueDark.style.border = "3px solid #eaeaec";
      purpl.style.border = "1px solid #eaeaec";
      purpleDark.style.border = "1px solid #eaeaec";
      whit.style.border = "1px solid #eaeaec";

      black.style.right = "30px";
      re.style.right = "30px";
      redDark.style.right = "30px";
      orang.style.right = "30px";
      orangeDark.style.right = "30px";
      yello.style.right = "30px";
      yellowDark.style.right = "30px";
      gree.style.right = "30px";
      greenDark.style.right = "30px";
      blu.style.right = "30px";
      blueDark.style.right = "28.5px";
      purpl.style.right = "30px";
      purpleDark.style.right = "30px";
      whit.style.right = "30px";

      black.style.top = "100px";
      re.style.top = "130px";
      redDark.style.top = "160px";
      orang.style.top = "190px";
      orangeDark.style.top = "220px";
      yello.style.top = "250px";
      yellowDark.style.top = "280px";
      gree.style.top = "310px";
      greenDark.style.top = "340px";
      blu.style.top = "370px";
      blueDark.style.top = "398.5px";
      purpl.style.top = "430px";
      purpleDark.style.top = "460px";
      whit.style.top = "490px";
    });
    purpl.addEventListener('click', function () {
      h = 267; s = 21; b = 81;
      black.style.border = "1px solid #eaeaec";
      re.style.border = "1px solid #eaeaec";
      redDark.style.border = "1px solid #eaeaec";
      orang.style.border = "1px solid #eaeaec";
      orangeDark.style.border = "1px solid #eaeaec";
      yello.style.border = "1px solid #eaeaec";
      yellowDark.style.border = "1px solid #eaeaec";
      gree.style.border = "1px solid #eaeaec";
      greenDark.style.border = "1px solid #eaeaec";
      blu.style.border = "1px solid #eaeaec";
      blueDark.style.border = "1px solid #eaeaec";
      purpl.style.border = "3px solid #eaeaec";
      purpleDark.style.border = "1px solid #eaeaec";
      whit.style.border = "1px solid #eaeaec";

      black.style.right = "30px";
      re.style.right = "30px";
      redDark.style.right = "30px";
      orang.style.right = "30px";
      orangeDark.style.right = "30px";
      yello.style.right = "30px";
      yellowDark.style.right = "30px";
      gree.style.right = "30px";
      greenDark.style.right = "30px";
      blu.style.right = "30px";
      blueDark.style.right = "30px";
      purpl.style.right = "28.5px";
      purpleDark.style.right = "30px";
      whit.style.right = "30px";

      black.style.top = "100px";
      re.style.top = "130px";
      redDark.style.top = "160px";
      orang.style.top = "190px";
      orangeDark.style.top = "220px";
      yello.style.top = "250px";
      yellowDark.style.top = "280px";
      gree.style.top = "310px";
      greenDark.style.top = "340px";
      blu.style.top = "370px";
      blueDark.style.top = "400px";
      purpl.style.top = "428.5px";
      purpleDark.style.top = "460px";
      whit.style.top = "490px";
    });
    purpleDark.addEventListener('click', function () {
      h = 267; s = 21; b = 68;
      black.style.border = "1px solid #eaeaec";
      re.style.border = "1px solid #eaeaec";
      redDark.style.border = "1px solid #eaeaec";
      orang.style.border = "1px solid #eaeaec";
      orangeDark.style.border = "1px solid #eaeaec";
      yello.style.border = "1px solid #eaeaec";
      yellowDark.style.border = "1px solid #eaeaec";
      gree.style.border = "1px solid #eaeaec";
      greenDark.style.border = "1px solid #eaeaec";
      blu.style.border = "1px solid #eaeaec";
      blueDark.style.border = "1px solid #eaeaec";
      purpl.style.border = "1px solid #eaeaec";
      purpleDark.style.border = "3px solid #eaeaec";
      whit.style.border = "1px solid #eaeaec";

      black.style.right = "30px";
      re.style.right = "30px";
      redDark.style.right = "30px";
      orang.style.right = "30px";
      orangeDark.style.right = "30px";
      yello.style.right = "30px";
      yellowDark.style.right = "30px";
      gree.style.right = "30px";
      greenDark.style.right = "30px";
      blu.style.right = "30px";
      blueDark.style.right = "30px";
      purpl.style.right = "30px";
      purpleDark.style.right = "28.5px";
      whit.style.right = "30px";

      black.style.top = "100px";
      re.style.top = "130px";
      redDark.style.top = "160px";
      orang.style.top = "190px";
      orangeDark.style.top = "220px";
      yello.style.top = "250px";
      yellowDark.style.top = "280px";
      gree.style.top = "310px";
      greenDark.style.top = "340px";
      blu.style.top = "370px";
      blueDark.style.top = "400px";
      purpl.style.top = "430px";
      purpleDark.style.top = "458.5px";
      whit.style.top = "490px";
    });
    whit.addEventListener('click', function () {
      h = 235; s = 1; b = 92;
      black.style.border = "1px solid #eaeaec";
      re.style.border = "1px solid #eaeaec";
      redDark.style.border = "1px solid #eaeaec";
      orang.style.border = "1px solid #eaeaec";
      orangeDark.style.border = "1px solid #eaeaec";
      yello.style.border = "1px solid #eaeaec";
      yellowDark.style.border = "1px solid #eaeaec";
      gree.style.border = "1px solid #eaeaec";
      greenDark.style.border = "1px solid #eaeaec";
      blu.style.border = "1px solid #eaeaec";
      blueDark.style.border = "1px solid #eaeaec";
      purpl.style.border = "1px solid #eaeaec";
      purpleDark.style.border = "1px solid #eaeaec";
      whit.style.border = "3px solid #eaeaec";

      black.style.right = "30px";
      re.style.right = "30px";
      redDark.style.right = "30px";
      orang.style.right = "30px";
      orangeDark.style.right = "30px";
      yello.style.right = "30px";
      yellowDark.style.right = "30px";
      gree.style.right = "30px";
      greenDark.style.right = "30px";
      blu.style.right = "30px";
      blueDark.style.right = "30px";
      purpl.style.right = "30px";
      purpleDark.style.right = "30px";
      whit.style.right = "28.5px";

      black.style.top = "100px";
      re.style.top = "130px";
      redDark.style.top = "160px";
      orang.style.top = "190px";
      orangeDark.style.top = "220px";
      yello.style.top = "250px";
      yellowDark.style.top = "280px";
      gree.style.top = "310px";
      greenDark.style.top = "340px";
      blu.style.top = "370px";
      blueDark.style.top = "400px";
      purpl.style.top = "430px";
      purpleDark.style.top = "460px";
      whit.style.top = "488.5px";
    });

var small = document.getElementById('small');
var medium = document.getElementById('medium');
var large = document.getElementById('large');

    small.style.border = "1px solid #eaeaec";
    large.style.border = "1px solid #eaeaec";
    medium.style.border = "3px solid #eaeaec";

    small.style.right = "101px";
    medium.style.right = "91px";
    large.style.right = "85px";

    small.style.top = "422px";
    medium.style.top = "442px";
    large.style.top = "482px";


    small.addEventListener('click', function () {
      siz = 5;
      medium.style.border = "1px solid #eaeaec";
      large.style.border = "1px solid #eaeaec";
      small.style.border = "3px solid #eaeaec";

      small.style.right = "99px";
      medium.style.right = "93px";
      large.style.right = "85px";

      small.style.top = "420px";
      medium.style.top = "442px";
      large.style.top = "482px";
    });
    medium.addEventListener('click', function () {
      siz = 20;
      small.style.border = "1px solid #eaeaec";
      large.style.border = "1px solid #eaeaec";
      medium.style.border = "3px solid #eaeaec";

      small.style.right = "101px";
      medium.style.right = "90px";
      large.style.right = "85px";

      small.style.top = "422px";
      medium.style.top = "440px";
      large.style.top = "482px";
    });
    large.addEventListener('click', function () {
      siz = 35;
      small.style.border = "1px solid #eaeaec";
      medium.style.border = "1px solid #eaeaec";
      large.style.border = "3px solid #eaeaec";

      small.style.right = "101px";
      medium.style.right = "93px";
      large.style.right = "83px";

      small.style.top = "422px";
      medium.style.top = "442px";
      large.style.top = "482px";
    });
    document.getElementById('save').addEventListener('click', function () {
      /*var c = get();
      console.log(c);
      localStorage.setItem("drawing", c);
      console.log(localStorage.getItem("drawing"));
      localStorage.setItem("drawing", "Smith");*/
      location.href = "save.html";
    });



    function mouseDragged() {
      paint(siz, h, s, b);
    }

    function paint (siz, h, s, b) {
      noStroke();
      fill(h, s, b);
      ellipse(mouseX,mouseY, siz, siz);
    }
