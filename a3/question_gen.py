import json
import pprint
import random
from operator import itemgetter

pp = pprint.PrettyPrinter(indent=4)

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
            # if score=0, allow score=.25 or .5 or .75
            if(result["Student_score_on_question"] == score or 
                result["Student_score_on_question"] == score+.25 or 
                result["Student_score_on_question"] == score+.5 or 
                result["Student_score_on_question"] == score+.75):

                results_list.append(result)

    return results_list

def getAnswerText(answer):
    return answer["Answer_text"]

def getAnswerScore(answer):
    return answer["Student_score_on_question"]

def getTotalScore(answer):
    return answer["Average_quizzes_score"]

def getQuizScore(answer):
    return answer["Quiz_score"]

# Sort list by Quiz Score
def sortQuizScore(answer_list):
    score_list = sorted(answer_list, key=itemgetter("Quiz_score"), reverse=True) #https://stackoverflow.com/questions/72899/how-do-i-sort-a-list-of-dictionaries-by-a-value-of-the-dictionary
    return score_list

# Sort list by Total quiz score
def sortTotalScore(answer_list):
    totalscore_list = sorted(answer_list, key=itemgetter("Average_quizzes_score"), reverse=True) #https://stackoverflow.com/questions/72899/how-do-i-sort-a-list-of-dictionaries-by-a-value-of-the-dictionary
    return totalscore_list

# Find options with best score, best overall score, use as for random pool of good answers & feedback
def getGoodOptions(answer_list):
    best_options = sortQuizScore(answer_list)

    # always cut off the weaker correct answers
    x = len(best_options)
    y = int(x * .8)

    best_options = sortTotalScore(best_options[0:y])

    x = len(best_options)
    y = int(x * .8)

    return best_options[0:y]

# Pick random option and remove from the list
def pickRandom(answer_list):
    l = len(answer_list)
    r = random.randint(0, l-1)
    
    chosen = answer_list[r]
    answer_list.remove(chosen)
    # Need to return the list that has the option removed, and the option itself.
    return answer_list, chosen 

def makeButtonsList(good_opts, bad_opts, ques_num):

    options = []
    
    # Get one of the good answers to use
    good_opts, good_ans = pickRandom(good_opts)
    options.append(good_ans)

    # Get 3 random bad answers
    for i in range(0,3):
        bad_opts, bad_ans = pickRandom(bad_opts)
        options.append(bad_ans)

    random.shuffle(options)

    buttons = []
    i = 1

    for option in options:

        good_opts, feedback = pickRandom(good_opts)
        whereTo = ''

        if(getAnswerScore(option) == 1): #correct answer, move on next
            whereTo = 'ques' + str(ques_num + 1)
        else:
            whereTo = 'ques' + str(ques_num)
 
        button = {
            # "id": STRING of BUTTON ID,
            "id": "b" + str(i),

            # "description": STRING of ANSWER TEXT,
            "desc": getAnswerText(option),

            # "answer": BOOL of CORRECTNESS,
            "answer": getAnswerScore(option),

            # "feedback": STRING of WHY CORRECT (or not),
            "feedback": getAnswerText(feedback),

            # "whereTo": STRING of WHAT HAPPENS AFTER an ANSWER
            "whereTo": whereTo
        }

        buttons.append(button)
        i+=1

    return buttons
   


# Do that twice, so there are 10 attempts for each question, because there is low likelyhood of needing 10 tries before entering learned state
# id - question 
# ---------------
# q1 - question 1
# q2 - question 1
# q3 - question 2
# q4 - question 2


def buildQuizObject(ques_num):

    # set question
    ques = getQuestion(ques_num)
    ques_text = getQuestionText(ques)

    # answer lists
    good_answers = getAnswers(ques_num, 1)
    bad_answers = getAnswers(ques_num, 0)

    # Get the top batch of good answers for options and feedback, but use the entire pool of random answers
    good_options = getGoodOptions(good_answers)

    # bad_options = []
    # for i in range(0,10):
    #     bad_options.append(pickRandom(bad_answers))

    quiz = {
        "name": "ques" + str(ques_num),
        "text": ques_text
    }

    buttons = makeButtonsList(good_options, bad_answers, ques_num)
    quiz['buttons'] = buttons
    return quiz


def quizMaker(q_amount, try_amount):
    questions = []
    
    count = 1
    try_attempt = 0
    for i in range(0, q_amount*try_amount): # 10 tries for each question
        if count > q_amount:
            break

        quiz = buildQuizObject(count)
        
        try_attempt += 1
        quiz["try_attempt"] = try_attempt
        
        questions.append(quiz)

        if(try_attempt >= 10):
            count += 1
            try_attempt = 0
    
    # pp.pprint(questions)
    return questions



# make a quiz fo-real

# could prompt for these things on run...
question_amount = 4 
try_amount = 10

q = quizMaker(question_amount, try_amount)

with open('test_object.json', 'w') as outfile: # NEED to add 'question = []' at the beginning of the file
    json.dump(q, outfile)