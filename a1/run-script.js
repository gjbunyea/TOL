$(document).ready(function () {
    $("#button-container").hide();
});

function run(playerStatus, state) {
    currentScene = getScene(state)
    // console.log(currentScene.name)
    setTimeout(sceneOver, currentScene.timespan, currentScene)
}

function sceneOver(scene) {
    console.log(scene.name)

    pauseVideo()

    $("button").each(function (index) {
        // console.log()
        $( this ).html(scene.buttonopts[index])
    });

    $("#button-container").show("slow")
}