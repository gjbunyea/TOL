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
        videoId: 'YAyjVtHm418',
        playerVars: { 'autoplay': 0, 'wmode': 'transparent', 'controls': 1, 'rel': 0, 'modestbranding': 1, 'showinfo': 0 },
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
    player.seekTo(0);
    player.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

var letPlayerChange = true;

function onPlayerStateChange(event) {
    if (letPlayerChange) {
        letPlayerChange = false
        var scene = getScene("scene1");
        run(scene)
    }
}