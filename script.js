// Set a few variables to begin
var start = document.querySelector(".startQuiz");
var timerEl = document.querySelector(".timer");
var timeRemaining = 60;
var timerStart;
var container = document.querySelector(".container");
var buttons = document.querySelector(".buttons");
var submit = document.querySelector(".submit");
var index = 0;
var score = 0;
var highScoresLinkEl = document.querySelector(".highScoresLink");
var storedScores=[]
var redyToSave=[]

// localStorage.setItem("score", score);

// Set an array as a variable that includes questions, answers, and correct answers:
var questionsArray = [
  {
    question: "Question 1: Commonly used data types DO NOT include:",
    answers: [
      "1. strings",
      "2. booleans",
      "3. alerts", //correct
      "4. numbers"
    ],
    correctOption: "3. alerts"
  },
  {
    question:
      "Question 2: The condition of an if / else statement is enclosed within ________",
    answers: [
      "1. quotes",
      "2. curly brackets",
      "3. parentheses", //correct
      "4. square brackets"
    ],
    correctOption: "3. parentheses"
  },
  {
    question: "Question 3: Arrays in JavaScript can be used to store ________",
    answers: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above"
    ], //correct
    correctOption: "4. all of the above"
  },
  {
    question:
      "Question 4: String values must be enclosed within ________ when being assigned to variables.",
    answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"], //correct
    correctOption: "4. parentheses"
  },
  {
    question:
      "Question 5: A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops", //correct
      "4. console.log"
    ],
    correctOption: "3. for loops"
  }
];

// Make sure things are talking:
console.log("Connected: not broken yet.");
console.log("Starting index is " + index);
console.log("-------------");

// Using addEventListener on "Start Quiz" button to start the timer:
function startQuiz() {
  start.addEventListener("click", function(event) {
    //prevent the button from functioning after timer begins
    if (timeRemaining < 60) {
      event.preventDefault();
    } else {
      timerEl.textContent = "Time: " + timeRemaining; //Change text of button to
      console.log("Timer started; Time remaining: " + timeRemaining); //keep track of where we are at
      console.log("-------------");

      //Start function timer() which will countdown from timeRemaining:
      timer();
      //Insert questions starting at current index = 0:
      insertQuestion();
    }
  });
}

// Use function timer() to countdown from timeRemaining:
function timer() {
  var timerInterval = setInterval(function() {
    timeRemaining--;
    timerEl.textContent = "Time: " + timeRemaining;

    // Stop the timer once it reaches 0, send a message, and direct towards enterScore function:
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      timerEl.textContent = "Time's up!";
    //   enterScore();
    }
  }, 1000);
}

//Now I need to prompt the user with a question.
function insertQuestion() {
  console.log("Still working,; running insertQuestion()"); //spot check to see if broken
  console.log("Current index is " + index);
  console.log("-------------");

  // Use innerHTML to replace the contents of the container with a question. We want to use a different size font, so use a <h2> tag
  // Access the first question in questionsArray using [index] which starts as [0]. We will index++ after each question cycle.
  container.innerHTML = "<h2>" + questionsArray[index].question + "</h2>";
  container.style.textAlign = "left";

//   Create a for loop to populate the answers in a button within their appropriate "answers" <div> defined in the HTML; children of the "buttons" <div>:
  for (var j = 0; j < questionsArray[index].answers.length; j++) {
    document.querySelector(".answer" + j).innerHTML = "<button type='button' class='btn btn-primary'>" + questionsArray[index].answers[j] + "</button>";
  }
//   document.querySelector(".answer0").innerHTML=questionsArray[index].answers[index]
//   document.querySelector(".answer1").innerHTML=questionsArray[index].answers[index]
//   document.querySelector(".answer2").innerHTML=questionsArray[index].answers[index]
//   document.querySelector(".answer3").innerHTML=questionsArray[index].answers[index]


  console.log("index after for loop is " + index);
  console.log("questionsArray.length is " + questionsArray.length);
  console.log("-------------");

//   correctAnswer();


}
//Okay, now I have the first question. The next parts required are to 1) listen for the correct button answer 2) store the score 3) loop through series of questions 4)//
buttons.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Button selected: " + event.target.textContent);

    if (event.target.textContent === questionsArray[index].correctOption) {
      console.log("correct answer chosen");
      score = score + 10;
      console.log("Currect score is: " + score);
    } else {
      console.log("incorrect answer");
      timeRemaining = timeRemaining - 10;
    }
    


    if (index < questionsArray.length - 1) {
        index++;
        insertQuestion();
        // once all the answers are complete, we need to enter our score.
      } else {
          timeRemaining = 0;
        enterScore();
      }

    
    console.log("Index after answer is: " + index);
    console.log("-------------");

  });

