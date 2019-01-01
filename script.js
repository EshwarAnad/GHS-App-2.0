  var hammenu = document.getElementsByClassName("hamburger-menu");

  var close = document.getElementsByClassName("close");

  var livesect = document.getElementsByClassName("live-sect");

  var videosect = document.getElementsByClassName("video-sect");

  var topnavbar = document.getElementsByClassName("top-navigation");

  var homescreen = document.getElementsByClassName("homescreen");

  var mediasect = document.getElementsByClassName("media-sect");

  var athleticsect = document.getElementsByClassName("athletic-sect");

  var gradessect = document.getElementsByClassName("grades-sect");

  var mealmenu = document.getElementsByClassName("meal-menu");

  var lunchmenu = document.getElementsByClassName("lunch-menu");

  var breakfastmenu = document.getElementsByClassName("breakfast-menu");

  function expand() {
      hammenu[0].style.display = "block";
      close[0].style.display = "block";
  }

  function collapse() {
      hammenu[0].style.display = "none";
      close[0].style.display = "none";
  }

  function video() {
      livesect[0].style.display = "none";
      videosect[0].style.display = "block"

  }

  function live() {
      livesect[0].style.display = "block";
      videosect[0].style.display = "none";
  }

  function lunch() {
      lunchmenu[0].style.display = "block";
      breakfastmenu[0].style.display = "none";
  }

  function breakfast() {
      lunchmenu[0].style.display = "none";
      breakfastmenu[0].style.display = "block";
  }


  function leftpress() {

      homescreen[0].style.display = "none";
      topnavbar[0].style.boxShadow = "0px;";
      mediasect[0].style.display = "block";
      athleticsect[0].style.display = "none"
      gradessect[0].style.display = "none"
      mealmenu[0].style.display = "none";
      document.getElementById("btn-video").focus();
  }

  function homepress() {
      homescreen[0].style.display = "block";
      mediasect[0].style.display = "none";
      athleticsect[0].style.display = "none";
      gradessect[0].style.display = "none";
      mealmenu[0].style.display = "none";
  }

  function rightpress() {
      homescreen[0].style.display = "none";
      mediasect[0].style.display = "none";
      athleticsect[0].style.display = "block";
      gradessect[0].style.display = "none";
      mealmenu[0].style.display = "none";
      document.getElementById("btn-schedule").focus();

  }









  function grades() {

      homescreen[0].style.display = "none";
      mediasect[0].style.display = "none";
      gradessect[0].style.display = "none";
      athleticsect[0].style.display = "none";
      hammenu[0].style.display = "none";
      gradessect[0].style.display = "block";
      mealmenu[0].style.display = "none";

  }

  function meal() {
      mealmenu[0].style.display = "block";
      homescreen[0].style.display = "none";
      mediasect[0].style.display = "none";
      gradessect[0].style.display = "none";
      athleticsect[0].style.display = "none";
      hammenu[0].style.display = "none";
      gradessect[0].style.display = "none";
      document.getElementById("btn-lunch").focus();
  }
