var hammenu = document.getElementsByClassName("hamburger-menu"),
    close = document.getElementsByClassName("close"),
    livesect = document.getElementsByClassName("live-sect"),
    videosect = document.getElementsByClassName("video-sect"),
    topnavbar = document.getElementsByClassName("top-navigation"),
    homescreen = document.getElementsByClassName("homescreen"),
    mediasect = document.getElementsByClassName("media-sect"),
    athleticsect = document.getElementsByClassName("athletic-sect"),
    gradessect = document.getElementsByClassName("grades-sect"),
    mealmenu = document.getElementsByClassName("meal-menu"),
    lunchmenu = document.getElementsByClassName("lunch-menu"),
    breakfastmenu = document.getElementsByClassName("breakfast-menu"),
    searchsect = document.getElementsByClassName("search-sect"),
    admiralnationsect = document.getElementsByClassName("admiralnation-sect"),
    kahootsect = document.getElementsByClassName("kahoot-sect");

function expand() {
    hammenu[0].style.display = "block", document.getElementsByClassName("menu-cover")[0].style.display = "block", document.getElementsByClassName("univ-menu")[0].style.display = "block", close[0].style.display = "block"
}

function collapse() {
    searchsect[0].style.display = "none", hammenu[0].style.display = "none", document.getElementsByClassName("menu-cover")[0].style.display = "none", document.getElementsByClassName("univ-menu")[0].style.display = "none", close[0].style.display = "none"
}

function video() {
    livesect[0].style.display = "none", videosect[0].style.display = "block"
}

function live() {
    livesect[0].style.display = "block", videosect[0].style.display = "none"
}

function lunch() {
    lunchmenu[0].style.display = "block", breakfastmenu[0].style.display = "none"
}

function breakfast() {
    lunchmenu[0].style.display = "none", breakfastmenu[0].style.display = "block"
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
    document.getElementsByClassName("more")[0].style.display = "none", document.getElementsByClassName("less-btn")[0].style.display = "none", document.getElementsByClassName("more-btn")[0].style.display = "block"
}

function leftpress() {
    kahootsect[0].style.display = "none", document.getElementsByClassName("univ-menu")[0].style.display = "none";
    admiralnationsect[0].style.display = "none";
    homescreen[0].style.display = "none";
    mediasect[0].style.display = "block";
    athleticsect[0].style.display = "none";
    mealmenu[0].style.display = "none";
    gradessect[0].style.display = "none";
    searchsect[0].style.display = "none";
    document.getElementById("btn-video").focus();
}

function homepress() {
    kahootsect[0].style.display = "none", document.getElementsByClassName("univ-menu")[0].style.display = "none";
    admiralnationsect[0].style.display = "none";
    homescreen[0].style.display = "block", mediasect[0].style.display = "none", athleticsect[0].style.display = "none", mealmenu[0].style.display = "none", gradessect[0].style.display = "none", searchsect[0].style.display = "none"
}

function rightpress() {
    kahootsect[0].style.display = "none", document.getElementsByClassName("univ-menu")[0].style.display = "none", admiralnationsect[0].style.display = "none", homescreen[0].style.display = "none", mediasect[0].style.display = "none", mealmenu[0].style.display = "none", athleticsect[0].style.display = "block", gradessect[0].style.display = "none", document.getElementById("btn-schedule").focus(), searchsect[0].style.display = "none"
}

function kahoot() {
    mealmenu[0].style.display = "none",
        document.getElementsByClassName("univ-menu")[0].style.display = "none", kahootsect[0].style.display = "block", homescreen[0].style.display = "none", mediasect[0].style.display = "none", gradessect[0].style.display = "none", athleticsect[0].style.display = "none", gradessect[0].style.display = "none", searchsect[0].style.display = "none", admiralnationsect[0].style.display = "none", document.getElementsByClassName("menu-cover")[0].style.display = "none", close[0].style.display = "none", searchsect[0].style.display = "none"
}

function admiral() {
    document.getElementsByClassName("univ-menu")[0].style.display = "none", admiralnationsect[0].style.display = "block", kahootsect[0].style.display = "none", homescreen[0].style.display = "none", mediasect[0].style.display = "none", gradessect[0].style.display = "none", athleticsect[0].style.display = "none", hammenu[0].style.display = "none", mealmenu[0].style.display = "none", gradessect[0].style.display = "none", searchsect[0].style.display = "none", document.getElementsByClassName("menu-cover")[0].style.display = "none", close[0].style.display = "none", searchsect[0].style.display = "none"
}

function grades() {
    kahootsect[0].style.display = "none", document.getElementsByClassName("univ-menu")[0].style.display = "none", homescreen[0].style.display = "none", mediasect[0].style.display = "none", gradessect[0].style.display = "none", athleticsect[0].style.display = "none", hammenu[0].style.display = "none", mealmenu[0].style.display = "none", gradessect[0].style.display = "block", admiralnationsect[0].style.display = "none", searchsect[0].style.display = "none", close[0].style.display = "none", document.getElementsByClassName("menu-cover")[0].style.display = "none", searchsect[0].style.display = "none"
}

function meal() {
    document.getElementsByClassName("univ-menu")[0].style.display = "none", admiralnationsect[0].style.display = "none", mealmenu[0].style.display = "block", kahootsect[0].style.display = "none", homescreen[0].style.display = "none", mediasect[0].style.display = "none", athleticsect[0].style.display = "none", gradessect[0].style.display = "none", hammenu[0].style.display = "none", gradessect[0].style.display = "none", searchsect[0].style.display = "none", document.getElementById("btn-lunch").focus(), document.getElementsByClassName("menu-cover")[0].style.display = "none", close[0].style.display = "none"
}

function searchopen() {
    searchsect[0].style.display = "block", document.getElementById("mySearch").focus(), document.getElementsByClassName("univ-menu")[0].style.display = "none"
}

function searchclose() {
    searchsect[0].style.display = "none"
}

function all() {
    document.getElementsByClassName("event")[0].style.display = "block", document.getElementsByClassName("test")[0].style.display = "block", document.getElementsByClassName("promote")[0].style.display = "block", document.getElementsByClassName("help")[0].style.display = "block"
}

function test() {
    document.getElementsByClassName("event")[0].style.display = "none", document.getElementsByClassName("test")[0].style.display = "block", document.getElementsByClassName("promote")[0].style.display = "none", document.getElementsByClassName("help")[0].style.display = "none"
}

function myFunction() {
    var e, s, t;
    for (e = document.getElementById("mySearch").value.toUpperCase(), s = document.getElementById("myMenu").getElementsByTagName("li"), t = 0; t < s.length; t++) - 1 < s[t].getElementsByTagName("a")[0].innerHTML.toUpperCase().indexOf(e) ? s[t].style.display = "" : s[t].style.display = "none"
}
var lastTouchEnd = 0;
document.addEventListener("touchend", function (e) {
    var s = (new Date).getTime();
    s - lastTouchEnd <= 300 && e.preventDefault(), lastTouchEnd = s
}, !1), document.documentElement.addEventListener("touchmove", function (e) {
    e.preventDefault()
}, !1);
