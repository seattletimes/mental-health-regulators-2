require("./animate-audio");
require("waypoints/lib/noframework.waypoints");

var xhr = require("./lib/xhr");
var $ = require("./lib/qsa");
var animateScroll = require("./lib/animateScroll");
var track = require("./lib/tracking");

var debounce = require("./lib/debounce");
var Camera = require("savage-camera");
var savage = require("savage-query");
var keyStage = document.querySelector(".scroll-content");
var map = document.querySelector(".backdrop svg");
var camera = new Camera(map);
var stages = $(".layer").reverse();
var current = null;
var existing = document.querySelector("#Existing");


var onScroll = function() {
  var scrollBounds = keyStage.getBoundingClientRect();
  for (var i = 0; i < stages.length; i++) {
    var stage = stages[i];
    var bounds = stage.getBoundingClientRect();
    if (bounds.top < window.innerHeight && bounds.bottom > 0) {
      var layerID = stage.getAttribute("data-layer");
      if (layerID == current) return;
      var layer = document.querySelector("#" + layerID);
      if (!layer) return;      
      if (layerID != 'Existing') {
        savage(map).addClass("zoomed");
      } else {
        savage(map).removeClass("zoomed");
      }
      var active = document.querySelector(".activated");
      if (active) savage(active).removeClass("activated");
      savage(layer).addClass("activated");      
      current = layerID;
      camera.zoomTo(layer, window.innerWidth > 1000 ? 200 : 50, 500);
      return;
      
    }
  }
}

var goget0 = document.getElementById("btn0");
goget0.addEventListener("click", scrollthere0);
function scrollthere0(){
  var next0 = document.getElementById("next0");
  animateScroll(next0);
};

var goget1 = document.getElementById("btn1");
goget1.addEventListener("click", scrollthere1);
function scrollthere1(){
  var next1 = document.getElementById("next1");
  animateScroll(next1);
};

var goget2 = document.getElementById("btn2");
goget2.addEventListener("click", scrollthere2);
function scrollthere2(){
  var next2 = document.getElementById("next2");
  animateScroll(next2);
};

var goget3 = document.getElementById("btn3");
goget3.addEventListener("click", scrollthere3);
function scrollthere3(){
  var next3 = document.getElementById("next3");
  animateScroll(next3);
};

var goget4 = document.getElementById("btn4");
goget4.addEventListener("click", scrollthere4);
function scrollthere4(){
  var next4 = document.getElementById("next4");
  animateScroll(next4);
};

var goget5 = document.getElementById("btn5");
goget5.addEventListener("click", scrollthere5);
function scrollthere5(){
  var next5 = document.getElementById("next5");
  animateScroll(next5);
};

var goget6 = document.getElementById("btn6");
goget6.addEventListener("click", scrollthere6);
function scrollthere6(){
  var next6 = document.getElementById("next6");
  animateScroll(next6);
};



var button0 = document.getElementById("btn0");
    button0.addEventListener("click", player0);
    function player0() {
        var audio0 = document.querySelector("#aud1");
        audio0.play();
    };

    var button1 = document.querySelector("#btn1");
    button1.addEventListener("click", player1);
    function player1() {
        var audio1 = document.querySelector("#aud2");
        audio1.play();
    };

        
    var button3 = document.querySelector("#btn2");
    button3.addEventListener("click", player3);
    function player3() {
        var audio3 = document.querySelector("#aud3");
        audio3.play();
    };

    var button4 = document.querySelector("#btn3");
    button4.addEventListener("click", player4);
    function player4() {
        var audio4 = document.querySelector("#aud4");
        audio4.play();
    };

    var button5 = document.querySelector("#btn4");
    button5.addEventListener("click", player5);
    function player5() {
        var audio5 = document.querySelector("#aud5");
        audio5.play();
    };
    

 var waypointPlay0 = new Waypoint({
  element: document.getElementById('player0'),
  handler: function(down) {
    var audioPlay0 = document.getElementById('aud0')
    audioPlay0.play()
  },
  offset: '50%'
})

    var waypointPause0 = new Waypoint({
  element: document.getElementById('player0'),
  handler: function(down) {
    var audioPause0 = document.getElementById('aud0')
    audioPause0.pause()
  },
  offset: '-20%'
})

        var waypointPlay1 = new Waypoint({
  element: document.getElementById('player1'),
  handler: function(down) {
    var audioPlay1 = document.getElementById('aud1')
    audioPlay1.play()
  },
  offset: '50%'
})

    var waypointPause1 = new Waypoint({
  element: document.getElementById('player1'),
  handler: function(down) {
    var audioPause1 = document.getElementById('aud1')
    audioPause1.pause()
  },
  offset: '-20%'
})

          var waypointPlay2 = new Waypoint({
  element: document.getElementById('player2'),
  handler: function(down) {
    var audioPlay2 = document.getElementById('aud2')
    audioPlay2.play()
  },
  offset: '50%'
})

    var waypointPause2 = new Waypoint({
  element: document.getElementById('player2'),
  handler: function(down) {
    var audioPause2 = document.getElementById('aud2')
    audioPause2.pause()
  },
  offset: '-20%'
})

    var waypointPlay3 = new Waypoint({
  element: document.getElementById('player3'),
  handler: function(down) {
    var audioPlay3 = document.getElementById('aud3')
    audioPlay3.play()
  },
  offset: '50%'
})

    var waypointPause3 = new Waypoint({
  element: document.getElementById('player3'),
  handler: function(down) {
    var audioPause3 = document.getElementById('aud3')
    audioPause3.pause()
  },
  offset: '-20%'
})

              var waypointPlay4 = new Waypoint({
  element: document.getElementById('player4'),
  handler: function(down) {
    var audioPlay4 = document.getElementById('aud4')
    audioPlay4.play()
  },
  offset: '50%'
})

    var waypointPause4 = new Waypoint({
  element: document.getElementById('player4'),
  handler: function(down) {
    var audioPause4 = document.getElementById('aud4')
    audioPause4.pause()
  },
  offset: '-20%'
})

              var waypointPlay5 = new Waypoint({
  element: document.getElementById('player5'),
  handler: function(down) {
    var audioPlay5 = document.getElementById('aud5')
    audioPlay5.play()
  },
  offset: '50%'
})

    var waypointPause5 = new Waypoint({
  element: document.getElementById('player5'),
  handler: function(down) {
    var audioPause5 = document.getElementById('aud5')
    audioPause5.pause()
  },
  offset: '-20%'
})

              var waypointPlay6 = new Waypoint({
  element: document.getElementById('player6'),
  handler: function(down) {
    var audioPlay6 = document.getElementById('aud6');
    audioPlay6.play();
  },
  offset: '50%'
})

    var waypointPause6 = new Waypoint({
  element: document.getElementById('player6'),
  handler: function(down) {
    var audioPause6 = document.getElementById('aud6')
    audioPause6.pause()
  },
  offset: '-20%'
})


window.addEventListener("scroll", debounce(onScroll, 500));
onScroll();



