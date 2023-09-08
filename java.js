const questions = [
    {
        questions: "What does JavaScript stand for?",
        answers: [
            { text: "Java Script", correct: false },
            { text: "Just Script", correct: false },
            { text: "JavaScript", correct: true },
            { text: "JavaCode", correct: false },
        ]
    },
    {
        questions: "Which keyword is used to declare a variable in JavaScript?",
        answers: [
            { text: "let", correct: true },
            { text: "variable", correct: false },
            { text: "var", correct: false },
            { text: "varex", correct: false },
        ]
    },
    {
        questions: "What is the result of '5 + '5' in JavaScript?",
        answers: [
            { text: "10", correct: false },
            { text: "55", correct: true },
            { text: "Error", correct: false },
            { text: "undefined", correct: false },
        ]
    },
    {
        questions: "Which function is used to parse a JSON string in JavaScript?",
        answers: [
            { text: "JSON.parse()", correct: true },
            { text: "JSON.stringify()", correct: false },
            { text: "JSON.decode()", correct: false },
            { text: "JSON.encode()", correct: false },
        ]
    },
    {
        questions: "What is the JavaScript event loop?",
        answers: [
            { text: "A loop that runs JavaScript code repeatedly", correct: false },
            { text: "A mechanism that allows JavaScript to handle asynchronous tasks", correct: true },
            { text: "A loop that controls the execution of JavaScript functions", correct: false },
            { text: "A loop that iterates over an array in JavaScript", correct: false },
        ]
    },
    {
        questions: "What is the purpose of the 'this' keyword in JavaScript?",
        answers: [
            { text: "Refers to the previous function", correct: false },
            { text: "Refers to the current function", correct: false },
            { text: "Refers to the global object", correct: false },
            { text: "Refers to the current object", correct: true },
        ]
    },
    {
        questions: "What is the difference between 'null' and 'undefined' in JavaScript?",
        answers: [
            { text: "They are the same and can be used interchangeably", correct: false },
            { text: "'null' represents an empty or non-existent value, while 'undefined' is a variable that has been declared but not assigned a value", correct: true },
            { text: "'null' is a primitive data type, while 'undefined' is an object", correct: false },
            { text: "'undefined' represents an empty or non-existent value, while 'null' is a variable that has been declared but not assigned a value", correct: false },
        ]
    },
    {
        questions: "What is a closure in JavaScript?",
        answers: [
            { text: "A built-in function in JavaScript", correct: false },
            { text: "A way to create private variables and functions", correct: true },
            { text: "A type of loop in JavaScript", correct: false },
            { text: "A method for handling errors in JavaScript", correct: false },
        ]
    },
    {
        questions: "What does 'NaN' stand for in JavaScript?",
        answers: [
            { text: "Not a Number", correct: true },
            { text: "New and Notable", correct: false },
            { text: "Numeric and Null", correct: false },
            { text: "None of the above", correct: false },
        ]
    },
    {
        questions: "How can you add an element to the end of an array in JavaScript?",
        answers: [
            { text: "push()", correct: true },
            { text: "append()", correct: false },
            { text: "addToEnd()", correct: false },
            { text: "insertAtEnd()", correct: false },
        ]
    }
];


const html = [
    {
        questions: "What is the largest organ in the human body?",
        answers: [
            { text: "Heart", correct: false },
            { text: "Skin", correct: true },
            { text: "Brain", correct: false },
            { text: "Liver", correct: false },
        ]
    },
    
    
    


]



 const questionsElement = document.getElementById("question");
 const answerButtons = document.getElementById("answer-button");
 const nextButton = document.getElementById("next-btn");

let currentQuestionnum = 0;
let score = 0;

function startQuiz(){
    currentQuestionnum = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
    startTimer();
    
    

}

function showQuestion(){
    resetState();
    
    let currentQuestion = questions[currentQuestionnum];
    let questionsno = currentQuestionnum + 1;
    questionsElement.innerHTML = questionsno + ". " + currentQuestion.questions


    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);


    });
    startTimer(); // Start the timer when a new question is displayed
    timeLeft = 10; // Reset the timer to the initial time for each question
}


function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

// Play the correct sound effect
function playCorrectSound() {
    const correctSound = document.getElementById('correct-sound');
    correctSound.play();
}

// Play the incorrect sound effect
function playIncorrectSound() {
    const incorrectSound = document.getElementById('incorrect-sound');
    incorrectSound.play();
}

   

function selectAnswer(e){
    const selectedBTN = e.target;
    const isCorrect = selectedBTN.dataset.correct === "true";
    
    if(isCorrect){
        selectedBTN.classList.add("correct");
        playCorrectSound();
        
        score++;

    }else {
        selectedBTN.classList.add("incorrect")
        playIncorrectSound();
        
    }
    
    clearInterval(timerInterval); // stop timer when answer is selected
    timerDisplay.style.display = "none"; // hide timer when answer is selected
    
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
             button.classList.add("correct");

        }
         button.disabled = true;
    });
    
    nextButton.style.display = "block";
    
}

function showScore(){
    timerDisplay.style.display = "none";  // hide timer when quiz end.
    resetState();
    const totalQuestions = questions.length;
    const percentageScore = (score / totalQuestions) * 100;

    let scoreMessage = "";

    if (percentageScore >= 80) {
        scoreMessage = "Congratulations! You did great!";
    } else if (percentageScore >= 50) {
        scoreMessage = "You can do better than this.";
    } else {
        scoreMessage = "Too poor. You can do better.";
    }

    questionsElement.innerHTML = "You Scored " + score + " Out Of " + totalQuestions;
    questionsElement.innerHTML += "<br>" + scoreMessage;

    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
  
    




function handleNextButton(){
    currentQuestionnum++;
    if(currentQuestionnum < questions.length){
        showQuestion();
        timerDisplay.style.display = "block";// show timer on next question
        startTimer(); // start timer for next question.
        
    }else{
        showScore();
    }


}

 nextButton.addEventListener("click", ()=>{
    if(currentQuestionnum < questions.length){
        handleNextButton();
    }else{
        startQuiz()
        startTimer();
        timerDisplay.style.display = "block";  // hide timer when quiz end.
    }
 });
 let timeLeft = 10; // Set the initial time in seconds
 let timerInterval; // Store the interval ID for the timer
 const timerDisplay = document.getElementById('timer'); // Get the timer element
 
 function startTimer() {
    
   clearInterval(timerInterval); // Clear any existing timer
   
   timerDisplay.innerHTML = `Time Left: ${timeLeft} seconds`; // Reset the timer display
   
   timerInterval = setInterval(() => {

    if (timeLeft <= 0) {
        
        resetState();
        clearInterval(timerInterval); // Stop the timer when it reaches zero
        
        handleNextButton(); // Automatically move to the next question
    } else {
        timerDisplay.innerHTML = `Time Left: ${timeLeft} seconds`;
        timeLeft--;
    }
   }, 1000); // Update the timer every second
//    const countdown = document.getElementById('clock-tick')
//    countdown.play();

 }
 
 // Example usage to start the timer for the next question:
 
 


startQuiz()

