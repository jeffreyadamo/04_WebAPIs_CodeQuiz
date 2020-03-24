
// Set a few variables to begin
var start = document.querySelector(".btn-lg");
var timerEl = document.querySelector(".timer");
var timeRemaining = 5;
var timerStart;
var buttonA = document.querySelector(".buttonA");
var buttonB = document.querySelector(".buttonB");
var buttonC = document.querySelector(".buttonC");
var buttonD = document.querySelector(".buttonD");



// Make sure things are talking
console.log("Connected: not broken yet.");

// Use the button in the jumbotron to initialize the quiz timer
function startQuiz () {

    start.addEventListener("click", function() {  //listens for button click on StartQuiz in jumbotron
    timerEl.textContent = "Time: " + timeRemaining; //Change text of button to 
    console.log("Time remaining: " + timeRemaining); //keep track of where we are at
    
    // 
    timer(); //start function timer() which will countdown from timeRemaining
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
        timerEl.disabled = true; //I don't want to keep looping another second off
      }
    }, 1000); 
}

startQuiz();

//now I need to prompt the user with a quiz


