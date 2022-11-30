const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
console.log(iframe);
    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    const onPlay = function(data) {
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);

player.getCurrentTime().then(function(seconds) {
    // seconds = the current playback position
}).catch(function(error) {
    // an error occurred
});
