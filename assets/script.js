var startquiz = document.querySelector("#startbutton");
var quizTimer = document.getElementById("timeleft");
var playerscore = document.getElementById("score");
var secondsLeft = 45;
var score = 0;
var endScreen = document.getElementById("end-quiz");
var entireQuiz = document.getElementById("Quiz");
// holds the questions thier choices and correct answer
console.log(secondsLeft);
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
         secondsLeft = 0;
         changeOver();
    }
   console.log(secondsLeft);
    //repeats the function every 1 second
  }, 1000);
}

function displayQuestion() {
  var questionTextElement = document.getElementById("questiontext");
  var answerButtons = document.getElementById("answerbuttons");
  var saveScoreButton = document.getElementById("save-score");

  if (currentQuestionIndex < questions.length) {
    var currentQuestion = questions[currentQuestionIndex];
    questionTextElement.textContent = currentQuestion.question;

    answerButtons.innerHTML = "";

    currentQuestion.choices.forEach(function (choice, index) {
      var button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", function () {
        checkAnswer(index);
      });
      answerButtons.appendChild(button);
    });

    saveScoreButton.style.display = "none";
  } else {
    answerButtons.innerHTML = "";
    saveScoreButton.style.display = "block";
    questionTextElement.textContent = "";
    changeOver();
  }
}

//function to check users answer 
function checkAnswer(selectedIndex) {
  var correctIndex = questions[currentQuestionIndex].correctAnswerIndex;

  if (selectedIndex === correctIndex) {
    score += 5;
    secondsLeft += 5;
  } else {
    score -= 5;
    secondsLeft -= 5;
  }

  if (currentQuestionIndex < questions.length) {
    currentQuestionIndex++;
    displayQuestion();
  } else {
    showEndOfQuizScreen(score);
    changeOver();
  }
}

function showEndOfQuizScreen(score) {
  var endQuizScreen = document.getElementById("end-quiz");
  var finalScoreElement = document.getElementById("final-score");
  finalScoreElement.textContent = score;

  endQuizScreen.classList.remove("hidden");
}

var saveScoreButton = document.getElementById("save-score");
var initialsInput = document.getElementById("initials");

saveScoreButton.addEventListener("click", function() {
  var initials = initialsInput.value;

  if (initials && score) {
    // Save initials and score to local storage
    // Use appropriate keys to distinguish different entries
  }
});

function changeOver() {
//removes the quiz timer and shows end screen
  quizTimer.style.display = "none";
endScreen.style.display = "inline-block";
entireQuiz.style.display = "none";
document.getElementById("final-score").textContent = score;
}




