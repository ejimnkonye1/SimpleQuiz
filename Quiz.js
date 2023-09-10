const questions = [
    {
        questions: "What does HTML stand for?",
        answers: [
            { text: "Hypertext Markup Language", correct: true },
            { text: "Hyperlink and Text Markup Language", correct: false },
            { text: "High-Level Text Markup Language", correct: false },
            { text: "Hypertext Transfer Language", correct: false },
        ]
    },
    {
        questions: "Which HTML tag is used to create a hyperlink?",
        answers: [
            { text: "< link>", correct: false },
            { text: " < a>", correct: true },
            { text: "< h1>", correct: false },
            { text: "< p>", correct: false },
        ]
    },
    {
        questions: "What is the correct HTML tag for inserting a line break?",
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
        questions: "What is the purpose of the HTML <head> element?",
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

const questions2 = [
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Creative Style Sheets", correct: false },
            { text: "Computer Style Sheets", correct: false },
            { text: "Colorful Style Sheets", correct: false },
        ]
    },
    {
        question: "How can you include an external CSS file in an HTML document?",
        answers: [
            { text: "< link rel='stylesheet' href='styles.css'>", correct: true },
            { text: "< style src='styles.css'></style>", correct: false },
            { text: "< css>styles.css</css>", correct: false },
            { text: "< script src='styles.css'></script>", correct: false },
        ]
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: [
            { text: "color", correct: true },
            { text: "text-color", correct: false },
            { text: "font-color", correct: false },
            { text: "text-style", correct: false },
        ]
    },
    {
        question: "What does the 'box-sizing' property in CSS do?",
        answers: [
            { text: "Defines how the size of an element is calculated", correct: true },
            { text: "Sets the size of the element's border", correct: false },
            { text: "Determines the box model used for layout", correct: false },
            { text: "Specifies the element's display type", correct: false },
        ]
    },
    {
        question: "Which CSS property is used to control the spacing between lines of text?",
        answers: [
            { text: "line-height", correct: true },
            { text: "text-spacing", correct: false },
            { text: "line-spacing", correct: false },
            { text: "letter-spacing", correct: false },
        ]
    },
    {
        question: "What is the purpose of the 'z-index' property in CSS?",
        answers: [
            { text: "Controls the stacking order of elements", correct: true },
            { text: "Defines the width of an element", correct: false },
            { text: "Sets the opacity of an element", correct: false },
            { text: "Specifies the background color of an element", correct: false },
        ]
    },
    {
        question: "Which CSS property is used to add shadows to text?",
        answers: [
            { text: "text-shadow", correct: true },
            { text: "box-shadow", correct: false },
            { text: "font-shadow", correct: false },
            { text: "shadow-text", correct: false },
        ]
    },
    {
        question: "How can you center an element horizontally in CSS?",
        answers: [
            { text: "margin: 0 auto;", correct: true },
            { text: "text-align: center;", correct: false },
            { text: "vertical-align: middle;", correct: false },
            { text: "align-items: center;", correct: false },
        ]
    },
    {
        question: "What does 'RWD' stand for in the context of web development?",
        answers: [
            { text: "Responsive Web Design", correct: true },
            { text: "Real Web Development", correct: false },
            { text: "Relative Web Design", correct: false },
            { text: "Rapid Web Development", correct: false },
        ]
    },
    {
        question: "Which CSS property is used to create a transition effect on an element's hover state?",
        answers: [
            { text: "transition", correct: true },
            { text: "transform", correct: false },
            { text: "animation", correct: false },
            { text: "hover-transition", correct: false },
        ]
    }
  ];
  
  const questions3 = [
    {
        question: "What does JavaScript stand for?",
        answers: [
            { text: "Java Script", correct: false },
            { text: "Just Script", correct: false },
            { text: "JavaScript", correct: true },
            { text: "JavaCode", correct: false },
        ]
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answers: [
            { text: "let", correct: true },
            { text: "variable", correct: false },
            { text: "var", correct: false },
            { text: "varex", correct: false },
        ]
    },
    {
        question: "What is the result of '5 + '5' in JavaScript?",
        answers: [
            { text: "10", correct: false },
            { text: "55", correct: true },
            { text: "Error", correct: false },
            { text: "undefined", correct: false },
        ]
    },
    {
        question: "Which function is used to parse a JSON string in JavaScript?",
        answers: [
            { text: "JSON.parse()", correct: true },
            { text: "JSON.stringify()", correct: false },
            { text: "JSON.decode()", correct: false },
            { text: "JSON.encode()", correct: false },
        ]
    },
    {
        question: "What is the JavaScript event loop?",
        answers: [
            { text: "A loop that runs JavaScript code repeatedly", correct: false },
            { text: "A mechanism that allows JavaScript to handle asynchronous tasks", correct: true },
            { text: "A loop that controls the execution of JavaScript functions", correct: false },
            { text: "A loop that iterates over an array in JavaScript", correct: false },
        ]
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        answers: [
            { text: "Refers to the previous function", correct: false },
            { text: "Refers to the current function", correct: false },
            { text: "Refers to the global object", correct: false },
            { text: "Refers to the current object", correct: true },
        ]
    },
    {
        question: "What is the difference between 'null' and 'undefined' in JavaScript?",
        answers: [
            { text: "They are the same and can be used interchangeably", correct: false },
            { text: "'null' represents an empty or non-existent value, while 'undefined' is a variable that has been declared but not assigned a value", correct: true },
            { text: "'null' is a primitive data type, while 'undefined' is an object", correct: false },
            { text: "'undefined' represents an empty or non-existent value, while 'null' is a variable that has been declared but not assigned a value", correct: false },
        ]
    },
    {
        question: "What is a closure in JavaScript?",
        answers: [
            { text: "A built-in function in JavaScript", correct: false },
            { text: "A way to create private variables and functions", correct: true },
            { text: "A type of loop in JavaScript", correct: false },
            { text: "A method for handling errors in JavaScript", correct: false },
        ]
    },
    {
        question: "What does 'NaN' stand for in JavaScript?",
        answers: [
            { text: "Not a Number", correct: true },
            { text: "New and Notable", correct: false },
            { text: "Numeric and Null", correct: false },
            { text: "None of the above", correct: false },
        ]
    },
    {
        question: "How can you add an element to the end of an array in JavaScript?",
        answers: [
            { text: "push()", correct: true },
            { text: "append()", correct: false },
            { text: "addToEnd()", correct: false },
            { text: "insertAtEnd()", correct: false },
        ]
    }
  ];
  
  const questions4 = [
    {
      question: "Question 1 from Array 4",
      answers: [
        { text: "Option 1", correct: true },
        { text: "Option 2", correct: false },
        { text: "Option 3", correct: false },
      ]
    },
    // Add more questions to questions4 as needed
  ];
  
  let currentQuestions = questions; // Initially use the first set of questions


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

