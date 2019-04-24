import json
import pprint

with open('data/questions.json') as q:
    questions = json.load(q)

with open('data/answers.json') as a:
    answers = json.load(a)

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
    for result in questions:
        if(result["Question_id"] == id):
            return(result)

def getCorrectAnswers(id):
    results_list = []
    for result in answers:
        if(result["Question_id"] == id):
            results_list.append(result)
    for result in results_list:
        if(result["Student_score_on_question"] != 1):
            results_list.remove(result)
    return results_list

