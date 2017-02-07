// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js here

//Functions for the casual dress
//store the items to be accessed and changed
var cas_h = document.getElementById('cas_h');
var cas = document.getElementById('cas');
var acas = document.getElementById('acas');

//grow and shrink create a hover distiction
cas_h.addEventListener("mouseover", growc);
function growc() {
  cas_h.style.width = "86px";
  cas_h.style.height = "220px";
}

//back to original size
cas_h.addEventListener("mouseout", shrinkc);
function shrinkc() {
  cas_h.style.width = "78px";
  cas_h.style.height = "200px";
}

//when clicked, the dress goes tot he sillouette and the description appears
cas_h.addEventListener("click", getDressedc);
function getDressedc() {
  var show = document.getElementsByClassName('show');
  for (i = 0; i < show.length; i += 1) {
    show[i].className = "hide";
  }
  cas.className = "show";
  acas.className = "show";
}


//Functions for the summer dress
//store the items to be accessed and changed
var sum_h = document.getElementById('sum_h');
var sum = document.getElementById('sum');
var asum = document.getElementById('asum');

//grow and shrink create a hover distiction
sum_h.addEventListener("mouseover", grows);
function grows() {
  sum_h.style.width = "102px";
  sum_h.style.height = "344px";
}

//back to original size
sum_h.addEventListener("mouseout", shrinks);
function shrinks() {
  sum_h.style.width = "93px";
  sum_h.style.height = "313px";
}

//when clicked, the dress goes tot he sillouette and the description appears
sum_h.addEventListener("click", getDresseds);
function getDresseds() {
  var show = document.getElementsByClassName('show');
  for (i = 0; i < show.length; i += 1) {
    show[i].className = "hide";
  }
  sum.className = "show";
  asum.className = "show";
}



//Functions for the velvet dress
//store the items to be accessed and changed
var vel_h = document.getElementById('vel_h');
var vel = document.getElementById('vel');
var avel = document.getElementById('avel');

//grow and shrink create a hover distiction
vel_h.addEventListener("mouseover", growv);
function growv() {
  vel_h.style.width = "89px";
  vel_h.style.height = "407px";
}

//back to original size
vel_h.addEventListener("mouseout", shrinkv);
function shrinkv() {
  vel_h.style.width = "81px";
  vel_h.style.height = "370px";
}

//when clicked, the dress goes tot he sillouette and the description appears
vel_h.addEventListener("click", getDressedv);
function getDressedv() {
  var show = document.getElementsByClassName('show');
  for (i = 0; i < show.length; i += 1) {
    show[i].className = "hide";
  }
  vel.className = "show";
  avel.className = "show";
}


//Functions for the little black dress
//store the items to be accessed and changed
var lbd_h = document.getElementById('lbd_h');
var lbd = document.getElementById('lbd');
var albd = document.getElementById('albd');

//grow and shrink create a hover distiction
lbd_h.addEventListener("mouseover", growl);
function growl() {
  lbd_h.style.width = "94px";
  lbd_h.style.height = "266px";
}

//back to original size
lbd_h.addEventListener("mouseout", shrinkl);
function shrinkl() {
  lbd_h.style.width = "85px";
  lbd_h.style.height = "242px";
}

//when clicked, the dress goes tot he sillouette and the description appears
lbd_h.addEventListener("click", getDressedl);
function getDressedl() {
  var show = document.getElementsByClassName('show');
  for (i = 0; i < show.length; i += 1) {
    show[i].className = "hide";
  }
  lbd.className = "show";
  albd.className = "show";
}



//Functions for the flanel dress
//store the items to be accessed and changed
var fla_h = document.getElementById('fla_h');
var fla = document.getElementById('fla');
var afla = document.getElementById('afla');

//grow and shrink create a hover distiction
fla_h.addEventListener("mouseover", growf);
function growf() {
  fla_h.style.width = "83px";
  fla_h.style.height = "175px";
}

//back to original size
fla_h.addEventListener("mouseout", shrinkf);
function shrinkf() {
  fla_h.style.width = "75px";
  fla_h.style.height = "159px";
}

//when clicked, the dress goes tot he sillouette and the description appears
fla_h.addEventListener("click", getDressedf);
function getDressedf() {
  var show = document.getElementsByClassName('show');
  for (i = 0; i < show.length; i += 1) {
    show[i].className = "hide";
  }
  fla.className = "show";
  afla.className = "show";
}


});