// function showQuestion(){
//     resetState();
    
//     let currentQuestion = questions[currentQuestionnum];
//     let questionsno = currentQuestionnum + 1;
//     questionsElement.innerHTML = questionsno + ". " + currentQuestion.questions


//     currentQuestion.answers.forEach(answers => {
//         const button = document.createElement("button");
//         button.innerHTML = answers.text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button);
//         if(answers.correct){
//             button.dataset.correct = answers.correct;
//         }
//         button.addEventListener("click", selectAnswer);


//     });
//     startTimer(); // Start the timer when a new question is displayed
//     timeLeft = 10; // Reset the timer to the initial time for each question
// }

function showQuestion() {
    resetState();
    let currentQuestion = currentQuestions[currentQuestionnum];
    let questionsno = currentQuestionnum + 1;
    questionsElement.innerHTML = questionsno + ". " + currentQuestion.question;
  
    currentQuestion.answers.forEach((answers) => {
      const button = document.createElement("button");
      button.innerHTML = answers.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if (answers.correct) {
        button.dataset.correct = answers.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  
    startTimer();
    timeLeft = 10;
  }
  function switchQuestionSet(questionSet) {
    currentQuestions = questionSet;
    currentQuestionnum = 0;
    score = 0;
    showQuestion();
  }
  
  const switchQuestionsButton1 = document.getElementById("switch-questions-btn-1");
const switchQuestionsButton2 = document.getElementById("switch-questions-btn-2");
const switchQuestionsButton3 = document.getElementById("switch-questions-btn-3");
const switchQuestionsButton4 = document.getElementById("switch-questions-btn-4");

switchQuestionsButton1.addEventListener("click", () => {
  switchQuestionSet(questions);
});

switchQuestionsButton2.addEventListener("click", () => {
  switchQuestionSet(questions2);
});

switchQuestionsButton3.addEventListener("click", () => {
  switchQuestionSet(questions3);
});

switchQuestionsButton4.addEventListener("click", () => {
  switchQuestionSet(questions4);
});

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

