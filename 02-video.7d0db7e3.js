!function(){var e=document.querySelector("iframe"),n=new Vimeo.Player(e);console.log(e),n.on("play",(function(){console.log("played the video!")})),n.getVideoTitle().then((function(e){console.log("title:",e)}));n.on("play",(function(e){})),n.getCurrentTime().then((function(e){})).catch((function(e){}))}();
//# sourceMappingURL=02-video.7d0db7e3.js.map
