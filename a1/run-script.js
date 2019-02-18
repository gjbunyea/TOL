$(document).ready(function () {
    $("#button-container").hide();
});

function run(currentScene) {
    console.log(currentScene.name + "SCENE BEGUN")
    setTimeout(sceneOver, currentScene.timespan, currentScene)
}

function sceneOver(scene) {
    console.log(scene.name + "SCENE OVER")

    pauseVideo()

    var nextQ = getQuestion( scene.nextQ )

    makeQuestion( nextQ )    

    // $("#questionContainer").show("slow")
    setTimeout(function(){
        $("#player").hide(1000)
      }, 1000)

}

function nextScene(name){
    var next = getScene(name)

    player.seekTo(next.begin, true)
    $("#questionContainer").hide(1000)
    $("#player").show(1000)
    player.playVideo()
    run(next)
    // call run with scene
}