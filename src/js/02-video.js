const iframe = document.querySelector('iframe');
      const player = new Vimeo.Player(iframe);

player.on('timeupdate', function (seconds) {
    
        console.log(seconds);
      });

      

      player.getCurrentTime().then(function(seconds) {
}).catch(function(error) {
});

player.getCuePoints().then(function(cuePoints) {
    // cuePoints = an array of cue point objects
}).catch(function(error) {
    switch (error.name) {
        case 'UnsupportedError':
            // cue points are not supported with the current player or browser
            break;

        default: "videoplayer-current-time"
            // some other error occurred 
            break;
    }
    console.log(error);
});