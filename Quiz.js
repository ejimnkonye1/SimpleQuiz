const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hypertext Markup Language", correct: true },
            { text: "Hyperlink and Text Markup Language", correct: false },
            { text: "High-Level Text Markup Language", correct: false },
            { text: "Hypertext Transfer Language", correct: false },
        ]
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        answers: [
            { text: "< link>", correct: false },
            { text: " < a>", correct: true },
            { text: "< h1>", correct: false },
            { text: "< p>", correct: false },
        ]
    },
    {
        question: "What is the correct HTML tag for inserting a line break?",
        answers: [
            { text: "< lb>", correct: false },
            { text: "< linebreak>", correct: false },
            { text: "< br >", correct: true },
            { text: "< break>", correct: false },
        ]
    },
    {
        question: "Which HTML element is used for creating an ordered list?",
        answers: [
            { text: "< list>", correct: false },
            { text: "< ol>", correct: true },
            { text: "< ul>", correct: false },
            { text: "< li>", correct: false },
        ]
    },
    {
        question: "What is the purpose of the HTML <head> element?",
        answers: [
            { text: "To define the main content of the document", correct: false },
            { text: "To specify the title, metadata, and links to external resources", correct: true },
            { text: "To create a heading at the top of the page", correct: false },
            { text: "To define a section of content", correct: false },
        ]
    },
    {
        question: "Which HTML tag is used to define an image?",
        answers: [
            { text: "< img>", correct: true },
            { text: "< picture>", correct: false },
            { text: "< image>", correct: false },
            { text: "< photo>", correct: false },
        ]
    },
    {
        question: "What is the correct HTML tag for creating a hyperlink to an email address?",
        answers: [
            { text: "< link>", correct: false },
            { text: "< mail>", correct: false },
            { text: "< a href='mailto:email@example.com'>", correct: true },
            { text: "< email>", correct: false },
        ]
    },
    {
        question: "Which HTML tag is used for creating a table?",
        answers: [
            { text: "< table>", correct: true },
            { text: "< tab>", correct: false },
            { text: " < tr>", correct: false },
            { text: "< td>", correct: false },
        ]
    },
    {
        question: "What does the HTML <iframe> element allow you to do?",
        answers: [
            { text: "Embed audio files", correct: false },
            { text: "Create interactive forms", correct: false },
            { text: "Embed content from another website", correct: true },
            { text: "Define a section of content", correct: false },
        ]
    },
    {
        question: "Which HTML tag is used to define the structure of an HTML document, including the header and body sections?",
        answers: [
            { text: "< structure>", correct: false },
            { text: "< layout>", correct: false },
            { text: "< html>", correct: true },
            { text: "< body>", correct: false },
        ]
    }
];

// You can add more questions to this array if needed.



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

