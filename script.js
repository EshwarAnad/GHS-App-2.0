  var hammenu = document.getElementsByClassName("hamburger-menu");

  var close = document.getElementsByClassName("close");

  var livesect = document.getElementsByClassName("live-sect");

  var videosect = document.getElementsByClassName("video-sect");

  var topnavbar = document.getElementsByClassName("top-navigation");

  var homescreen = document.getElementsByClassName("homescreen");

  var mediasect = document.getElementsByClassName("media-sect");

  var athleticsect = document.getElementsByClassName("athletic-sect");



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

  function leftpress() {
      homescreen[0].style.display = "none";
      topnavbar[0].style.boxShadow = "0px;";
      mediasect[0].style.display = "block";
      athleticsect[0].style.display = "none"
  }

  function homepress() {
      homescreen[0].style.display = "block";
      mediasect[0].style.display = "none";
      athleticsect[0].style.display = "none";
  }

  function rightpress() {
      homescreen[0].style.display = "none";
      mediasect[0].style.display = "none";
      athleticsect[0].style.display = "block"

  }

