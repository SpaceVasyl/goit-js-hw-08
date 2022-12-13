import throttle from "lodash.throttle";
import Player from "@vimeo/player";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentVideoTime = 'videoplayer-current-time';
player.on('timeupdate', throttle(function (event) {
  localStorage.setItem(currentVideoTime, event.seconds);
}, 1000 ))


player.setCurrentTime(localStorage.getItem(currentVideoTime)|| 0);