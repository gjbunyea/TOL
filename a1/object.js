let scenes = [
    {
        "name": "scene1",
        "begin": 0, //must be seconds
        // "timespan": 3000,
        "timespan": 45000, //must be milliseconds
        "nextQ": "ques1"

    },
    {
        "name": "scene2",
        "begin": 47, //must be seconds
        // "timespan": 3000,
        "timespan": 74000, //must be milliseconds
        "nextQ": "ques2"
    },
    {
        "name": "scene3",
        "begin": 123, //must be seconds
        // "timespan": 3000,
        "timespan": 31000, //must be milliseconds
        "nextQ": "ques3"
    },
    {
        "name": "scene4",
        "begin": 154, //must be seconds
        // "timespan": 3000,
        "timespan": 39000, //must be milliseconds
        "nextQ": ""
    }
]

let questions = [
    {
        "name": "ques1",
        "text": "Make a visual of how a steel rod sharpens a kinfe. Which of the following does your answer most resemble?",
        "buttons": [
            {
                "id": "b1",
                "image": "assets/round-to-point.png",
                "description": "round tip made pointy",
                "answer": false,
                "feedback": "It seems you have a misconception that many people have, continue watching the video to learn more!",
                "whereTo": "scene2"
            }, {
                "id": "b2",
                "image": "assets/curve-to-point.png",
                "description": "bent tip straightened",
                "answer": true,
                "feedback": "Correct!",
                "whereTo": "ques4"
            }, {
                "id": "b3",
                "image": "assets/round-to-shorterpoint.png",
                "description": "round tip had sides removed to make point",
                "answer": false,
                "feedback": "It seems you have a misconception that many people have, continue watching the video to learn more!",
                "whereTo": "scene2"
            }, {
                "id": "b4",
                "image": "assets/point-to-round.png",
                "description": "pointed tip has been rounded off",
                "answer": false,
                "feedback": "Incorrect, this would mean the knife has gotten more dull",
                "whereTo": "ques1"
            }
        ]
    }, {
        "name": "ques2",
        "text": "Based on these new pieces of information, do you think there is a difference between how the sharpening tool and sharpening steel works?",
        "buttons": [
            {
                "id": "b1",
                "image": "",
                "description": "Yes",
                "answer": true,
                "feedback": "Great job, lets now see what that difference is",
                "whereTo": "scene3"
            }, {
                "id": "b2",
                "image": "",
                "description": "No",
                "answer": false,
                "feedback": "That’s not quite right, but keep watching to learn why. We’ll return to this question again soon",
                "whereTo": "scene3"
            }
        ]
    }, {
        "name": "ques3",
        "text": "Now that you know that the sharpening steel uses a different technique from the sharpening tool, which visual shows the mechanism of how using the steel sharpens the knife?",
        "buttons": [ //same answers from q1, different order
            {
                "id": "b1",
                "image": "assets/point-to-round.png",
                "description": "pointed tip has been rounded off",
                "answer": false,
                "feedback": "Incorrect, this would mean the knife has gotten more dull",
                "whereTo": "ques3"
            },{
                "id": "b2",
                "image": "assets/round-to-shorterpoint.png",
                "description": "round tip had sides removed to make point",
                "answer": false,
                "feedback": "It seems you have a misconception that many people have, continue watching the video to learn more!",
                "whereTo": "scene3"
            },{
                "id": "b3",
                "image": "assets/round-to-point.png",
                "description": "round tip made pointy",
                "answer": false,
                "feedback": "It seems you have a misconception that many people have, continue watching the video to learn more!",
                "whereTo": "scene3"
            },{
                "id": "b4",
                "image": "assets/curve-to-point.png",
                "description": "bent tip straightened",
                "answer": true,
                "feedback": "Correct!",
                "whereTo": "ques4"
            }
        ]
    }, {
        "name": "ques4",
        "text": "In this case, what’s the most effective way to make the knife sharp again?",
        "buttons": [
            {
                "id": "b1",
                "image": "",
                "description": "Grind the edge off and make a new sharp edge",
                "answer": false,
                "feedback": "That’s not quite right, but keep watching to learn why. We’ll return to this question again soon",
                "whereTo": "scene4"
            }, {
                "id": "b2",
                "image": "",
                "description": "Realign the blade so the sharp edge is pointing down again",
                "answer": true,
                "feedback": "Correct!",
                "whereTo": "scene4"
            }, {
                "id": "b3",
                "image": "",
                "description": "Figure out the new angle to hold the knife at so the sharp edge will be doing the cutting",
                "answer": false,
                "feedback": "No, this would mean you are going to constantly adjust your cutting angle as you use the knife, there’s a more efficient way.",
                "whereTo": "ques4"
            }
        ]
    }
]