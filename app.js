let currentCategory = "";
let score = 0;
let currentIndex = 0;

function startCategory(cat) {
    currentCategory = cat;
    score = 0;
    currentIndex = 0;

    document.getElementById("categoryBox").style.display = "none";
    document.getElementById("quizBox").style.display = "block";

    loadQuestion();
}

function loadQuestion() {
    let q = QUESTIONS[currentCategory][currentIndex];

    document.getElementById("question").innerText = q.q;

    for (let i = 0; i < 4; i++) {
        document.getElementById("btn" + i).innerText = q.a[i];
    }
}

function checkAnswer(selected) {
    if (selected === QUESTIONS[currentCategory][currentIndex].correct) {
        score++;
    }

    document.getElementById("score").innerText = "Score: " + score;

    currentIndex++;

    if (currentIndex >= QUESTIONS[currentCategory].length) {
        alert("Quiz Complete! Your Score: " + score);
        document.location.reload();
    }

    loadQuestion();
}
