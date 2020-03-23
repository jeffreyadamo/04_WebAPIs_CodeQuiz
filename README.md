# 04_WebAPIs_CodeQuiz
Week 4's Homework: CodeQuiz (due 3/28/2020)

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

The following animation demonstrates the application functionality:

![code quiz](./Assets/04-web-apis-homework-demo.gif)

## Pseudocoding (3/23/2020)


GIVEN I am taking a code quiz

1a) WHEN I click the start button

* *Create index.html, style.css, script.js*
* *Use bootstrap to find a button style*

1b) THEN a timer starts and I am presented with a question

* *Create a timer using setInterval() function in script.js*
* *Create var = timeRemaining set for 60s: var timeRemaining = 60*
* *Need to insert a question:*
    * *Create function questions() that will insertHTML of a question and list multiple answers. Will need to cycle through questions, so maybe create an array of question strings and an array of answers (which may need to be an array of arrays)*
    
2a) WHEN I answer a question
   * *Use listen for click function. Make sure event is only for selected button. Review "target" and the prohibited features*

2b) THEN I am presented with another question

*   *Could use onclick or listen for, start to cycle through array of question[1], question[2], etc...*

3a) WHEN I answer a question incorrectly

3b) THEN time is subtracted from the clock

* *Use an if, else statement here. Maybe something like:* 
    
    if (click !== "correct answer"*) {
        timeRemaining = timeRemaining -10000; } else {question[i++]}
        
4a) WHEN all questions are answered or the timer reaches 0
4b) THEN the game is over

* *Use an if statement for questions*

        if (question[] = question[question.length] || timeRemaining = 0) {
            1) Run function "endGame" which will show score, which is a sum of correct answers. So I need to create a score variable and some if statements in the question function for correct answers
        }

5a) WHEN the game is over
5b) THEN I can save my initials and score

    Create a function that uses API to store local info for initials and score. Use setinfo and getinfo.
    
```

