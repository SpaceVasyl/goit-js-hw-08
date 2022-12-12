import throttle from "lodash.throttle";
import player from "@vimeo/player";
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player('iframe');
const videoplayerCurrentTime = 'videoplayer-current-time'
player.on('timeupdate', function (event) {
  localStorage.setItem(videoplayerCurrentTime, event.seconds);
})

player.setCurrentTime(localStorage.getItem(cuurent));