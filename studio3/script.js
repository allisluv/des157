// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js here


var cas_h = document.getElementById('cas_h');
var cas = document.getElementById('cas');
var acas = document.getElementById('acas');

cas_h.addEventListener("mouseover", growc);
cas_h.addEventListener("mouseout", shrinkc);
cas_h.addEventListener("click", getDressedc);

function getDressedc() {
  var show = document.getElementsByClassName('show');
  for (i = 0; i < show.length; i += 1) {
    show[i].className = "hide";
  }
  cas.className = "show";
  acas.className = "show";
}

function growc() {
  cas_h.style.width = "86px";
  cas_h.style.height = "220px";
}

function shrinkc() {
  cas_h.style.width = "78px";
  cas_h.style.height = "200px";
}



var sum_h = document.getElementById('sum_h');
var sum = document.getElementById('sum');
var asum = document.getElementById('asum');

sum_h.addEventListener("mouseover", grows);
sum_h.addEventListener("mouseout", shrinks);
sum_h.addEventListener("click", getDresseds);

function getDresseds() {
  var show = document.getElementsByClassName('show');
  for (i = 0; i < show.length; i += 1) {
    show[i].className = "hide";
  }
  sum.className = "show";
  asum.className = "show";
}

function grows() {
  sum_h.style.width = "102px";
  sum_h.style.height = "344px";
}

function shrinks() {
  sum_h.style.width = "93px";
  sum_h.style.height = "313px";
}



var vel_h = document.getElementById('vel_h');
var vel = document.getElementById('vel');
var avel = document.getElementById('avel');

vel_h.addEventListener("mouseover", growv);
vel_h.addEventListener("mouseout", shrinkv);
vel_h.addEventListener("click", getDressedv);

function getDressedv() {
  var show = document.getElementsByClassName('show');
  for (i = 0; i < show.length; i += 1) {
    show[i].className = "hide";
  }
  vel.className = "show";
  avel.className = "show";
}

function growv() {
  vel_h.style.width = "89px";
  vel_h.style.height = "407px";
}

function shrinkv() {
  vel_h.style.width = "81px";
  vel_h.style.height = "370px";
}


var lbd_h = document.getElementById('lbd_h');
var lbd = document.getElementById('lbd');
var albd = document.getElementById('albd');

lbd_h.addEventListener("mouseover", growl);
lbd_h.addEventListener("mouseout", shrinkl);
lbd_h.addEventListener("click", getDressedl);

function getDressedl() {
  var show = document.getElementsByClassName('show');
  for (i = 0; i < show.length; i += 1) {
    show[i].className = "hide";
  }
  lbd.className = "show";
  albd.className = "show";
}

function growl() {
  lbd_h.style.width = "94px";
  lbd_h.style.height = "266px";
}

function shrinkl() {
  lbd_h.style.width = "85px";
  lbd_h.style.height = "242px";
}



var fla_h = document.getElementById('fla_h');
var fla = document.getElementById('fla');
var afla = document.getElementById('afla');

fla_h.addEventListener("mouseover", growf);
fla_h.addEventListener("mouseout", shrinkf);
fla_h.addEventListener("click", getDressedf);

function getDressedf() {
  var show = document.getElementsByClassName('show');
  for (i = 0; i < show.length; i += 1) {
    show[i].className = "hide";
  }
  fla.className = "show";
  afla.className = "show";
}

function growf() {
  fla_h.style.width = "83px";
  fla_h.style.height = "175px";
}

function shrinkf() {
  fla_h.style.width = "75px";
  fla_h.style.height = "159px";
}

});
