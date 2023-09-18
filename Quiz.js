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
        question: "What is the purpose of the HTML < head > element?",
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
        question: "Explain the purpose of the HTML < meta> tag and provide an example of how it can be used for SEO optimization.",
        answers: [
            { text: "The < meta> tag is used to define the structure of an HTML document.", correct: false },
            { text: "The < meta> tag is used to embed audio files in a webpage.", correct: false },
            { text: "The < meta> tag is used to create interactive forms.", correct: false },
            { text: "The < meta> tag is used to provide metadata about the HTML document.", correct: true },
        ]
    },
    {
        question: "What is the purpose of HTML entities, and can you provide an example of when to use them?",
        answers: [
            { text: "HTML entities are used to create interactive forms.", correct: false },
            { text: "HTML entities are used to define the structure of an HTML document.", correct: false },
            { text: "HTML entities are used to represent special characters that have reserved meanings in HTML.", correct: true },
            { text: "HTML entities are used to embed audio files in a webpage.", correct: false },
        ]
    },
  
    {
        question: "What is the purpose of the HTML5 'data-*' attributes, and how can they be used?",
        answers: [
            { text: "The 'data-*' attributes are used to apply custom styles to HTML elements.", correct: false },
            { text: "The 'data-*' attributes are used to define a hyperlink within an HTML document.", correct: false },
            { text: "The 'data-*' attributes are used to store custom data private to the page or application.", correct: true },
            { text: "The 'data-*' attributes are used to specify the width of an element in pixels.", correct: false },
        ]
    },
    {
        question: "What is the purpose of the HTML 'cite' element?",
        answers: [
            { text: "To define the title of a work", correct: true },
            { text: "To provide a caption for an image", correct: false },
            { text: "To create a table", correct: false },
            { text: "To create a user-input form", correct: false },
        ]
    },
    {
        question: "What is the purpose of the HTML 'alt' attribute in the <img> tag, and why is it important for accessibility?",
        answers: [
            { text: "The 'alt' attribute is used to specify the width of an element in pixels.", correct: false },
            { text: "The 'alt' attribute is used to provide alternative text for an image.", correct: true },
            { text: "The 'alt' attribute is used for creating interactive forms.", correct: false },
            { text: "The 'alt' attribute is used for defining the structure of an HTML document.", correct: false },
        ]
    },
    {
        question: "Explain the purpose of the HTML 'role' attribute, and how can it improve accessibility on a webpage?",
        answers: [
            { text: "The 'role' attribute is used to define the structure of an HTML document.", correct: false },
            { text: "The 'role' attribute is used to create interactive forms.", correct: false },
            { text: "The 'role' attribute is used to specify the width of an element in pixels.", correct: false },
            { text: "The 'role' attribute is used to define the role or function of an element for accessibility purposes.", correct: true },
        ]
    },
    {
        question: "What is the purpose of the HTML 'abbr' element?",
        answers: [
            { text: "To provide a caption for an image", correct: false },
            { text: "To define an abbreviation or acronym", correct: true },
            { text: "To create a user-input form", correct: false },
            { text: "To create a table", correct: false },
        ]
    },

    {
        question: "Explain the purpose of the HTML 'aria-label' attribute and how it contributes to accessibility in web development.",
        answers: [
            { text: "The 'aria-label' attribute is used to specify the width of an element in pixels.", correct: false },
            { text: "The 'aria-label' attribute is used to define the structure of an HTML document.", correct: false },
            { text: "The 'aria-label' attribute is used to provide alternative text for images.", correct: false },
            { text: "The 'aria-label' attribute is used to provide a human-readable description for an element when a text label is not visible.", correct: true },
        ]
    },
    {
        question: "What are semantic HTML elements, and why are they important in modern web development?",
        answers: [
            { text: "Semantic HTML elements are used to define the structure of an HTML document.", correct: false },
            { text: "Semantic HTML elements are used for creating hyperlinks in an HTML document.", correct: false },
            { text: "Semantic HTML elements are used to specify the width of an element in pixels.", correct: false },
            { text: "Semantic HTML elements are HTML tags that carry meaning and describe the content they enclose.", correct: true },
        ]
    },
    {
        question: "Which HTML tag is used for creating a definition list?",
        answers: [
            { text: "< list >", correct: false },
            { text: "< dl >", correct: true },
            { text: "< ul >", correct: false },
            { text: "< li >", correct: false },
        ]
    },


    {
        question: "What does the HTML < iframe> element allow you to do?",
        answers: [
            { text: "Embed audio files", correct: false },
            { text: "Create interactive forms", correct: false },
            { text: "Embed content from another website", correct: true },
            { text: "Define a section of content", correct: false },
        ]
    },
    {
        question: "Which HTML tag is used to create a clickable button?",
        answers: [
            { text: "< input >", correct: false },
            { text: "< submit >", correct: false },
            { text: "< click >", correct: false },
            { text: "< button >", correct: true },
        ]
    },
    {
        question: "What is the purpose of the HTML 'blockquote' element?",
        answers: [
            { text: "To define a quotation or citation", correct: true },
            { text: "To provide a caption for an image", correct: false },
            { text: "To create a user-input form", correct: false },
            { text: "To create a block of text", correct: false },
        ]
    },
    {
        question: "What is the purpose of the HTML 'mark' element?",
        answers: [
            { text: "To create a user-input form", correct: false },
            { text: "To highlight text", correct: true },
            { text: "To create a table", correct: false },
            { text: "To define an abbreviation or acronym", correct: false },
        ]
    },
    {
        question: "What is the purpose of the HTML 'head' element?",
        answers: [
            { text: "To define the main content of the document", correct: false },
            { text: "To create a header section at the top of the page", correct: false },
            { text: "To define a list of items", correct: false },
            { text: "To store metadata about the document", correct: true },
        ]
    },
    {
        question: "What is the purpose of the HTML 'label' element?",
        answers: [
            { text: "To create a table", correct: false },
            { text: "To define a section of text", correct: false },
            { text: "To provide a caption for an input element", correct: true },
            { text: "To change the font color", correct: false },
        ]
    },
    {
        question: "What is the purpose of the HTML 'form' element?",
        answers: [
            { text: "To define the structure of a table", correct: false },
            { text: "To create a list of options", correct: false },
            { text: "To create a user-input form", correct: true },
            { text: "To create a section of text", correct: false },
        ]
    },
    {
        question: "Which HTML tag is used to emphasize text without defining its importance?",
        answers: [
            { text: "< italic >", correct: false },
            { text: "< strong >", correct: false },
            { text: "< highlight >", correct: false },
            { text: "< em >", correct: true },
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
        question: "What is the CSS selector used to target an HTML element with the id attribute of 'my-element'?",
        answers: [
            { text: "#my-element", correct: true },
            { text: ".my-element", correct: false },
            { text: "my-element", correct: false },
            { text: "id=my-element", correct: false },
        ]
    },
    {
        question: "What is the CSS selector used to target all <p> elements within a <div> with the class 'container'?",
        answers: [
            { text: "div.container > p", correct: false },
            { text: "div > p.container", correct: false },
            { text: ".container p", correct: true },
            { text: "div.p", correct: false },
        ]
    },
    {
        question: "What is the purpose of the 'z-index' property in CSS?",
        answers: [
            { text: "To control the spacing between elements", correct: false },
            { text: "To control the stacking order of positioned elements", correct: true },
            { text: "To control the font size of text", correct: false },
            { text: "To control the background color of elements", correct: false },
        ]
    },
    {
        question: "How can you center an element horizontally in CSS?",
        answers: [
            { text: "Using margin: auto;", correct: true },
            { text: "Using text-align: center;", correct: false },
            { text: "Using padding: auto;", correct: false },
            { text: "Using float: center;", correct: false },
        ]
    },
    {
        question: "What is the CSS property used to add shadows to elements?",
        answers: [
            { text: "box-shadow", correct: true },
            { text: "element-shadow", correct: false },
            { text: "shadow-effect", correct: false },
            { text: "text-shadow", correct: false },
        ]
    },
    {
        question: "What is the CSS property for changing the font size of text?",
        answers: [
            { text: "font-style", correct: false },
            { text: "text-size", correct: false },
            { text: "font-size", correct: true },
            { text: "text-style", correct: false },
        ]
    },
    {
        question: "How can you make text bold in CSS?",
        answers: [
            { text: "Using font-weight: bold;", correct: true },
            { text: "Using text-decoration: bold;", correct: false },
            { text: "Using font-style: bold;", correct: false },
            { text: "Using text-weight: bold;", correct: false },
        ]
    },
    {
        question: "What is the CSS property for changing the background color of an element?",
        answers: [
            { text: "background-color", correct: true },
            { text: "color", correct: false },
            { text: "text-color", correct: false },
            { text: "bgcolor", correct: false },
        ]
    },
    {
        question: "What is the purpose of the 'display' property in CSS?",
        answers: [
            { text: "To control how an element is rendered in the layout", correct: true },
            { text: "To control the visibility of an element", correct: false },
            { text: "To control the size of an element", correct: false },
            { text: "To control the order of elements", correct: false },
        ]
    },
    {
        question: "How do you select all even-numbered rows of a table using CSS?",
        answers: [
            { text: ":even-row", correct: false },
            { text: ":nth-child(even)", correct: true },
            { text: ":even", correct: false },
            { text: ":odd", correct: false },
        ]
    },
    {
        question: "What is the CSS property for changing the color of text?",
        answers: [
            { text: "font-color", correct: false },
            { text: "color", correct: true },
            { text: "text-color", correct: false },
            { text: "text-style", correct: false },
        ]
    },
    {
        question: "How can you create a CSS class that applies a border to an element with a solid red color?",
        answers: [
            { text: ".red-border { border: 1px solid red; }", correct: true },
            { text: ".border-red { border-color: red; }", correct: false },
            { text: ".solid-red { border-style: solid; color: red; }", correct: false },
            { text: ".red-outline { outline: 1px solid red; }", correct: false },
        ]
    },
    {
        question: "What is the CSS property for controlling the spacing between lines of text?",
        answers: [
            { text: "line-height", correct: true },
            { text: "text-spacing", correct: false },
            { text: "line-spacing", correct: false },
            { text: "text-line-height", correct: false },
        ]
    },
    {
        question: "How can you hide an element from the page layout without removing it from the DOM using CSS?",
        answers: [
            { text: "Using display: none;", correct: false },
            { text: "Using visibility: hidden;", correct: true },
            { text: "Using opacity: 0;", correct: false },
            { text: "Using position: absolute;", correct: false },
        ]
    },
    {
        question: "What is the CSS property for setting the maximum width of an element?",
        answers: [
            { text: "max-width", correct: true },
            { text: "min-width", correct: false },
            { text: "width-max", correct: false },
            { text: "element-width-max", correct: false },
        ]
    },
    {
        question: "What is the purpose of the 'float' property in CSS?",
        answers: [
            { text: "To control the alignment of elements within their containing elements", correct: true },
            { text: "To control the visibility of elements", correct: false },
            { text: "To control the size of elements", correct: false },
            { text: "To control the font style of elements", correct: false },
        ]
    },
    {
        question: "How can you apply a CSS rule to an HTML element with the class 'highlight' when the mouse hovers over it?",
        answers: [
            { text: ".highlight:hover { /* CSS styles */ }", correct: true },
            { text: ".highlight:mouse { /* CSS styles */ }", correct: false },
            { text: ".highlight:hovered { /* CSS styles */ }", correct: false },
            { text: ".hover-highlight { /* CSS styles */ }", correct: false },
        ]
    },
    {
        question: "Which CSS property is used to create a transition effect on an element's hover state?",
        answers: [
            { text: "transform", correct: false },
            { text: "animation", correct: false },
            { text: "hover-transition", correct: false },
            { text: "transition", correct: true },
        ]
    },
    {
        question: "What does the 'box-sizing' property in CSS do?",
        answers: [
            { text: "Sets the size of the element's border", correct: false },
            { text: "Determines the box model used for layout", correct: false },
            { text: "Specifies the element's display type", correct: false },
            { text: "Defines how the size of an element is calculated", correct: true },
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
           
            { text: "box-shadow", correct: false },
            { text: "font-shadow", correct: false },
            { text: "text-shadow", correct: true },
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
            { text: "Real Web Development", correct: false },
            { text: "Responsive Web Design", correct: true },
            { text: "Relative Web Design", correct: false },
            { text: "Rapid Web Development", correct: false },
        ]
    },
    
    {
        question: "Which CSS property is used to create a transition effect on an element's hover state?",
        answers: [
            { text: "transform", correct: false },
            { text: "animation", correct: false },
            { text: "hover-transition", correct: false },
            { text: "transition", correct: true },
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
    question: "What is JavaScript 'strict mode,' and why is it used in modern development?",
    answers: [
        { text: "Tool for animations", correct: false },
        { text: "Enforces coding practices", correct: true },
        { text: "No restrictions", correct: false },
        { text: "Enable debugging", correct: false },
    ]
},
{
    question: "What is a JavaScript 'arrow function,' and how does it differ from traditional functions?",
    answers: [
        { text: "For mathematical calculations", correct: false },
        { text: "For asynchronous operations", correct: false },
        { text: "More concise, inherits 'this'", correct: true },
        { text: "No difference", correct: false },
    ]
},
{
    question: "Explain the concept of 'closures' in JavaScript.",
    answers: [
        { text: "Functions with curly braces", correct: false },
        { text: "Defined inside other functions", correct: false },
        { text: "Preserves variables from outer function", correct: true },
        { text: "No access to external variables", correct: false },
    ]
},
{
    question: "What is the 'this' keyword in JavaScript, and how does its value change?",
    answers: [
        { text: "Refers to the global object", correct: false },
        { text: "Refers to the current object", correct: true },
        { text: "Only in arrow functions", correct: false },
        { text: "Reserved for custom objects", correct: false },
    ]
},
{
    question: "Explain event delegation in JavaScript and its usefulness.",
    answers: [
        { text: "Handling exceptions", correct: false },
        { text: "Attached to individual elements", correct: true },
        { text: "Managing authentication", correct: false },
        { text: "Managing asynchronous operations", correct: false },
    ]
},
{
    question: "Purpose of 'bind' method in JavaScript and how it differs from 'call' and 'apply'?",
    answers: [
        { text: "Create new function, specific 'this' context", correct: true },
        { text: "Call with specific 'this' context", correct: false },
        { text: "Call with 'this' context and arguments", correct: false },
        { text: "Execute function immediately", correct: false },
    ]
},
{
    question: "What are Promises in JavaScript and their role in handling asynchronous operations?",
    answers: [
        { text: "Represent future values", correct: true },
        { text: "Create animations", correct: false },
        { text: "Declare variables", correct: false },
        { text: "Define classes", correct: false },
    ]
},
{
    question: "What is the 'Event Loop' in JavaScript and its role in non-blocking I/O?",
    answers: [
        { text: "Create animations", correct: false },
        { text: "Handles asynchronous tasks", correct: true },
        { text: "Define custom events", correct: false },
        { text: "Block I/O operations", correct: false },
    ]
},
{
    question: "Purpose of the 'reduce' function in JavaScript and how it processes arrays?",
    answers: [
        { text: "Process arrays by applying a function", correct: true },
        { text: "Filter elements", correct: false },
        { text: "Transform into a string", correct: false },
        { text: "Add elements to the end", correct: false },
    ]
},
{
    question: "Difference between 'undefined' and 'null' in JavaScript and when to use each?",
    answers: [
        { text: "Interchangeable", correct: false },
        { text: "'Undefined' for future value, 'null' for intentional absence", correct: true },
        { text: "'Undefined' for intentional absence, 'null' for unspecified value", correct: false },
        { text: "Both indicate variable deletion", correct: false },
    ]
},
{
    question: "Explain 'hoisting' in JavaScript and provide an example.",
    answers: [
        { text: "Compressing code", correct: false },
        { text: "Security feature", correct: false },
        { text: "Declarations moved to top", correct: true },
        { text: "Hiding code", correct: false },
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
  
  
  
  
  let currentQuestions = questions; // Initially use the first set of questions


 const questionsElement = document.getElementById("question");
 const answerButtons = document.getElementById("answer-button");
 const nextButton = document.getElementById("next-btn");
 const homeButton = document.getElementById("home-btn");

let currentQuestionnum = 0;
let score = 0;

function startQuiz(){
    currentQuestionnum = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    startTimer();
    
    

}


function showQuestion() {
    resetState();

    // Shuffle the currentQuestions array before getting the current question
    shuffleArray(currentQuestions);

    if (currentQuestionnum < 15) {
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
        timeLeft = 15;
    } else {
        // Display final score or completion message
        
        showScore();
    }
}


// Function to shuffle an array (Fisher-Yates shuffle algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

  function switchQuestionSet(questionSet) {
    currentQuestions = questionSet;
    currentQuestionnum = 0;
    score = 0;
    showQuestion();
    switchQuestionSet.style.display = 'none'
  }
  
  const switchQuestionsButton1 = document.getElementById("switch-questions-btn-1");
const switchQuestionsButton2 = document.getElementById("switch-questions-btn-2");
const switchQuestionsButton3 = document.getElementById("switch-questions-btn-3");


switchQuestionsButton1.addEventListener("click", () => {
  switchQuestionSet(questions);
});

switchQuestionsButton2.addEventListener("click", () => {
  switchQuestionSet(questions2);
});

switchQuestionsButton3.addEventListener("click", () => {
  switchQuestionSet(questions3);
});


function resetState(){
    nextButton.style.display = "none"
    homeButton.style.display = "none"
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
    const totalQuestions = 15; // Set the total number of questions to 10
   
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
    homeButton.style.display = "block";
    
}
  
    




function handleNextButton(){
    currentQuestionnum++;
    if(currentQuestionnum < 15){
        showQuestion();
        clearInterval(timerInterval);
        timerDisplay.style.display = "block";// show timer on next question
        startTimer(); // start timer for next question.
        
    }else{
        
        showScore();
      startQuiz  
    }


}

 nextButton.addEventListener("click", ()=>{
    if(currentQuestionnum < 15){
        timerDisplay.style.display = "none";
        handleNextButton();
    }else{
        startQuiz()
        startTimer();
        timerDisplay.style.display = "none";  // hide timer when quiz end.
    }
 });
 let timeLeft = 15; // Set the initial time in seconds
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

