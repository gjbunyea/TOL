$(document).ready(function () {
    $("#button-container").hide();
    var scene = getScene("ques1");
    run(scene)
});

function run(currentScene) {
    setTimeout(sceneOver, currentScene.timespan, currentScene)
}

function sceneOver(scene) {

    pauseVideo()

    var nextQ = getQuestion(scene.nextQ)

    if (nextQ.name == "ques3" && q2flag == true) {    
        makeQuestion(getQuestion("ques2"))
    } else {
        makeQuestion(nextQ)
    }
    // $("#questionContainer").show("slow")
}

function nextScene(name) {

    if (name.startsWith("ques")) {

        if (name == "ques3" && q2flag == true) {
        
            makeQuestion(getQuestion("ques2"))
        
        } else {
            var nextQ = getQuestion(name)
            makeQuestion(nextQ)
        }

    } else {

            var next = getScene(name)

            $("#questionContainer").hide(1000)
            run(next)

        
    }
}

function makeQuestion(question) {

    $("#currQuestion").text(question.text)

    makeButtons(question.buttons)

    $("#questionContainer").show("slow")

}

function makeButtons(buttons) {
    $("#buttonContainer").empty()

    buttons.forEach(b => {
        $("<button/>", {
            id: b.id,
            text: b.description,
        })
            .attr("onClick", "giveFeedback(\"" + b.answer + "\",\"" + b.feedback + "\",\"" + b.whereTo + "\")")
            .appendTo("#buttonContainer")

        if (b.image != "") {
            $("<img>", { src: b.image }).appendTo("#" + b.id)
        }
    });
}

function giveFeedback(cor, words, whereTo) {

    if(words.endsWith("again soon.")){
        q2flag = true
    }
    if (q2flag && words.endsWith("difference is.")){
        whereTo = "ques3"
        q2flag = false
    }

    $("#questionContainer").hide()

    if (cor == 'true') {

        $("<h1/>", { text: "Correct!" })
            .css('background-color', '#99ff99')
            .appendTo("#feedbackContainer")

    } else {

        $("<h1/>", { text: "That's not correct..." })
            .css('background-color', '#ff6699')
            .appendTo("#feedbackContainer")
    }

    $("<p/>", { text: words }).appendTo("#feedbackContainer")

    $("<button/>", { text: "Continue" })
        .attr("onClick", "clearFeedback(\"" + whereTo + "\")")
        .appendTo("#feedbackContainer")
}

function clearFeedback(whereTo) {

    $("#feedbackContainer").empty()

    nextScene(whereTo)
}