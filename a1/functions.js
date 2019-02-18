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

function pauseVideo() {
    player.pauseVideo();
}

function playVideo() {
    player.playVideo();
}

// scenes object fun

function getScene(getName) {
    return scenes.find(item => item.name === getName)
}

// questions object fun

function getQuestion(getName) {
    return questions.find(item => item.name === getName)
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
            .attr("onClick", "nextScene(\"" + b.whereTo + "\")")
            .appendTo("#buttonContainer");

        $("<img>", {
            src: b.image
        })
            .appendTo("#" + b.id)
    });
}