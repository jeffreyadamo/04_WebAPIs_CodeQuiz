
// Set a few variables to begin
var start = document.querySelector(".btn-lg");
var timerEl = document.querySelector(".timer");
var timeRemaining = 60;
var timerStart;
var questionsEl = document.querySelector(".container").firstElementChild;
var container = document.querySelector(".container");
var buttonA = document.querySelector(".buttonA");
var buttonB = document.querySelector(".buttonB");
var buttonC = document.querySelector(".buttonC");
var buttonD = document.querySelector(".buttonD");

//Arrays of questions with answers//
var q1 = [ 
    "Question 1: Commonly used data types DO NOT include:",
    "1. strings",
    "2. booleans",
    "3. alerts", //corrent
    "4. numbers",
];

var q2 = [ 
    "Question 2: The condition of an if / else statement is enclosed within ________",
    "1. quotes",
    "2. curly brackets",
    "3. parentheses", //correct
    "4. square brackets",
];

var q3 = [ 
    "Question 3: Arrays in JavaScript can be used to store ________",
    "1. numbers and strings",
    "2. other arrays",
    "3. booleans",
    "4. all of the above", //correct
];
var q4 = [ 
    "Question 4: String values must be enclosed within ________ when being assigned to variables.",
    "1. commas",
    "2. curly brackets",
    "3. quotes",
    "4. parentheses", //correct
];
var q5 = [ 
    "Question 5: A very useful tool used during development and debugging for printing content to the debugger is:",
    "1. JavaScript",
    "2. terminal/bash",
    "3. for loops",
    "4. console.log", //correct
];

var correctAnswers = ["answer3", "answer3", "answer4", "answer4", "answer4"];
    

// This may need to be set up in another array format:

// var quizQuestions = [
//     "Question 1: Commonly used data types DO NOT include:",
//     "Question 2: The condition of an if / else statement is enclosed within ________",
//     "Question 3: Arrays in JavaScript can be used to store ________",
//     "Question 4: String values must be enclosed within ________ when being assigned to variables.",
//     "Question 5: A very useful tool used during development and debugging for printing content to the debugger is:",
// ];





// Make sure things are talking
console.log("Connected: not broken yet.");

// Use the button in the jumbotron to initialize the quiz timer
function startQuiz () {

    start.addEventListener("click", function(event) {  //listens for button click on StartQuiz in jumbotron
        
        if(timeRemaining < 60) { //prevents the button from functioning after timer begins
            event.preventDefault();}
       
        else {
         timerEl.textContent = "Time: " + timeRemaining; //Change text of button to 
         console.log("Time remaining: " + timeRemaining); //keep track of where we are at
         timer(); //start function timer() which will countdown from timeRemaining
         question1(); //insert questions starting at q1
        }  
    });
} // end startQuiz()

// use function timer() to countdown from timeRemaining
function timer() {
    var timerInterval = setInterval(function() {
      timeRemaining--;
      timerEl.textContent = "Time: " + timeRemaining;
      
  
      // this stops the timer//
      if(timeRemaining <= 0) {
        clearInterval(timerInterval); 
        
        timerEl.textContent = "Time's up!";
        // timerEl.disabled = true; //I don't want to keep looping another second off
      }
    }, 1000); 
}

startQuiz();

//now I need to prompt the user with a quiz. Let's make an array of Questions and an array of Answers

function question1() {
    console.log("still working, insert question now"); //spot check to see if broken

    // container.innerHTML = "<h2>Insert Questions here</h2>";
    container.innerHTML = "<h2>" + q1[0] +"</h2>";
    container.style.textAlign = "left"; //question1 in array with h2 tag

    //seems like I should be able to create a for loop for inserting the 4 questions. Let's start with 1 with a button    
    for (var i = 1; i < q1.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.className =  "answer" + [i] + " questionStyle"; //new div created will have 2 classes, "answer[#]" and a style class = "questionstyle"//
        newDiv.innerHTML = "<button type='button' class='btn btn-primary'>" + q1[i] +"</button>";
        container.appendChild(newDiv);
    }
    correctAnswer();
    // wrongAnswer();
}

//Okay, now I have the first question. The next parts required are to 1) listen for the correct button answer 2) store the score 3) loop through series of questions 4)//

// var score = localStorage.getItem("score");
var score = 0;
localStorage.setItem("score", score);

function correctAnswer() {
    console.log("The correct answer for Question 1 is " + correctAnswers[0]);
    //"correctAnswers[0]" is the name of the div to listen for//
    correctDiv = document.querySelector("." + correctAnswers[0]);
    console.log(correctDiv);
    

    correctDiv.addEventListener("click", function(){
        
        localStorage.setItem("score", score + 10);
        alert("Correct!: Current Score is: " + localStorage.getItem("score")); //this is going to have to be switched to inserted HTML to match design//
        
    });
    
}



// part 4) Entering initials into final score and being able to retrieve them after refresh