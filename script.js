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

  var searchsect = document.getElementsByClassName("search-sect");

  var admiralnationsect = document.getElementsByClassName("admiralnation-sect");

  var kahootsect = document.getElementsByClassName("kahoot-sect");

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

  function schedule() {
      document.getElementsByClassName("calendar")[0].style.display = "block";
      document.getElementsByClassName("site")[0].style.display = "none";
  }

  function site() {
      document.getElementsByClassName("site")[0].style.display = "block";
      document.getElementsByClassName("calendar")[0].style.display = "none";
  }

  function viewmore() {
      document.getElementsByClassName("more")[0].style.display = "block";
      document.getElementsByClassName("less-btn")[0].style.display = "block";
      document.getElementsByClassName("more-btn")[0].style.display = "none";
  }

  function viewless() {
      document.getElementsByClassName("more")[0].style.display = "none";
      document.getElementsByClassName("less-btn")[0].style.display = "none";
      document.getElementsByClassName("more-btn")[0].style.display = "block";
  }









  function leftpress() {
      kahootsect[0].style.display = "none";
      homescreen[0].style.display = "none";
      topnavbar[0].style.boxShadow = "0px;";
      mediasect[0].style.display = "block";
      athleticsect[0].style.display = "none"
      gradessect[0].style.display = "none"
      mealmenu[0].style.display = "none";
      searchsect[0].style.display = "none";
      document.getElementById("btn-video").focus();
      admiralnationsect[0].style.display = "none";

  }

  function homepress() {
      kahootsect[0].style.display = "none";
      homescreen[0].style.display = "block";
      mediasect[0].style.display = "none";
      athleticsect[0].style.display = "none";
      gradessect[0].style.display = "none";
      mealmenu[0].style.display = "none";
      searchsect[0].style.display = "none";
      admiralnationsect[0].style.display = "none";
  }

  function rightpress() {
      kahootsect[0].style.display = "none";
      homescreen[0].style.display = "none";
      mediasect[0].style.display = "none";
      athleticsect[0].style.display = "block";
      gradessect[0].style.display = "none";
      mealmenu[0].style.display = "none";
      document.getElementById("btn-schedule").focus();
      searchsect[0].style.display = "none";
      admiralnationsect[0].style.display = "none";
  }





  function kahoot() {
      kahootsect[0].style.display = "block";
      homescreen[0].style.display = "none";
      mediasect[0].style.display = "none";
      gradessect[0].style.display = "none";
      athleticsect[0].style.display = "none";
      hammenu[0].style.display = "none";
      gradessect[0].style.display = "none";
      mealmenu[0].style.display = "none";
      searchsect[0].style.display = "none";
      admiralnationsect[0].style.display = "none";
      close[0].style.display = "none";
  }

  function admiral() {
      kahootsect[0].style.display = "none";
      homescreen[0].style.display = "none";
      mediasect[0].style.display = "none";
      gradessect[0].style.display = "none";
      athleticsect[0].style.display = "none";
      hammenu[0].style.display = "none";
      gradessect[0].style.display = "none";
      mealmenu[0].style.display = "none";
      searchsect[0].style.display = "none";
      admiralnationsect[0].style.display = "block";
      close[0].style.display = "none";
  }

  function grades() {
      kahootsect[0].style.display = "none";
      homescreen[0].style.display = "none";
      mediasect[0].style.display = "none";
      gradessect[0].style.display = "none";
      athleticsect[0].style.display = "none";
      hammenu[0].style.display = "none";
      gradessect[0].style.display = "block";
      mealmenu[0].style.display = "none";
      searchsect[0].style.display = "none";
      admiralnationsect[0].style.display = "none";
      close[0].style.display = "none";
  }

  function meal() {
      kahootsect[0].style.display = "none";
      mealmenu[0].style.display = "block";
      homescreen[0].style.display = "none";
      mediasect[0].style.display = "none";
      gradessect[0].style.display = "none";
      athleticsect[0].style.display = "none";
      hammenu[0].style.display = "none";
      gradessect[0].style.display = "none";
      searchsect[0].style.display = "none";
      document.getElementById("btn-lunch").focus();
      admiralnationsect[0].style.display = "none";
      close[0].style.display = "none";
  }

  function searchopen() {
      kahootsect[0].style.display = "none";
      searchsect[0].style.display = "block";
      homescreen[0].style.display = "none";
      mediasect[0].style.display = "none";
      gradessect[0].style.display = "none";
      athleticsect[0].style.display = "none";
      hammenu[0].style.display = "none";
      gradessect[0].style.display = "none";
      mealmenu[0].style.display = "none";
      document.getElementById("mySearch").focus();
      admiralnationsect[0].style.display = "none";
      close[0].style.display = "none";
  }




  function all() {
      document.getElementsByClassName("event")[0].style.display = "block";
      document.getElementsByClassName("test")[0].style.display = "block";
      document.getElementsByClassName("promote")[0].style.display = "block";
      document.getElementsByClassName("help")[0].style.display = "block";
  }

  function test() {
      document.getElementsByClassName("event")[0].style.display = "none";
      document.getElementsByClassName("test")[0].style.display = "block";
      document.getElementsByClassName("promote")[0].style.display = "none";
      document.getElementsByClassName("help")[0].style.display = "none";
  }




  function myFunction() {
      var input, filter, ul, li, a, i;
      input = document.getElementById("mySearch");
      filter = input.value.toUpperCase();
      ul = document.getElementById("myMenu");
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
          } else {
              li[i].style.display = "none";
          }
      }
  }


  var lastTouchEnd = 0;
  document.addEventListener('touchend', function (event) {
      var now = (new Date()).getTime();
      if (now - lastTouchEnd <= 300) {
          event.preventDefault();
      }
      lastTouchEnd = now;
  }, false);


  document.documentElement.addEventListener('touchmove', function (event) {
      event.preventDefault();
  }, false);
