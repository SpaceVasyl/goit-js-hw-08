const e=document.querySelector("iframe"),o=new Vimeo.Player(e);console.log(e),o.on("play",(function(){console.log("played the video!")})),o.getVideoTitle().then((function(e){console.log("title:",e)}));o.on("play",(function(e){})),o.getCurrentTime().then((function(e){})).catch((function(e){}));
//# sourceMappingURL=02-video.0c83545e.js.map
