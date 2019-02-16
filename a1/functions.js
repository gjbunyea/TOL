// Disable and Enable any element
// https://stackoverflow.com/questions/625109/jquery-script-load-timing/625126#625126

$.fn.disable = function () {
    return this.each(function () {
        if (typeof this.disabled != "undefined") this.disabled = true;
    });
} // https://stackoverflow.com/questions/625109/jquery-script-load-timing/625126#625126

$.fn.enable = function () {
    return this.each(function () {
        if (typeof this.disabled != "undefined") this.disabled = false;
    });
} 

// Youtube API stuff

function stopVideo() {
    player.stopVideo();
}

function pauseVideo(){
    player.pauseVideo();
}

function playVideo(){
    player.playVideo();
}

// scenes object fun

function getScene(getName){
    return scenes.find(item => item.name === getName)
}