!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",(function(e){var t=e.seconds;localStorage.setItem("videoplayer-current-time",JSON.stringify(t))})),t.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then((function(e){})).catch((function(e){e.name}))}();
//# sourceMappingURL=02-video.a4ed5458.js.map
