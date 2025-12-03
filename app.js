let currentCategory = "";
let score = 0;
let currentIndex = 0;

function startCategory(cat) {

    // Check if category exists and has questions
    if (!QUESTIONS[cat] || QUESTIONS[cat].length === 0) {
        alert("No questions added in this category yet!");
        return;
    }

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
        document.getElementById("btn" + i).style.backgroundColor = "#4da3ff"; // reset color
    }
}

function checkAnswer(selected) {

    let correctAns = QUESTIONS[currentCategory][currentIndex].correct;

    if (selected === correctAns) {
        score++;
        document.getElementById("btn" + selected).style.backgroundColor = "#4CAF50"; // green
    } else {
        document.getElementById("btn" + selected).style.backgroundColor = "#ff4d4d"; // red
        document.getElementById("btn" + correctAns).style.backgroundColor = "#4CAF50";
    }

    document.getElementById("score").innerText = "Score: " + score;

    // Wait before going to next question
    setTimeout(() => {
        currentIndex++;

        if (currentIndex >= QUESTIONS[currentCategory].length) {
            alert("Quiz Complete! Your Score: " + score);
            document.location.reload();
            return;
        }

        loadQuestion();

    }, 700);
}
