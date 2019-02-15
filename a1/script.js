// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        // height: '390',
        // width: '640',
        videoId: 'M7lc1UVf-VE',
        playerVars: {'autoplay': 0, 'wmode': 'transparent', 'fs': 0, 'controls':1, 'rel':0, 'modestbranding':1, 'showinfo':0},
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
        }
    });
    document.getElementById('player').style['z-index'] = -10;
    document.getElementById('player').style['-webkit-transform'] = 'translateZ(0)';
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}

var state = "start";
function nextVideo(input) {
    switch (state) {
        case "start":
            switch (input) {
                case "correct":
                    // state = 

                    break;
                case "incorrect":
                    // state = 
                    break;
            }
            break;
        case "path1":
            break;
        case "final":
            break;
    }


}
/*
function onYouTubePlayerAPIReady() { //https://stackoverflow.com/questions/11283871/pause-youtube-video-youtube-api
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: 'bpOR_HuHRNs',
    });
    document.getElementById('resume').onclick = function() {
        player.playVideo();
    };
    document.getElementById('pause').onclick = function() {
        player.pauseVideo();
    };
}