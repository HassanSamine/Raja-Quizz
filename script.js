const questions = [
    {
        question: "What is the full name of the football club known as Raja Casablanca?",
        answers: [
            { text: "Raja Club Athletic", correct: true },
            { text: "Raja Club de Casablanca", correct: false },
            { text: "Raja Casablanca Athletic", correct: false },
            { text: "Raja Athletic Casablanca ", correct: false },


        ]
    },

    {
        question: "In what year was Raja Casablanca founded?",
        answers: [
            { text: "1945", correct: false },
            { text: "1949", correct: true },
            { text: "1953", correct: false },
            { text: "1957", correct: false },

        ]

    },

    {
        question: "What is the name of Raja Casablanca's home stadium?",
        answers: [
            { text: "Stade Mohammed V", correct: true },
            { text: "Stade de Marrakech", correct: false },
            { text: "Stade Moulay Abdellah", correct: false },
            { text: "Stade Fès", correct: false }
        ]
    },

    {
        question: "What is the nickname of Raja Casablanca?",
        answers: [
            { text: "The Green Eagles", correct: true },
            { text: "The Red Lions", correct: false },
            { text: "The Blue Sharks", correct: false },
            { text: "The White Tigers", correct: false },

        ]

    },

    {
        question: "Who is the top scorer for Raja Casablanca in recorded history?",
        answers: [
            { text: "Salaheddine Bassir", correct: false },
            { text: "Mohsine Moutouali", correct: false },
            { text: "Ben Malango", correct: false },
            { text: "Mouhssine Iajour", correct: true },

        ]

    },

    {
        question: "In which year did Raja Casablanca win their first Moroccan League Title?",
        answers: [
            { text: "1950", correct: false },
            { text: "1988", correct: true },
            { text: "1987", correct: false },
            { text: "1989", correct: false },

        ]

    },
    {
        question: "Who was the coach that led Raja Casablanca to win the 2012 Botola, which qualified them for the 2013 FIFA Club World Cup?",
        answers: [
            { text: "Mohammed Fakhir", correct: true },
            { text: "Faouzi Benzarti", correct: false },
            { text: "Rachid Taoussi", correct: false },
            { text: "Henri Michel", correct: false },

        ]

    },
    {
        question: "Which of these players never played for Raja Casablanca?",
        answers: [
            { text: "Omar Najdi", correct: false },
            { text: "Ighodaro Osaguona", correct: false },
            { text: "Abdelfattah Hadraf", correct: true },
            { text: "Talal El Karkouri", correct: false },

        ]

    },
    {
        question: "Which of these managers never coached for Raja Casablanca?",
        answers: [
            { text: "Vahid Halilhodžić", correct: false },
            { text: "Bertrand Marchand", correct: false },
            { text: "Rubén Albés", correct: true },
            { text: "Henri Michel", correct: false },

        ]

    },
    {
        question: "Who was the coach that led Raja Casablanca to their third champions league title in 1999?",
        answers: [
            { text: "Vahid Halilhodžić", correct: false },
            { text: "Bertrand Marchand", correct: false },
            { text: "Mohammed Fakhir", correct: false },
            { text: "Oscar Fulloné", correct: true },

        ]

    },


];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    answerButtons.innerHTML = '';
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });

}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();

    } else {
        showScore();
    }
}
function showScore() {
    answerButtons.innerHTML = '';
    if (score < questions.length / 2) {
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}! - Yakma Wydadi?`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    }
    else if (score === questions.length) {
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}! - Bhal le prasson nta Rajawi 7a9i9i`;
        nextButton.innerHTML = 'Play Again';
        nextButton.style.display = 'block';
    } else if (score >= questions.length / 2) {
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}! - Ma3lkch`;
        nextButton.innerHTML = 'Play Again';
        nextButton.style.display = 'block';
    } else {
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = 'Play Again';
        nextButton.style.display = 'block';
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }

})

startQuiz();



