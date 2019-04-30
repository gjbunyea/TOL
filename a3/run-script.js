$(document).ready(function () {
    $("#button-container").hide();
    q = getQuestion("ques1")
    makeQuestion(q)
});

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
            text: b.desc,
        })
            .attr("onClick", "giveFeedback(\"" + b.answer + "\",\"" + b.feedback + "\",\"" + b.whereTo + "\")")
            .appendTo("#buttonContainer")
    });
}

function giveFeedback(cor, words, whereTo) {

    $("#questionContainer").hide()

    if (cor == 1) { //  1 is correct, 0 is incorrect

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
}