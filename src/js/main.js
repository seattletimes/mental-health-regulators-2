require("./animate-audio");
require("waypoints/lib/noframework.waypoints");

var xhr = require("./lib/xhr");
var $ = require("./lib/qsa");


    var waypoint = new Waypoint({
  element: document.getElementById('player0'),
  handler: function(direction) {
    var audio = document.getElementById('aud0')
    audio.play()
  },
  offset: '20%'
})

    var waypoint = new Waypoint({
  element: document.getElementById('player0'),
  handler: function(down) {
    var audio = document.getElementById('aud0')
    audio.pause()
  },
  offset: '0%'
})

        var waypoint = new Waypoint({
  element: document.getElementById('player1'),
  handler: function(down) {
    var audio = document.getElementById('aud1')
    audio.play()
  },
  offset: '50%'
})

    var waypoint = new Waypoint({
  element: document.getElementById('player1'),
  handler: function(down) {
    var audio = document.getElementById('aud1')
    audio.pause()
  },
  offset: '0%'
})

          var waypoint = new Waypoint({
  element: document.getElementById('player2'),
  handler: function(down) {
    var audio = document.getElementById('aud2')
    audio.play()
  },
  offset: '50%'
})

    var waypoint = new Waypoint({
  element: document.getElementById('player2'),
  handler: function(down) {
    var audio = document.getElementById('aud2')
    audio.pause()
  },
  offset: '0%'
})

              var waypoint = new Waypoint({
  element: document.getElementById('player3'),
  handler: function(down) {
    var audio = document.getElementById('aud3')
    audio.play()
  },
  offset: '50%'
})

    var waypoint = new Waypoint({
  element: document.getElementById('player3'),
  handler: function(down) {
    var audio = document.getElementById('aud3')
    audio.pause()
  },
  offset: '0%'
})

              var waypoint = new Waypoint({
  element: document.getElementById('player4'),
  handler: function(down) {
    var audio = document.getElementById('aud4')
    audio.play()
  },
  offset: '50%'
})

    var waypoint = new Waypoint({
  element: document.getElementById('player4'),
  handler: function(down) {
    var audio = document.getElementById('aud4')
    audio.pause()
  },
  offset: '0%'
})

              var waypoint = new Waypoint({
  element: document.getElementById('player5'),
  handler: function(down) {
    var audio = document.getElementById('aud5')
    audio.play()
  },
  offset: '50%'
})

    var waypoint = new Waypoint({
  element: document.getElementById('player5'),
  handler: function(down) {
    var audio = document.getElementById('aud5')
    audio.pause()
  },
  offset: '0%'
})

              var waypoint = new Waypoint({
  element: document.getElementById('player6'),
  handler: function(down) {
    var audio = document.getElementById('aud6')
    audio.play()
  },
  offset: '50%'
})

    var waypoint = new Waypoint({
  element: document.getElementById('player6'),
  handler: function(down) {
    var audio = document.getElementById('aud6')
    audio.pause()
  },
  offset: '0%'
})

var button0 = document.querySelector("#btn0");
    button0.addEventListener("click", player0);
    function player0() {
        var audio0 = document.querySelector("#aud0");
        audio0.play();
    };
    var button1 = document.querySelector("#btn1");
    button1.addEventListener("click", player1);
    function player1() {
        var audio1 = document.querySelector("#aud1");
        audio1.play();
    };

window.addEventListener("scroll", debounce(onScroll, 500));
onScroll();





