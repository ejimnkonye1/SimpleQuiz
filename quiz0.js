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
    questions:"What is smallest continent in the world?",
    answers: [
            {text: "asia", correct: false},
            {text: "australia", correct: true},
            {text: "arctic", correct: false},
            {text: "africa", correct: false},
    ]
},
{
    questions:"how many state is in nigeria",
    answers: [
            {text: "34", correct: false},
            {text: "50 whale", correct: false},
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
}


function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

function selectAnswer(e){
    const selectedBTN = e.target;
    const isCorrect = selectedBTN.dataset.correct === "true";
    if(isCorrect){
        selectedBTN.classList.add("correct");
        score++;

    }else {
        selectedBTN.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
             button.classList.add("correct");

        }
         button.disabled = true;
    });
    
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionsElement.innerHTML = "you score " + score + " out of " + questions.length;
    nextButton.innerHTML = "plays again";
    nextButton.style.display = "block";

}


function handleNextButton(){
    currentQuestionnum++;
    if(currentQuestionnum < questions.length){
        showQuestion();
    }else{
        showScore();
    }


}

 nextButton.addEventListener("click", ()=>{
    if(currentQuestionnum < questions.length){
        handleNextButton();
    }else{
        startQuiz()
    }
 });
startQuiz()
