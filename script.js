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

  var kahootsect = document.getElementsByClassName("kahoot-sect")

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

  (function (window) {
      'use strict';
      window.code = window.code || {};
      window.code.lightweightYoutubePlayer = function () {
          var dataYoutubeVideos = '[data-youtube]';
          var youtubeVideos = [...document.querySelectorAll(dataYoutubeVideos)];

          function init() {
              youtubeVideos.forEach(function (element) {
                  bindYoutubeVideoEvent(element);
              });
          }

          function bindYoutubeVideoEvent(element) {
              var button = element.querySelector('[data-youtube-button]');
              button.addEventListener('click', createIframe);
          }

          function createIframe(event) {
              var url = event.target.dataset.youtubeButton;
              var youtubePlaceholder = event.target.parentNode;
              var htmlString = '<div class="video__youtube "> <iframe class="video__iframe " src=" ' + url + '?autoplay=1 " frameborder="0 " allowfullscreen></iframe></div>';
              youtubePlaceholder.style.display = 'none';
              youtubePlaceholder.insertAdjacentHTML('beforebegin', htmlString);
              youtubePlaceholder.parentNode.removeChild(youtubePlaceholder);
          }
          return {
              init: init
          }
      };
  })(window)
  ready();

  function ready() {
      var lightweightYoutubePlayer = new code.lightweightYoutubePlayer()
      if (document.readyState != 'loading') {
          page.init()
      } else {
          document.addEventListener('DOMContentLoaded', lightweightYoutubePlayer.init);
      }
  }

  if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
          navigator.serviceWorker.register('/sw.js').then(function (registration) {
              // Registration was successful
              console.log('ServiceWorker registration successful with scope: ', registration.scope);
          }, function (err) {
              // registration failed :(
              console.log('ServiceWorker registration failed: ', err);
          });
      });
  }

  self.addEventListener('install', function (event) {
      // Perform install steps
  });
