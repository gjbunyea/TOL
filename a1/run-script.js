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

    $("#currQuestion").text("What do you think?")

    $("button").each(function (index) {

        $( this ).html(scene.buttonopts[index])
        $( this ).attr("onclick","nextScene(\"" + scene.nextsceneopts[index] + "\")")
    
    });

    $("#button-container").show("slow")
    setTimeout(function(){
        $("#player").hide(1000)
      }, 1000)

}