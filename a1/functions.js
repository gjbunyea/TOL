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
            .attr("onClick", "giveFeedback(\"" + b.answer+ "\",\""+b.feedback + "\",\"" + b.whereTo+ "\")")
            .appendTo("#buttonContainer")

        $("<img>", {
            src: b.image
        })
            .appendTo("#" + b.id)
    });
}

function giveFeedback(cor, words, whereTo){
    console.log("feedback time!")
    console.log(""+cor +" "+ words+" "+whereTo)
    $("#questionContainer").hide("slow")
    
    if(cor == 'true'){

        $("<h1/>", {
            text: "Correct!",
        })
        .css('background-color', '#99ff99')
        .appendTo("#feedbackContainer")
        
    } else {

        $("<h1/>", {
            text: "That's not correct...",
        })
        .css('background-color', '#ff6699')
        .appendTo("#feedbackContainer")
    }


    $("<p/>", {
        text: words
    }).appendTo("#feedbackContainer")

    $("<button/>", {
        text: "Continue",
    })
    .attr("onClick", "clearFeedback(\"" + whereTo + "\")")
    .appendTo("#feedbackContainer")

    console.log("okokok")

    // $("#feedbackContainer").show("slow")
}

function clearFeedback(whereTo){

    console.log("what the fuck")

    // $("#feedbackContainer").hide()
    $("#feedbackContainer").empty()

    nextScene(whereTo)
}