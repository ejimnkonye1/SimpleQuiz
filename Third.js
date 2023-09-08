const questions = [
    {
        questions: "What does CSS stand for?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Creative Style Sheets", correct: false },
            { text: "Computer Style Sheets", correct: false },
            { text: "Colorful Style Sheets", correct: false },
        ]
    },
    {
        questions: "How can you include an external CSS file in an HTML document?",
        answers: [
            { text: "<link rel='stylesheet' href='styles.css'>", correct: true },
            { text: "<style src='styles.css'></style>", correct: false },
            { text: "<css>styles.css</css>", correct: false },
            { text: "<script src='styles.css'></script>", correct: false },
        ]
    },
    {
        questions: "Which CSS property is used to change the text color of an element?",
        answers: [
            { text: "color", correct: true },
            { text: "text-color", correct: false },
            { text: "font-color", correct: false },
            { text: "text-style", correct: false },
        ]
    },
    {
        questions: "What does the 'box-sizing' property in CSS do?",
        answers: [
            { text: "Defines how the size of an element is calculated", correct: true },
            { text: "Sets the size of the element's border", correct: false },
            { text: "Determines the box model used for layout", correct: false },
            { text: "Specifies the element's display type", correct: false },
        ]
    },
    {
        questions: "Which CSS property is used to control the spacing between lines of text?",
        answers: [
            { text: "line-height", correct: true },
            { text: "text-spacing", correct: false },
            { text: "line-spacing", correct: false },
            { text: "letter-spacing", correct: false },
        ]
    },
    {
        questions: "What is the purpose of the 'z-index' property in CSS?",
        answers: [
            { text: "Controls the stacking order of elements", correct: true },
            { text: "Defines the width of an element", correct: false },
            { text: "Sets the opacity of an element", correct: false },
            { text: "Specifies the background color of an element", correct: false },
        ]
    },
    {
        questions: "Which CSS property is used to add shadows to text?",
        answers: [
            { text: "text-shadow", correct: true },
            { text: "box-shadow", correct: false },
            { text: "font-shadow", correct: false },
            { text: "shadow-text", correct: false },
        ]
    },
    {
        questions: "How can you center an element horizontally in CSS?",
        answers: [
            { text: "margin: 0 auto;", correct: true },
            { text: "text-align: center;", correct: false },
            { text: "vertical-align: middle;", correct: false },
            { text: "align-items: center;", correct: false },
        ]
    },
    {
        questions: "What does 'RWD' stand for in the context of web development?",
        answers: [
            { text: "Responsive Web Design", correct: true },
            { text: "Real Web Development", correct: false },
            { text: "Relative Web Design", correct: false },
            { text: "Rapid Web Development", correct: false },
        ]
    },
    {
        questions: "Which CSS property is used to create a transition effect on an element's hover state?",
        answers: [
            { text: "transition", correct: true },
            { text: "transform", correct: false },
            { text: "animation", correct: false },
            { text: "hover-transition", correct: false },
        ]
    }
];



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

