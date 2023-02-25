import Player from '@vimeo/player';
const player = new Player('vimeo-player');
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const throttle = require('lodash.throttle');

updateCurrentTimeOfVideo();
player.on('timeupdate', throttle(getCurrentTimeOfVideo, 1000));

function getCurrentTimeOfVideo({ seconds }) {
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
}
function updateCurrentTimeOfVideo() {
  player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
}
