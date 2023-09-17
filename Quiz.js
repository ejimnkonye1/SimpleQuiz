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
        question: "Explain the purpose of the HTML <meta> tag and provide an example of how it can be used for SEO optimization.",
        answers: [
            { text: "The <meta> tag is used to define the structure of an HTML document.", correct: false },
            { text: "The <meta> tag is used to embed audio files in a webpage.", correct: false },
            { text: "The <meta> tag is used to create interactive forms.", correct: false },
            { text: "The <meta> tag is used to provide metadata about the HTML document, including keywords and descriptions for SEO optimization.", correct: true },
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
        question: "Explain the difference between the HTML attributes 'src' and 'href', and provide an example of when to use each.",
        answers: [
            { text: "Both 'src' and 'href' are used interchangeably to define the source of an image.", correct: false },
            { text: "'src' is used for creating interactive forms, while 'href' is used for defining the structure of an HTML document.", correct: false },
            { text: "'src' is used for defining the source of an image or other media files, such as <img src='image.jpg'>.", correct: true },
            { text: "'href' is used for defining the hyperlink reference in elements like anchor tags, as in <a href='https://example.com'>Example</a>.", correct: true },
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
        question: "Explain the purpose of the HTML5 'canvas' element and provide an example of how it can be used to draw graphics.",
        answers: [
            { text: "The 'canvas' element is used for embedding audio files in a webpage.", correct: false },
            { text: "The 'canvas' element is used to define the structure of an HTML document.", correct: false },
            { text: "The 'canvas' element is used for creating hyperlinks in an HTML document.", correct: false },
            { text: "The 'canvas' element is used to draw graphics, such as charts, graphs, and interactive animations, using JavaScript.", correct: true },
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
        question: "What is the HTML5 'contenteditable' attribute, and how can it be used to create editable content on a webpage?",
        answers: [
            { text: "The 'contenteditable' attribute is used to create interactive forms.", correct: false },
            { text: "The 'contenteditable' attribute is used to define the structure of an HTML document.", correct: false },
            { text: "The 'contenteditable' attribute is used for creating hyperlinks in an HTML document.", correct: false },
            { text: "The 'contenteditable' attribute is used to make an element, such as a <div> or a <p>, editable by the user.", correct: true },
        ]
    },
    {
        question: "Explain the purpose of the HTML 'aria-label' attribute and how it contributes to accessibility in web development.",
        answers: [
            { text: "The 'aria-label' attribute is used to specify the width of an element in pixels.", correct: false },
            { text: "The 'aria-label' attribute is used to define the structure of an HTML document.", correct: false },
            { text: "The 'aria-label' attribute is used to provide alternative text for images.", correct: false },
            { text: "The 'aria-label' attribute is used to provide a human-readable label or description for an element when a text label is not visible.", correct: true },
        ]
    },
    {
        question: "What are semantic HTML elements, and why are they important in modern web development?",
        answers: [
            { text: "Semantic HTML elements are used to define the structure of an HTML document.", correct: false },
            { text: "Semantic HTML elements are used for creating hyperlinks in an HTML document.", correct: false },
            { text: "Semantic HTML elements are used to specify the width of an element in pixels.", correct: false },
            { text: "Semantic HTML elements are HTML tags that carry meaning and describe the content they enclose. They are important in modern web development because they provide a clear and structured way to describe the purpose of different parts of a webpage.", correct: true },
        ]
    },
    {
        question: "Explain the purpose of the HTML 'defer' and 'async' attributes when including external JavaScript files, and when would you use each?",
        answers: [
            { text: "The 'defer' attribute is used to create interactive forms.", correct: false },
            { text: "The 'async' attribute is used to specify the width of an element in pixels.", correct: false },
            { text: "The 'defer' and 'async' attributes are used to define the structure of an HTML document.", correct: false },
            { text: "The 'defer' and 'async' attributes are used when including external JavaScript files. 'defer' indicates that the script should be executed after the HTML document is parsed, preserving the order of execution. 'async' indicates that the script can be executed asynchronously without blocking HTML parsing. You would use 'defer' when script order matters or when the script relies on the DOM structure. 'async' can be used when script order doesn't matter and the script can run independently.", correct: true },
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
        question: "What is the CSS 'box-shadow' property, and how can it be used to create visual effects in web design? Provide an example.",
        answers: [
            { text: "The 'box-shadow' property is used to add a shadow effect to elements. It takes values for the horizontal and vertical offsets, blur radius, spread radius, and shadow color. For example, 'box-shadow: 3px 3px 5px 0px #888888;' creates a subtle shadow effect for an element.", correct: true },
            { text: "The 'box-shadow' property is used to define the layout of elements in a web page.", correct: false },
            { text: "The 'box-shadow' property is used for text formatting in CSS.", correct: false },
            { text: "The 'box-shadow' property has no practical use in web design.", correct: false },
        ]
    },
    
    {
        question: "Explain the concept of CSS pseudo-elements, and provide examples of when and how they are used.",
        answers: [
            { text: "CSS pseudo-elements are used to style specific parts of an element. They start with a double colon (::) and allow you to add content or style elements such as '::before' and '::after'. For example, '::before' can be used to add decorative content before an element, and '::first-line' can style the first line of text within an element.", correct: true },
            { text: "CSS pseudo-elements are used to define the layout of elements in a web page.", correct: false },
            { text: "CSS pseudo-elements are used to control the visibility of elements.", correct: false },
            { text: "CSS pseudo-elements are not valid CSS selectors.", correct: false },
        ]
    },
    
    
    
    {
        question: "Explain the concept of CSS grid layout, and how does it differ from 'flexbox'? Provide an example of when to use CSS grid.",
        answers: [
            { text: "CSS grid layout is a two-dimensional layout system that allows you to create grid structures for complex layouts. Unlike 'flexbox,' which is one-dimensional, grid layout works in both rows and columns, making it suitable for grid-based designs like magazine layouts or responsive grids for content positioning.", correct: true },
            { text: "CSS grid layout is primarily used for defining the layout of text elements in CSS.", correct: false },
            { text: "CSS grid layout is used for creating interactive forms.", correct: false },
            { text: "CSS grid layout has no practical use in web design.", correct: false },
        ]
    },
    
    {
        question: "What is the 'z-index' property in CSS, and how does it affect the stacking order of elements on a web page? Provide an example.",
        answers: [
            { text: "The 'z-index' property controls the stacking order of elements with a 'position' property other than 'static.' Elements with a higher 'z-index' value will appear on top of elements with a lower value. For example, 'z-index: 1;' places an element above an element with 'z-index: 0;'.", correct: true },
            { text: "The 'z-index' property controls the font size of text elements in CSS.", correct: false },
            { text: "The 'z-index' property has no impact on the stacking order of elements.", correct: false },
            { text: "The 'z-index' property is used for creating animations in CSS.", correct: false },
        ]
    },
    
   
    
    {
        question: "How can you include an external CSS file in an HTML document?",
        answers: [
            { text: "< style src='styles.css'></style>", correct: false },
            { text: "< link rel='stylesheet' href='styles.css'>", correct: true },
            { text: "< css>styles.css</css>", correct: false },
            { text: "< script src='styles.css'></script>", correct: false },
        ]
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: [
            { text: "text-color", correct: false },
            { text: "font-color", correct: false },
            { text: "color", correct: true },
            { text: "text-style", correct: false },
        ]
    },
    {
        question: "What is responsive web design, and how does CSS play a crucial role in creating responsive layouts? Provide an example of a responsive design technique.",
        answers: [
         
            { text: "Responsive web design is primarily about creating interactive forms.", correct: false },
            { text: "Responsive web design is used for defining the layout of text elements in CSS.", correct: false },
            { text: "Responsive web design is an approach that makes web pages render well on various devices and window or screen sizes. CSS media queries are used to apply different styles based on screen characteristics. For example, you can use a media query to change the layout of a navigation menu from horizontal to vertical when the screen width is below a certain threshold.", correct: true },
            { text: "Responsive web design has no impact on web development.", correct: false },
        ]
    },
    
    {
        question: "Explain the CSS 'transition' property and its role in creating smooth animations on web pages. Provide an example of a simple CSS transition.",
        answers: [
            { text: "The 'transition' property is used to define the font size of text elements in CSS.", correct: false },
            { text: "The 'transition' property in CSS is used to control the smoothness of animations when an element changes from one state to another (e.g., hover effects). It defines the duration, timing function, delay, and properties to transition. For example, 'transition: opacity 0.3s ease-in-out;' makes the opacity change smoothly over 0.3 seconds.", correct: true },
            { text: "The 'transition' property is used for creating interactive forms.", correct: false },
            { text: "The 'transition' property has no impact on web development.", correct: false },
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
        question: "What is the JavaScript 'strict mode,' and why is it used in modern JavaScript development?",
        answers: [
            { text: "JavaScript 'strict mode' is a tool for creating animations in JavaScript.", correct: false },
            { text: "JavaScript 'strict mode' is a way to opt into a restricted variant of JavaScript that enforces better coding practices. It helps catch common coding mistakes and 'unsafe' actions and improves runtime performance in some cases. It is used in modern JavaScript development to write cleaner, safer, and more reliable code.", correct: true },
            { text: "JavaScript 'strict mode' is a feature that allows JavaScript code to run without any restrictions.", correct: false },
            
            { text: "JavaScript 'strict mode' is used to enable debugging features in the browser.", correct: false },
        ]
    },
    {
        question: "What is a JavaScript 'arrow function,' and how does it differ from traditional function expressions?",
        answers: [
       
            { text: "A JavaScript 'arrow function' is used exclusively for mathematical calculations.", correct: false },
            { text: "A JavaScript 'arrow function' can only be used for asynchronous operations.", correct: false },
            { text: "A JavaScript 'arrow function' is a feature that allows JavaScript code to run without any restrictions.", correct: false },
            { text: "A JavaScript 'arrow function' is a more concise way to write functions. It has a shorter syntax and doesn't bind its own 'this' value. It inherits the 'this' value from its enclosing (containing) function or context. This is different from traditional function expressions, which have their 'this' value defined when the function is called.", correct: true },
        ]
    },
    {
        question: "Explain the concept of 'closures' in JavaScript and provide an example of how they can be used in practical applications.",
        answers: [
            
            { text: "Closures are functions that only contain closed curly braces {}.", correct: false },
            { text: "Closures are functions that are defined inside other functions.", correct: false },
            { text: "Closures refer to functions that have access to variables from their containing (enclosing) function's scope. They 'close over' these variables, preserving them even after the outer function has finished executing. Closures are useful for data encapsulation and maintaining state in JavaScript. Here's an example:\n\n```javascript\nfunction outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    return count;\n  };\n}\nconst counter = outer();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\n```", correct: true },
            { text: "Closures are functions that have no access to external variables.", correct: false },
        ]
    },
    {
        question: "What is the 'this' keyword in JavaScript, and how does its value change in different contexts?",
        answers: [
            { text: "The 'this' keyword always refers to the global object (e.g., 'window' in a browser).", correct: false },
            { text: "The 'this' keyword refers to the object that is currently executing the function. Its value can change based on how a function is called, such as with dot notation or 'call' and 'apply' methods.", correct: true },
            { text: "The 'this' keyword can only be used inside arrow functions in JavaScript.", correct: false },
            { text: "The 'this' keyword is reserved for defining custom objects in JavaScript.", correct: false },
        ]
    },
    {
        question: "Explain the event delegation pattern in JavaScript and why it is useful in web development.",
        answers: [
            { text: "Event delegation is a pattern for handling exceptions in JavaScript applications.", correct: false },
            { text: "Event delegation is a pattern where events are directly attached to individual elements, reducing the need for event listeners. This pattern is useful for optimizing performance in applications with many dynamic elements, as it avoids the overhead of attaching listeners to each element.", correct: true },
            { text: "Event delegation is a pattern for delegating user authentication to external services.", correct: false },
          
            { text: "Event delegation is a pattern for managing asynchronous operations in JavaScript.", correct: false },
        ]
    },
    {
        question: "What is the purpose of the JavaScript 'bind' method, and how does it differ from 'call' and 'apply'?",
        answers: [
            { text: "The 'bind' method is used to create a new function with a specific 'this' context and any desired arguments. Unlike 'call' and 'apply', it does not immediately invoke the function; instead, it returns a new function that can be called later.", correct: true },
            { text: "The 'bind' method is used to call a function with a specific 'this' context and arguments, similar to 'call'.", correct: false },
            { text: "The 'bind' method is used to call a function with a specific 'this' context and an array of arguments, similar to 'apply'.", correct: false },
            { text: "The 'bind' method is used to execute a function immediately, without specifying 'this' context or arguments.", correct: false },
        ]
    },
    {
        question: "What are Promises in JavaScript, and how do they help in handling asynchronous operations?",
        answers: [
            { text: "Promises are a way to represent values that might not be available yet but will be at some point in the future. They help manage asynchronous operations by providing a more structured and readable way to handle callbacks and error handling.", correct: true },
            { text: "Promises are a way to create animated effects in JavaScript.", correct: false },
            { text: "Promises are used to declare variables in JavaScript.", correct: false },
            { text: "Promises are used to define classes in JavaScript.", correct: false },
        ]
    },
   
    {
        question: "What is the 'Event Loop' in JavaScript, and how does it enable non-blocking I/O operations?",
        answers: [
            { text: "The 'Event Loop' is a core concept in JavaScript's concurrency model. It allows JavaScript to perform non-blocking I/O operations by handling asynchronous tasks in the background and executing callback functions when those tasks are completed. This prevents the main thread from getting blocked and keeps the application responsive.", correct: true },
            { text: "The 'Event Loop' is a tool for creating animations in JavaScript.", correct: false },
            { text: "The 'Event Loop' is a feature for defining custom events in JavaScript.", correct: false },
            { text: "The 'Event Loop' is a way to block I/O operations in JavaScript.", correct: false },
        ]
    },
   
    
   
    {
        question: "What is the purpose of the JavaScript 'reduce' function, and how is it used to process arrays?",
        answers: [
            { text: "The 'reduce' function is used to process arrays by applying a provided function to accumulate a single result. It iterates through the array's elements and accumulates a value (e.g., sum or product) based on the function's logic. For example:\n\n```javascript\nconst numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);\nconsole.log(sum); // 15\n```", correct: true },
            { text: "The 'reduce' function is used to filter out elements from an array.", correct: false },
            { text: "The 'reduce' function is used to transform an array into a string.", correct: false },
            { text: "The 'reduce' function is used to add new elements to the end of an array.", correct: false },
        ]
    },
    {
        question: "What is the difference between 'undefined' and 'null' in JavaScript, and when would you use each?",
        answers: [
            { text: "'Undefined' represents a variable that has been declared but has not been assigned a value. 'Null' represents an intentional absence of any object value. You might use 'undefined' when a variable is expected to have a value later, and 'null' when you want to indicate that a variable intentionally has no value or that an object property should be empty.", correct: true },
            { text: "'Undefined' and 'null' are the same in JavaScript and can be used interchangeably.", correct: false },
            { text: "'Undefined' represents an intentional absence of a value, while 'null' represents a variable with an unspecified value.", correct: false },
            { text: "'Undefined' and 'null' both indicate that a variable has been deleted.", correct: false },
        ]
    },
    {
        question: "Explain the concept of 'hoisting' in JavaScript and provide an example of how it works.",
        answers: [
           
            { text: "Hoisting is a process where JavaScript code is compressed to improve performance.", correct: false },
            { text: "Hoisting is a security feature in JavaScript that prevents certain actions.", correct: false },
            { text: "Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during compilation. This means that you can use a variable or function before it is declared in your code. For example:\n\n```javascript\nconsole.log(x); // undefined\nvar x = 5;\n```", correct: true },
            { text: "Hoisting is a way to hide JavaScript code from view.", correct: false },
        ]
    },
    {
        question: "What is the 'Event Loop' in JavaScript, and how does it enable non-blocking I/O operations?",
        answers: [
            { text: "The 'Event Loop' is a tool for creating animations in JavaScript.", correct: false },
            { text: "The 'Event Loop' is a core concept in JavaScript's concurrency model. It allows JavaScript to perform non-blocking I/O operations by handling asynchronous tasks in the background and executing callback functions when those tasks are completed. This prevents the main thread from getting blocked and keeps the application responsive.", correct: true },
            { text: "The 'Event Loop' is a feature for defining custom events in JavaScript.", correct: false },
            { text: "The 'Event Loop' is a way to block I/O operations in JavaScript.", correct: false },
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

    if (currentQuestionnum < 10) {
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
    const totalQuestions = 10; // Set the total number of questions to 10
   
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
    if(currentQuestionnum < 10){
        showQuestion();
        timerDisplay.style.display = "block";// show timer on next question
        startTimer(); // start timer for next question.
        
    }else{
        
        showScore();
    }


}

 nextButton.addEventListener("click", ()=>{
    if(currentQuestionnum < questions.length){
        timerDisplay.style.display = "none";
        handleNextButton();
    }else{
        startQuiz()
        startTimer();
        timerDisplay.style.display = "none";  // hide timer when quiz end.
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

