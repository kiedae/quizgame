var startquiz = document.querySelector("#startbutton");
var quizTimer = document.getElementById("timeleft");
var secondsLeft = 45;

// starts quiz when user clicks start button
startquiz.addEventListener("click", function() {
    
    //will start the quiz eventually
  //  quiz()
 
timerClock();

});

function timerClock() {
    
    
  var timer = setInterval(function() {
    secondsLeft--;
    quizTimer.textContent = secondsLeft + " seconds left until your quiz is over.";


     if(secondsLeft == 0) {
         clearInterval(timer);
         quizTimer.textContent = "Time's up!";
    }
    //repeats the function every 1 second
  }, 1000);


}