var startquiz = document.querySelector("#startbutton");
var quizTimer = document.getElementById("timeleft");
var secondsLeft = 45;
// holds the questions thier choices and correct answer
var questions = [

 { question: "What language can we use to create a simple webpage?",
   choices: ["HTML", "CSS", "Javascript", "All of the above"],
   correctAnswerIndex: 4

 },

 {
  question: "What is the correct design of a simple for loop?",
  choices: ["<script>", "<javascript>", "<script.js>", "<insert>"],
  correctAnswerIndex: 1

 },

 {
  question: "What is a boolean?",
  choices: ["A foreign food", "a true or false statement", "a string of numbers", "an array of numbers"],
  correctAnswerIndex: 2
 },

 {
  question: "What does the === operator in Javascript do?",
  choices: ["Checks for Strict equality of values", "Assigns a value to an object", "Sets a value to a variable", "Asks to take the object out on a date"],
  correctAnswerIndex: 1

 }

]
var currentQuestionIndex = 0;
// starts quiz when user clicks start button
startquiz.addEventListener("click", function() {
   //hides the startbutton once the quiz is started
  startquiz.style.display = "none";
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



