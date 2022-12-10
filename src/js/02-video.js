const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', function ({ seconds }) {
  localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
  // console.log(theme);
});
      
player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});