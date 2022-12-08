const iframe = document.querySelector('iframe');
      const player = new Vimeo.Player(iframe);

player.on('timeupdate', function ({ seconds }) {
        console.log(seconds);
      });

