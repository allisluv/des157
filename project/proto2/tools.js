document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here
    var menu = document.getElementById('tools');
    var arrow = document.getElementById('arrowUp');
    var color = document.getElementById('color');
    var size = document.getElementById('size');
    arrow.style.webkitTransform = "rotate(0deg)";

    tools.addEventListener("click", open_close)
    arrow.addEventListener("click", open_close)

    function open_close() {
      if (arrow.style.webkitTransform == "rotate(0deg)") {
        arrow.style.webkitTransform = "rotate(180deg)";
        color.className = "hide";
        size.className = "hide";
      } else {
        arrow.style.webkitTransform = "rotate(0deg)";
        color.className = "show";
        size.className = "show";
      }
      return false;
    }


});
