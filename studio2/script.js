// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    function processWords() {
      //store the words
      var noun1 = document.words.noun1.value;
      var noun2 = document.words.noun2.value;
      var noun3 = document.words.noun3.value;
      var noun4 = document.words.noun4.value;
      var noun5 = document.words.noun5.value;
      var noun6 = document.words.noun6.value;

      var verb1 = document.words.verb1.value;
      var verb2 = document.words.verb2.value;
      var verb3 = document.words.verb3.value;

      var adj1 = document.words.adj1.value;
      var adj2 = document.words.adj2.value;
      var adj3 = document.words.adj3.value;

      var adv1 = document.words.adv1.value;
      var adv2 = document.words.adv2.value;
      var adv3 = document.words.adv3.value;

      //add words to the article
      document.getElementById('noun1').innerHTML= noun1;
      document.getElementById('noun2').innerHTML= noun2;
      document.getElementById('noun3').innerHTML= noun3;
      document.getElementById('noun4').innerHTML= noun4;
      document.getElementById('noun5').innerHTML= noun5;
      document.getElementById('noun6').innerHTML= noun6;

      document.getElementById('verb1').innerHTML= verb1;
      document.getElementById('verb2').innerHTML= verb2;
      document.getElementById('verb3').innerHTML= verb3;

      document.getElementById('adj1').innerHTML= adj1;
      document.getElementById('adj2').innerHTML= adj2;
      document.getElementById('adj3').innerHTML= adj3;

      document.getElementById('adv1').innerHTML= adv1;
      document.getElementById('adv2').innerHTML= adv2;
      document.getElementById('adv3').innerHTML= adv3;

      //hide words form
      document.words.style.display = "none";
      document.getElementById('m').style.backgroundImage = "url('images/cootieCatcher1.png')";
      //show numbers form
      document.numbers.style.display = "inline-block";

      return false;
    }

    function processNums() {
      //store the numbers
      var num1 = document.numbers.num1.value;
      var num2 = document.numbers.num2.value;
      var num3 = document.numbers.num3.value;
      //add numbers to the article
      document.getElementById('num1').innerHTML= num1;
      document.getElementById('num2').innerHTML= num2;
      document.getElementById('num3').innerHTML= num3;

      //hide numbers form
      document.numbers.style.display = "none";
      document.getElementById('m').style.backgroundImage = "url('images/cootieCatcher2.png')";
      //show article
      document.getElementById("future").style.display = "inline-block";

      return false;
    }


    document.words.onsubmit = processWords;
    document.numbers.onsubmit = processNums;

});
