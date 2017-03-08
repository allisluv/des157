// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here
    var tools = document.getElementById('tools');

    tools.addEventListener("click", show);
    function show() {
      tools.className = "show";
    }

});
