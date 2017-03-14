// JavaScript Document
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    // all other js here
    //for the sign in page
alert ("Thank you for testing the Art of Collaboration Prototype 3. To sign in, type 'test' into the user name and password feilds. Remember that the prototype doesn't save work yet, so your work will clear when you leave a page.")
    var prompt = document.getElementById("prompt");

    document.signIn.onsubmit = function () {
      var user = document.signIn.userName.value;
      var pass = document.signIn.passWord.value;

      if (user == "test" && pass == "test") {
        location.href = "home.html";
      } else {
        prompt.innerHTML = 'Try Again';
      }
      return false;
    };
});
