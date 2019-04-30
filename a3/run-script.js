


// function setQuestions() {
//     $.ajax({ url: 'test_object.json', method: "GET" })
//         .success(function (response) {
//             questions = $.parseJSON(response);
//         });


//     // var request = new XMLHttpRequest();
//     // request.open("GET","./tests_object.json", false);
//     // request.send(null);
//     // questions = JSON.parse(request.responseText);
// }

var currQ

$(document).ready(function () {

    questions = JSON.parse(JSON.stringify(questions)) // make sure questionis is read as JSON

    $("#button-container").hide();
    
    getQuestion("ques1", 1)

    makeQuestion()
});


function getQuestion(getName, trynum) {

    possibleQs = questions.filter(item => item.name === getName) // https://codeburst.io/useful-javascript-array-and-object-methods-6c7971d93230

    currQ = possibleQs.find(item => item.try_attempt === trynum)

}

function makeQuestion() {

    $("#currQuestion").text(currQ["text"])

    makeButtons()

    $("#questionContainer").show("slow")

}

function makeButtons() {
    $("#buttonContainer").empty()

    currQ.buttons.forEach(b => {
        $("<button/>", {
            id: b.id,
            text: b.desc,
        })
            .attr("onClick", "giveFeedback(\"" + b.answer + "\",\"" + b.feedback + "\",\"" + b.whereTo + "\",\"" + currQ.try_attempt + "\")")
            .appendTo("#buttonContainer")
    });
}

function giveFeedback(cor, words, whereTo, trynum) {

    $("#questionContainer").hide()

    if (cor == 1) { //  1 is correct, 0 is incorrect

        $("<h1/>", { text: "Correct!" })
            .css('background-color', '#99ff99')
            .appendTo("#feedbackContainer")

        $("<p/>", { text: words }).appendTo("#feedbackContainer")

        trynum = 1


    } else {

        $("<h1/>", { text: "That's not correct..." })
            .css('background-color', '#ff6699')
            .appendTo("#feedbackContainer")

        $("<p/>", { text: words }).appendTo("#feedbackContainer")

        // if last try, go to the next number no matter what
        if(trynum == 10) {
            $("<p/>", "You have no more attempts of this question").appendTo("#feedbackContainer")
            num = int(whereTo.slice(4))
            whereTo = "ques" + num + 1
        }
        trynum++
    }  

    $("<button/>", { text: "Continue" })
        .attr("onClick", "clearFeedbackAndMoveOn(\"" + whereTo + "\",\"" + trynum  + "\")")
        .appendTo("#feedbackContainer")
}

function clearFeedbackAndMoveOn(_whereTo, trynum) {

    $("#feedbackContainer").empty()
    
    getQuestion(_whereTo, parseInt(trynum))

    makeQuestion()
}