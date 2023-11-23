const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
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

let currentQuiz = 0
let score = 0

loadQuiz();

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    $(".question").text(currentQuizData.question);
    $("#a-text").text(currentQuizData.a);
    $("#b-text").text(currentQuizData.b);
    $("#c-text").text(currentQuizData.c);
    $("#d-text").text(currentQuizData.d);
}

function deselectAnswers() {
    $(".answer").each((ind, answerEl) => {
        answerEl.checked = false
    });
}

function getSelected() {
    let answer;

    $(".answer").each((ind, elem) => {
        if(elem.checked) {
            answer = elem.id
        }
    })

    return answer;
}

$("#submit").on('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++;
        console.log("hi");

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            $(".quiz-question").html(`
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

            <button class = "submit" onclick="location.reload()">Reload</button>
        `);
        }
    }
})