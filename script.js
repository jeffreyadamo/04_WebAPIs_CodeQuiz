// Set a few variables to begin
var start = document.querySelector(".btn-lg");
var timerEl = document.querySelector(".timer");
var timeRemaining = 60;
var timerStart;
var container = document.querySelector(".container");
var buttons = document.querySelector(".buttons");
var submit = document.querySelector(".submit");
var index=0;
var score = 0;
var navEl = document.querySelector(".goAway");
localStorage.setItem("score", score);

// Set an array as a variable that includes questions, answers, and correct answers:
var questionsArray = [
    {
        question: "Question 1: Commonly used data types DO NOT include:",
        answers:
           [ "1. strings",
            "2. booleans",
            "3. alerts", //correct
            "4. numbers"],
        correctOption: "3. alerts"
    },
    {
        question: "Question 2: The condition of an if / else statement is enclosed within ________",
        answers:
          [ "1. quotes",
           "2. curly brackets",
           "3. parentheses", //correct
           "4. square brackets"]
        ,
        correctOption: "3. parentheses"
    },
    {
        question: "Question 3: Arrays in JavaScript can be used to store ________",
        answers:
          [ "1. numbers and strings",
          "2. other arrays",
          "3. booleans",
          "4. all of the above"] //correct
        ,
        correctOption: "4. all of the above"
    },
    {
        question: "Question 4: String values must be enclosed within ________ when being assigned to variables.",
        answers:
          [ "1. commas",
          "2. curly brackets",
          "3. quotes",
          "4. parentheses"] //correct
        ,
        correctOption: "4. parentheses"
    },
    {
        question: "Question 5: A very useful tool used during development and debugging for printing content to the debugger is:",
        answers:
          [ "1. JavaScript",
          "2. terminal/bash",
          "3. for loops", //correct
          "4. console.log"]
        ,
        correctOption: "3. for loops"
    }
]

// Make sure things are talking:
console.log("Connected: not broken yet.");
console.log("Starting index is " + index);
console.log("-------------");

// Using addEventListener on "Start Quiz" button to start the timer:
function startQuiz () {
    start.addEventListener("click", function(event) {  
         //prevent the button from functioning after timer begins
        if(timeRemaining < 60) {
            event.preventDefault();}
       
        else {
         timerEl.textContent = "Time: " + timeRemaining; //Change text of button to 
         console.log("Timer started; Time remaining: " + timeRemaining); //keep track of where we are at
         timer(); //start function timer() which will countdown from timeRemaining
         insertQuestion(); //insert questions starting at q1
        }  
    });
} 

// Use function timer() to countdown from timeRemaining:
function timer() {
    var timerInterval = setInterval(function() {
      timeRemaining--;
      timerEl.textContent = "Time: " + timeRemaining;
       // Stop the timer once it reaches 0 and send a message.//
      if(timeRemaining <= 0) {
        clearInterval(timerInterval); 
        timerEl.textContent = "Time's up!";
        enterScore();
        }
    }, 1000); 
}

//Now I need to prompt the user with a question.
function insertQuestion() {
    console.log("still working, insert question now"); //spot check to see if broken
    console.log("Current index is " + index);

    // Use innerHTML to replace the contents of the container with a question. We want to use a different size font, so use a <h2> tag
    // Access the first question in questionsArray using [index] which starts as [0]. We will index++ after each question cycle.
    container.innerHTML = "<h2>" +questionsArray[index].question +"</h2>";
    container.style.textAlign = "left";

    console.log("Array length for answers is still:" + questionsArray[index].answers.length);    

    // Create a for loop to populate the "buttons" <div> defined in the HTML with a button
    for (var j = 0; j < questionsArray[index].answers.length; j++) {
        var newDiv = document.createElement("div");
        //new div created will have 2 classes, "answer[#]" and a style class = "questionStyle"//
        newDiv.className =  "answer" + [j] + " questionStyle"; 
        // Use innerHTML to insert a Bootstrap button pulling the text from the "questionsArray" listing the possible answers
        newDiv.innerHTML = "<button type='button' class='btn btn-primary'>" + questionsArray[index].answers[j] +"</button>";
        buttons.appendChild(newDiv);
    };
    
    console.log("index after for loop is" + index);
    console.log("questionsArray.length is" + questionsArray.length);


    // only insert questions until questionsArray is complete.
    if (index < questionsArray.length) {
        correctAnswer();
    // once all the answers are complete, we need to enter our score.
    } else if (index = questionsArray.length) {
        alert("game over");
        enterScore;
    }
}
//Okay, now I have the first question. The next parts required are to 1) listen for the correct button answer 2) store the score 3) loop through series of questions 4)//

function correctAnswer() {
    buttons.addEventListener("click", function(event){
        console.log(event.target.textContent);

        if (event.target.textContent === questionsArray[index].correctOption) {
            console.log("correct answer chosen");
            localStorage.setItem("score", score + 10);
  
        } else {
            console.log("incorrect answer");
            timeRemaining = timeRemaining - 10
            }
    event.preventDefault();
    index++;
    insertQuestion();

    });
 
    return;
}

function enterScore() {
    // document.parentNode.removeChild(navEl);
    container.innerHTML = "<h2>All Done!</h2><br>";
    buttons.innerHTML = "Your final score is " + localStorage.getItem("score") +"." + "<br><br>";
    var form = document.createElement("form");
    submit.appendChild(form);
    form.innerHTML = enterInitials;
    
}

function viewScore(){
    
}

// var score = localStorage.getItem("score");

startQuiz();


// part 4) Entering initials into final score and being able to retrieve them after refresh

var enterInitials = 
    '<form> <div class="form-row align-items-center"> <div class="col-md-6 my-1"> <label class="sr-only" for="inlineFormInputName">Name</label> <input type="text" class="form-control" id="inlineFormInputName" placeholder="Enter Initals"> </div> <div class="col-auto my-1"> </div> <div class="col-auto my-1"> <button type="submit" class="btn btn-primary">Submit</button> </div> </div> </form>'