function correctAnswer() {
 

  return;
}

function enterScore() {
    // Replace quiz questions in container with a string 
  container.innerHTML = "<h2>All Done!</h2><br>";
//   Replace quiz answers with a string that shows cumulative score
  buttons.innerHTML =
    "Your final score is " + score + "." + "<br><br>";

// create a form that allows the user to enter their initials
  var form = document.createElement("form");
  submit.appendChild(form);

//  Insert a Bootstap form that is defined as "enterInitials" (defined at bottom) in the empty <form> element predefined in HTML.
  form.innerHTML = enterInitials;
// variable set to identify where the Submit button is
  var initialsButton=document.querySelector(".initialButton");

    //   define what the user enters into the form
     
      
      
    //Store the variables into an array
    
     
    //   When clicking submit
      initialsButton.addEventListener("click",function(event){

           //Stringify!
           event.preventDefault() //make sure not to refresh
           if(localStorage.getItem("user,score") !==null){

               storedScores=JSON.parse(localStorage.getItem("user,score"));
           }
          
           if(storedScores.length>0){

               for(var b=0;b<storedScores.length;b++){
                   redyToSave.push(storedScores[b])
               }
           }

        //    console.log(redyToSave);

           var userInitials=document.querySelector(".initInput").value
           var userScore=
               {userInitials,
               score}
           
            redyToSave.push(userScore)

            
            localStorage.setItem("user,score", JSON.stringify(redyToSave))

      viewScore();

  })
}

function viewScore() {
    console.log(redyToSave);
    
  container.innerHTML = "<h2>High Scores!</h2><br>";
  for(var t=0;t<redyToSave.length;t++){
      var scoreList = document.createElement("div");
    //   var scoreList2 = document.createElement("div");
      scoreList.textContent ="Initials= "+ redyToSave[t].userInitials + "Score = "+ redyToSave[t].score;
    //   scoreList2.textContent = redyToSave[t].score;


      container.appendChild(scoreList);
    //   container.appendChild(scoreList2);
  }

//   buttons.innerHTML = JSON.parse(localStorage.getItem("user,score"));
  

//   var newButtons = document.createElement("div");
//   newButtons.className = "newButtons";
//   (newButtons.innerHTML =
//     "<button type='button' class='btn btn-primary'>Go Back</button>"),
//     "<button type='button' class='btn btn-primary'>Go Back</button>";
//   buttons.appendChild(newButtons);
}

highScoresLinkEl.addEventListener("click", function(event) {
  event.preventDefault();
  viewScore();
});

// var score = localStorage.getItem("score");

startQuiz();

// part 4) Entering initials into final score and being able to retrieve them after refresh

var enterInitials =
  '<form> <div class="form-row align-items-center"> <div class="col-md-6 my-1"> <label class="sr-only" for="inlineFormInputName">Name</label> <input type="text" class="form-control initInput" id="inlineFormInputName" placeholder="Enter Initals"> </div> <div class="col-auto my-1"> </div> <div class="col-auto my-1"> <button type="submit" class="btn btn-primary initialButton">Submit</button> </div> </div> </form>';

