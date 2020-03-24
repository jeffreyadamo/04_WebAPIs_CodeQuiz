

var timerEl = document.querySelector(".btn-lg");
var timeRemaining = 60;


console.log("Connected: not broken yet.");

function startQuiz () {
    timerEl.addEventListener("click", function() {
    timerEl.textContent = "Time: " + timeRemaining;
    console.log("Time remaining: " + timeRemaining);
    timer();
    });

} // end startTimer

startQuiz();

function timer () {
    var timer = setInterval(function() {
        timeRemaining--;
        timerEl.textContent = "Time: " + timeRemaining
    }, 1000);

}


