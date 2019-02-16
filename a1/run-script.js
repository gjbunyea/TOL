$(document).ready(function () {
    $("#button-container").hide();
});

function run(playerStatus, state){
    currentScene = getScene(state);
    console.log(currentScene.name)
    setTimeout(pauseVideo, currentScene.timespan)
 }

