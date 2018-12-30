  var hammenu = document.getElementsByClassName("hamburger-menu");

  var close = document.getElementsByClassName("close");

  function expand() {
      hammenu[0].style.display = "block";
      close[0].style.display = "block";
  }

  function collapse() {
      hammenu[0].style.display = "none";
      close[0].style.display = "none";
  }
