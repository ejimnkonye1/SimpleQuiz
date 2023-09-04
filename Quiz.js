const questions = [
    {
        questions:"What is larget animal in the world",
        answers: [
                {text: "shark", correct: false},
                {text: "blue whale", correct: true},
                {text: "lion", correct: false},
                {text: "dog", correct: false},
        ]
   },
   
   {
    questions: "What is the capital of Canada?",
    answers: [
        { text: "Ottawa", correct: true },
        { text: "Toronto", correct: false },
        { text: "Montreal", correct: false },
        { text: "Vancouver", correct: false },
    ]
},
{
    questions: "Who wrote the play 'Romeo and Juliet'?",
    answers: [
        { text: "Charles Dickens", correct: false },
        { text: "William Shakespeare", correct: true },
        { text: "Jane Austen", correct: false },
        { text: "Mark Twain", correct: false },
    ]
},
{
    questions: "What is the chemical symbol for gold?",
    answers: [
        { text: "Au", correct: true },
        { text: "Ag", correct: false },
        { text: "Fe", correct: false },
        { text: "Hg", correct: false },
    ]
},
{
    questions: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
    answers: [
        { text: "Mars", correct: false },
        { text: "Venus", correct: true },
        { text: "Mercury", correct: false },
        { text: "Jupiter", correct: false },
    ]
},

 {
    questions:"What is smallest continent in the world?",
    answers: [
            {text: "asia", correct: false},
            {text: "australia", correct: true},
            {text: "arctic", correct: false},
            {text: "africa", correct: false},
    ]
},

{
    questions: "What is the capital of France?",
    answers: [
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
        { text: "Rome", correct: false },
        { text: "Paris", correct: true },
    ]
},
{
    questions: "Which planet is known as the Red Planet?",
    answers: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: true },
        { text: "Venus", correct: false },
        { text: "Jupiter", correct: false },
    ]
},
{
    questions: "What is the largest organ in the human body?",
    answers: [
        { text: "Heart", correct: false },
        { text: "Skin", correct: true },
        { text: "Brain", correct: false },
        { text: "Liver", correct: false },
    ]
},





{
    questions:"How Many State is in Nigeria",
    answers: [
            {text: "34", correct: false},
            {text: "35", correct: false},
            {text: "30", correct: false},
            {text: "36", correct: true,}
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

