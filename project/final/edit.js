document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here
    var menu = document.getElementById('tools');
    var arrow = document.getElementById('arrowUp');
    var edit = document.getElementById('edit');
    arrow.style.webkitTransform = "rotate(0deg)";

    tools.addEventListener("click", open_close)
    arrow.addEventListener("click", open_close)

    function open_close() {
      if (arrow.style.webkitTransform == "rotate(0deg)") {
        arrow.style.webkitTransform = "rotate(180deg)";
        edit.className = "hide";
      } else {
        arrow.style.webkitTransform = "rotate(0deg)";
        edit.className = "show";
      }
      return false;
    }


});
