const quizData = [
    
    {
        question: "1) The statement a===b refers to ?",
        a: "Both a and b are equal in value, type and reference address",
        b: "Both a and b are equal in value",
        c: "Both a and b are equal in value and type",
        d: "There is no such statement",
       
        correct: "c",
      },
     {
        question: "2) Why event handlers is needed in JS?",
        a:"Allows JavaScript code to alter the behaviour of windows",
        b:  "Adds innerHTML page to the code",
        c: "Change the server location",
        d:  "Performs handling of exceptions and occurrences",
        correct: "a",
     },
      {
        question: "3) The pop() method of the array does which of the following task?",
        a:"decrements the total length by 1" ,
        b: "increments the total length by 1",
        c:"prints the first element but no effect on the length",
        d: " updates the element",
        correct: "a",
     },
     {
        question: "4) The primary purpose of the array map() function is that it?",
        a: "maps the elements of another array into itself",
        b: "passes each element of the array and returns the necessary mapped elements",
        c: "passes each element of the array on which it is invoked to the function you specify, and returns an array containing the values returnedby that function ",
        d: "pass the elements of the array into another array",
        correct: "c",

      },
      {
        question: "5) The 'var' and 'function' are?",
        a: "Keywords",
        b: "Declaration statements",
        c: "Data types",
        d: "Prototypes",
        correct: "b",
        
       },
       {
        question: "6) JavaScript can be written_____?",
        a:"directly into JS file and included into HTML",
        b:"directly on the server page",
        c:"directly into HTML pages",
        d:"directly into the css file",
        correct: "a",
       },
       {
        question: "7) What is the fundamental rule of lexical scoping?",
        a:"Functions are declared in the scope",
        b:"Functions are executed using scope chain",
        c:"Functions are declared outside the scope",
        d:"Variables are declared within the function",
        correct: "b",
       },
    
];
const quiz = document.getElementById("quiz");
const answersA1 = document.querySelectorAll(".answer");
const questionA1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitbtn = document.getElementById("submit");

let currentQuiz = 0
let totalScore = 0

loadQuiz()

function loadQuiz(){
     
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionA1.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers(){
    answersA1.forEach(answersA => answersA.checked = false)
}
function getSelected(){
    let answer
    answersA1.forEach(answersA1 => {
        if(answersA1.checked){
            answer = answersA1.id
        }
    })
    return answer
}

submitbtn.addEventListener("click", ()=> {
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            totalScore++
        }
        currentQuiz++
        if(currentQuiz<quizData.length){
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2> You answered ${totalScore}/${quizData.length} questions correctly</h2>

            <button onclick = "location.reload()"> Reload </button>
            `
        }
    }
})