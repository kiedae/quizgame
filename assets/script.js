var startquiz = document.querySelector("#startbutton");
var quizTimer = document.getElementById("timeleft");
var playerscore = document.getElementById("score");
var secondsLeft = 45;
var score = 0;
// holds the questions thier choices and correct answer
var questions = [

 { question: "What language can we use to create a simple webpage?",
   choices: ["HTML", "CSS", "Javascript", "All of the above"],
   correctAnswerIndex: 3

 },

 {
  question: "What is the correct design of a simple for loop?",
  choices: ["<script>", "<javascript>", "<script.js>", "<insert>"],
  correctAnswerIndex: 0

 },

 {
  question: "What is a boolean?",
  choices: ["A foreign food", "a true or false statement", "a string of numbers", "an array of numbers"],
  correctAnswerIndex: 1
 },

 {
  question: "What does the === operator in Javascript do?",
  choices: ["Checks for Strict equality of values", "Assigns a value to an object", "Sets a value to a variable", "Asks to take the object out on a date"],
  correctAnswerIndex: 0

 }

]
var currentQuestionIndex = 0;
// starts quiz when user clicks start button
startquiz.addEventListener("click", function() {
   //hides the startbutton once the quiz is started
  startquiz.style.display = "none";

  // starts the timer for the quiz
timerClock();
// Starts the quiz, displays the first question within questions variable
displayQuestion();

});

function timerClock() {
    var timer = setInterval(function() {
    //subtracts 1 second from secondsLeft 
      secondsLeft--;
      //Shows user how much time is left on quiz
    quizTimer.textContent = secondsLeft + " seconds left until your quiz is over.";
playerscore.textContent = "Score: " + score;
    
//when the secondsLeft variable is 0 stop the function
     if(secondsLeft == 0) {
         clearInterval(timer);
         quizTimer.textContent = "Time's up!";
    }
    //repeats the function every 1 second
  }, 1000);
}

function displayQuestion() {
  // targets the element that will display the current question
  var questionTextElement = document.getElementById("questiontext");
  //targets the answer buttons which will allow the buttons to be created for each question
  var answerButtons = document.getElementById("answerbuttons");

  // shows the current question
  questionTextElement.textContent = questions[currentQuestionIndex].question;

  // clears the buttons from previous question
  answerButtons.innerHTML = "";

  // creates and displays the current answer buttons for current question
  questions[currentQuestionIndex].choices.forEach(function(choice, index) {
    var button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", function() {
      //checks which button the user pressed
      checkAnswer(index);
    });
    // adds the created buttons to the HTML
    answerButtons.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  var correctIndex = questions[currentQuestionIndex].correctAnswerIndex;

  if (selectedIndex === correctIndex) {
 // adds score and time if correct answer
    score+=5;
    secondsLeft+=5;
  } else {
//subtracts score and time if wrong answer
    score-=5;
secondsLeft-=5;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion(); // Move to the next question
  } else {
    // will eventually end quiz
  }
}


