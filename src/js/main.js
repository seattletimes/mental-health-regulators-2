require("./animate-audio");
require("waypoints/lib/noframework.waypoints");

var xhr = require("./lib/xhr");
var $ = require("./lib/qsa");
var debounce = require("./lib/debounce");



window.onload = function(){
  document.getElementById('aud0').play();
  
}

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


    var waypointPlay0 = new Waypoint({
  element: document.getElementById('player0'),
  handler: function(down) {
    var audioPlay0 = document.getElementById('aud0')
    audioPlay0.play()
  },
  offset: '10%'
})



    var waypointPause0 = new Waypoint({
  element: document.getElementById('player0'),
  handler: function(down) {
    var audioPause0 = document.getElementById('aud0')
    audioPause0.pause()
  },
  offset: '-10%'
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
  offset: '-10%'
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
  offset: '-10%'
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
  offset: '-10%'
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
  offset: '-10%'
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
  offset: '-10%'
})

              var waypointPlay6 = new Waypoint({
  element: document.getElementById('player6'),
  handler: function(down) {
    var audioPlay6 = document.getElementById('aud6')
    audioPlay6.play()
  },
  offset: '50%'
})

    var waypointPause6 = new Waypoint({
  element: document.getElementById('player6'),
  handler: function(down) {
    var audioPause6 = document.getElementById('aud6')
    audioPause6.pause()
  },
  offset: '-10%'
})

var button0 = document.querySelector("#btn0");
    button0.addEventListener("click", player0);
    function player0() {
        var audio0 = document.querySelector("#aud0");
        audio0.play();
    };
    

window.addEventListener("scroll", debounce(onScroll, 500));
onScroll();





