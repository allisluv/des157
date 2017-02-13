// JavaScript Document


document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

//make sure to store the start time to be compared to the finish time later.
    var start = new Date();
    var sTime = start.getTime();

//get all the elements needed for timed tips
    var q2 = document.getElementById("q2");
    var q3 = document.getElementById("q3");
    var q4 = document.getElementById("q4");
    var q5 = document.getElementById("q5");
    var q6 = document.getElementById("q6");
    var tip_1 = document.getElementById("tip1");
    var tip_2 = document.getElementById("tip2");
    var tip_3 = document.getElementById("tip3");

//timer global variable
    var tipTimer;

//mouseover
    q1.addEventListener('mouseover', function(){
      tipTimer = setTimeout(showTip, 2000); //give them a little time (2s)
    });

//on mouse out, clear the timer and turn of tips
    q1.addEventListener('mouseout', function(){
      clearTimeout(tipTimer);
      tip_1.className = "hide";
      tip_2.className = "hide";
      tip_3.className = "hide";
    });

//mouseover
    q2.addEventListener('mouseover', function(){
      tipTimer = setTimeout(showTip, 2000);
    });

//on mouse out, clear the timer and turn of tips
    q2.addEventListener('mouseout', function(){
      clearTimeout(tipTimer);
      tip_1.className = "hide";
      tip_2.className = "hide";
      tip_3.className = "hide";
    });

//mouseover
    q3.addEventListener('mouseover', function(){
      tipTimer = setTimeout(showTip, 2000);
    });

//on mouse out, clear the timer and turn of tips
    q3.addEventListener('mouseout', function(){
      clearTimeout(tipTimer);
      tip_1.className = "hide";
      tip_2.className = "hide";
      tip_3.className = "hide";
    });

//mouseover
    q4.addEventListener('mouseover', function(){
      tipTimer = setTimeout(showTip, 2000);
    });

//on mouse out, clear the timer and turn of tips
    q4.addEventListener('mouseout', function(){
      clearTimeout(tipTimer);
      tip_1.className = "hide";
      tip_2.className = "hide";
      tip_3.className = "hide";
    });

//mouseover
    q5.addEventListener('mouseover', function(){
      tipTimer = setTimeout(showTip, 2000);
    });

//on mouse out, clear the timer and turn of tips
    q5.addEventListener('mouseout', function(){
      clearTimeout(tipTimer);
      tip_1.className = "hide";
      tip_2.className = "hide";
      tip_3.className = "hide";
    });

//mouseover
    q6.addEventListener('mouseover', function(){
      tipTimer = setTimeout(showTip, 4000);
    });

//on mouse out, clear the timer and turn of tips
    q6.addEventListener('mouseout', function(){
      clearTimeout(tipTimer);
      tip_1.className = "hide";
      tip_2.className = "hide";
      tip_3.className = "hide";
    });


//how to pick a tip
    function showTip() {
//get a random number between 1 and 3
      var num = Math.floor((Math.random()*3)+1);
//create variable to hold a tip from html
      var tip;

//based on the random number assign a tip from html to the variable tip
      if (num == 1) {
        tip = tip_1;
      } else if (num == 2) {
        tip = tip_2;
      } else {
        tip = tip_3;
      }

//make sure you've got the tip
      console.log(tip);
//change the tip to show
      tip.className = "show";
//make sure the tip is showing now
      console.log(tip);
    }


//get all the elements needed to change questions
    var once = document.getElementById("once");
    var twice = document.getElementById("twice");
    var three = document.getElementById("three");
    var assigned = document.getElementById("assigned");
    var els = document.getElementById("else");
    var due = document.getElementById("due");
    var less = document.getElementById("less");
    var more = document.getElementById("more");
    var count = document.getElementById("count");
    var away = document.getElementById("away");
    var finish = document.getElementById("finish");
    var remember = document.getElementById("remember");
    var phone = document.getElementById("phone");
    var comp = document.getElementById("comp");
    var water = document.getElementById("water");
    var apps = document.getElementById("apps");
    var dnd = document.getElementById("dnd");
    var drink = document.getElementById("drink");

//new global timer variable
    var time;

    document.f.onreset = back;

    function back() {
      q1.className = "show";
      q2.className = "hide";
      q3.className = "hide";
      q4.className = "hide";
      q5.className = "hide";
      q6.className = "hide";

    }

    once.addEventListener('click', show2);
    twice.addEventListener('click', show2);
    three.addEventListener('click', show2);

    function show2() {
      q1.className = "hide";
      q2.className = "show";
    }

    assigned.addEventListener('click', show3);
    els.addEventListener('click', show3);
    due.addEventListener('click', show3);

    function show3() {
      q2.className = "hide";
      q3.className = "show";
    }

    less.addEventListener('click', show4);
    more.addEventListener('click', show4);
    count.addEventListener('click', show4);

    function show4() {
      q3.className = "hide";
      q4.className = "show";
    }

    away.addEventListener('click', show5);
    finish.addEventListener('click', show5);
    remember.addEventListener('click', show5);

    function show5() {
      q4.className = "hide";
      q5.className = "show";
    }

    phone.addEventListener('click', show6);
    comp.addEventListener('click', show6);
    water.addEventListener('click', show6);

    function show6() {
      q5.className = "hide";
      q6.className = "show";
    }

    apps.addEventListener('click', answer);
    dnd.addEventListener('click', answer);
    drink.addEventListener('click', answer);

    function answer() {
      var finish = new Date();
      var fTime = finish.getTime();
      var timeWasted;

      timeWasted = Math.round((fTime - sTime)/1000);

      alert('You have been doing this quiz for ' + timeWasted + ' seconds. There are countless better uses of your time. You clearly spend way too much time on pointless internet distrations. In the future, you should be more aware of how your electronics distract you. Now, go do something productive for a change!');
    }


});
