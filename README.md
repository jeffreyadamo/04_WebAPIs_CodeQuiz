# 04_WebAPIs_CodeQuiz
Week 4's Homework: CodeQuiz (due 3/28/2020)

# Link to CodeQuiz website:
[https://jeffreyadamo.github.io/04_WebAPIs_CodeQuiz/index.html](https://jeffreyadamo.github.io/04_WebAPIs_CodeQuiz/index.html)


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
    

# What Actually Happened...

It went well for a while...

## HTML:
 I recreated the HTML very simply. There is a header with a link directing to "View High Scores" and a Timer. We've got a nice landing page with a button directing the user to Start Quiz. I've created some empty div elements that will be populated by the JS.

 ## CSS: 
 Very boring. Basically, just making sure things are nice and centered, but the text is aligned left when the questions start. 

 ## JavaScript:

 Variables are set at the beginning when possible. I used querySelector when possible to not confuse myself unnecessarily. The most exciting one here is "questionsArray" array. I was able to consolidate this to include "questions", "answers", and "correctOption" as objects to reference later.

 There are prolific notes when possible. I had issues, so this was a coping mechanism for me to try and isolate bugs and reexamine what did what.

## Functions:

### startQuiz(): 
uses addEventListener on the Start Quiz button to initialize the quiz. Leads to next functions:

### timer(): 
uses setInterval to begin the the timer with a countdown using "timerRemaining--". Makes sure to not run negative with "clearInterval" and then displays the user if time is up.

### insertQuestion(): 
uses "questionsArray" to innerHTML the container with questions using "questionsArray[index].question". I used a for loop to innerHTML the questions. Use of [index] determines which set of questions and answers populate.

## I had a HUGE bug that took a day and a half and 2 tutor sessions to repair:

I had insertQuestions() direct to another function correctAnswers() which held a "addEventListener" method that goes through the process of determining which button is the right answer. It resulted in a doubling back to insertQuestions(), so every click went from index = 1,2,4.... It was not awesome. This was finally corrected by throwing the event handler outside of any function so it didn't cycle back and forth. 
### Unfortunately, this took away from a lot of my ability to spend time on the rest of the STORAGE HANDLING parts, so they're kind of a mess.

In the event handler for the answers, I used if/else statements to determine if the button selected (using event.target.textContent) was equal to the questionsArray[index].correctOption property. A 10 second penalty is assigned if incorrect.

The index is then then bumped up using index++ and if less than questionsArray.length, directed back to insertQuestion(), otherwise we direct the user to enterScore()


### enterScore()

uses innerHTML to write over the questions and answers. It utilizes a Bootstrap form which is a bunch of poorly formatted HTML defined at the bottom to get that mess out of the way. 

I used another event handler (more and more annoying, jQuery please!). Getting the local storage bit was tricky for me (running out of time!). I need to review this part more and will clean it up when I have more time.

I had to create a number of variables to hold the score and user information. I used "storedScores" as an array and pushed them to Local Storage once it was defined using and if statment with !==null. I also used a for loop to push the userScore to "readytoSave". 

I'd like more time to clean this aspect up. 

## function viewScore() is incomplete

After the end of the quiz, the user is able to enter their initials, which the "Submit" button changes the innerHTML of the container to a "High Scores" header and will list out the saved scores using a for loop draving from "readyToSave. 

Items needing repair:
* List needs formatting
* Clear button does not work - tried assigning it to "localStorage.clear();", but to no avail
* Submit form and button from previous funciton still present - hell breaks loose when you click that thing
* no reset present
* On the opening page, when click "View High Scores" it is directed to go to the function viewScores(), but only the h2 tag text shows up. No scores? 









