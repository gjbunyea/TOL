let scenes = [
    { 
        "name": "scene1",
        "begin": 0*60, //must be seconds
        "timespan": 3000, //must be milliseconds
        "nextQ": "ques1" 
       
    },
    { 
        "name": "scene2",
        "begin": 1*60, //must be seconds
        "timespan": 5000, //must be milliseconds
        "nextQ": "ques2"
    },
    { 
        "name": "scene3",
        "begin": 2*60, //must be seconds
        "timespan": 5000, //must be milliseconds
        "nextQ": "ques3"
    },
    { 
        "name": "scene4",
        "begin": 2.5*60, //must be seconds
        "timespan": 5000, //must be milliseconds
        "nextQ": ""
    }
]

let questions = [
    {
        "name": "ques1",
        "text": "Make a visual of how a steel rod sharpens a kinfe. Which of the following does your answer most resemble?",
        "buttons":[
            {
                "id": "b1",
                "image": "assets/round-to-point.png",
                "description": "s",
                "answer": "incorrect",
                "feedback": "",
                "whereTo": "scene2"
            },{
                "id": "b2",
                "image": "assets/curve-to-point.png",
                "description": "s",
                "answer": "correct",
                "feedback": "That's correct!",
                "whereTo": "scene2"
            },{
                "id": "b3",
                "image": "assets/curve-to-point.png",
                "description": "s",
                "answer": "correct",
                "feedback": "That's correct!",
                "whereTo": "scene2"
            },{
                "id": "b4",
                "image": "assets/curve-to-point.png",
                "description": "s",
                "answer": "correct",
                "feedback": "That's correct!",
                "whereTo": "scene2"
            }
        ]
    }
]