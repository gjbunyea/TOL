import json
import pprint

with open('data/questions.json') as q:
    _questions = json.load(q)

with open('data/answers.json') as a:
    _answers = json.load(a)

# Desired Output
# {
#         "name": STRING of QUESTION ID,
#         "text": STRING of QUESTION WORDS,
#         "buttons": [
#             {
#                 "id": STRING of BUTTON ID,
#                 "description": STRING of ANSWER TEXT,
#                 "answer": BOOL of CORRECTNESS,
#                 "feedback": STRING of WHY CORRECT (or not),
#                 "whereTo": STRING of WHAT HAPPENS AFTER an ANSWER
#             }
#         ]
# }

def getQuestion(id):
    for result in _questions:
        if(result["Question_id"] == id):
            return(result)

def getQuestionText(question):
    return question["Question_text"]

def getAnswers(id, score): # id: <int> question #, score: <int> score of answer 
    results_list = []
    for result in _answers:
        if(result["Question_id"] == id):
            if(result["Student_score_on_question"] == score):
                results_list.append(result)
    return results_list

def getAnswerText(answer):
    return answer["Answer_text"]

def getAnswerScore(answer):
    return answer["Student_score_on_question"]

def makeButtonsList(opts):
    buttons = []
    i = 1
    for option in opts:
        button = {
            # "id": STRING of BUTTON ID,
            "id": "b" + str(i),

            # "description": STRING of ANSWER TEXT,
            "desc": getAnswerText(option),

            # "answer": BOOL of CORRECTNESS,
            "answer": getAnswerScore(option),

            # "feedback": STRING of WHY CORRECT (or not),
            "feedback": "",

            # "whereTo": STRING of WHAT HAPPENS AFTER an ANSWER
            "whereTo": ""
        }

        buttons.append(button)
        i+=1

    return buttons

def buildQuizObject():

    # set question
    ques = getQuestion(1)
    ques_text = getQuestionText(ques)

    # answer lists
    good_ans = getAnswers(1, 1)
    bad_ans = getAnswers(1, 0)

    # question options
    opts = [ good_ans[1], bad_ans[1], bad_ans[2], bad_ans[3] ]

    quiz1 = {
        "name": "ques1",
        "text": ques_text
    }

    buttons = makeButtonsList(opts)
    quiz1['buttons'] = buttons
    return quiz1
   
_quiz = buildQuizObject()
with open ('test_object.json', 'w') as outfile:
    json.dump(_quiz, outfile)