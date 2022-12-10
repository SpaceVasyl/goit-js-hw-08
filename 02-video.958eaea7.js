const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",(function({seconds:e}){localStorage.setItem("videoplayer-current-time",JSON.stringify(e))})),t.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then((function(e){})).catch((function(e){e.name}));
//# sourceMappingURL=02-video.958eaea7.js.map
