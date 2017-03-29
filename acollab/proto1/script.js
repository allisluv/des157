// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here
    var tools = document.getElementById('tools');
    var bars = document.section.ul;
    console.log(tools);
    tools.addEventListener("click", show);
    function show() {
      for(var x = 0; x <= bars.length; x++)
      bars[x].className = "show";
      console.log(bars[x]);
    }

});
