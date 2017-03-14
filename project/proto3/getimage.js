document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here

    document.getElementById('display').src = localStorage.getItem(drawing);

});
