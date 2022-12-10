const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct:  "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
const quizBody = document.querySelector(".main-div");
const question = document.querySelector("#question")
const answer = document.querySelectorAll(".answer")
const opt1 = document.querySelector("#a-text")
const opt2 = document.querySelector("#b-text")
const opt3 = document.querySelector("#c-text")
const opt4 = document.querySelector("#d-text")
const submtBtn = document.querySelector("#submit")

let currentQuestion = 0;
let score = 0;
showQuiz();
function showQuiz(){
    deselectAnswers();
    question.innerHTML = quizData[currentQuestion].question;
    opt1.innerHTML = quizData[currentQuestion].a;
    opt2.innerHTML = quizData[currentQuestion].b;
    opt3.innerHTML = quizData[currentQuestion].c;
    opt4.innerHTML = quizData[currentQuestion].d;

}
function deselectAnswers(){
    answer.forEach(ans => {
        ans.checked = false;
        
    });
}
function selectedAnswer(){
    let selectedAnswer;
    answer.forEach(ans=>{
        if (ans.checked){
            selectedAnswer = ans.id;
        }
    })
    return selectedAnswer;

}


submtBtn.addEventListener("click",()=>{
    let answer = selectedAnswer();

    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < quizData.length) {
            showQuiz();
        } else {
            quizBody.innerHTML = `
                <h2>You answered correctly of ${score}/${quizData.length} questions.</h2>
                
                <button class="reload" onclick="location.reload()">Reload</button>
            `;
        }
    }
})