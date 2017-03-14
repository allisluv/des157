document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here

    //document.getElementById('display').src = localStorage.getItem(drawing);

    var title = document.save.title.value;
    var author = document.save.author.value;
    var date = document.save.date.value;
    var medium = document.save.medium.value;
    var publish = document.save.publish.value;

    document.save.onsubmit = function () {
      var title = document.save.title.value;
      var author = document.save.author.value;
      var date = document.save.date.value;
      var medium = document.save.medium.value;
      var publish = document.save.publish.value;
      //save these to localStorage?
      location.href = "home.html";
      return false;
    };
});
