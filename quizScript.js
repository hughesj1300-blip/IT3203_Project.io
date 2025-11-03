function evaluateQuiz() {
    const totalQuestions = 5;
    const passPct = 70;
    let correctCount = 0;
    const q1answer = 2;
    const q5answer =  ["correct", "correct", "correct"];
    let q5selection = [];

    if (quizForm.q1.value == q1answer) {
        correctCount += 1;
        q1feedback.innerHTML = "<strong>Correct</strong>";
        q1feedback.style.color = "green";
    }
    else {
        q1feedback.innerHTML = "<strong>Incorrect</strong><br><span class='answer'>Correct answer: 2</span>";
        q1feedback.style.color = "red";
    }

    if (document.querySelectorAll("input[name='q2']:checked")[0].value == "correct") {
        correctCount += 1;
        q2feedback.innerHTML = "<strong>Correct</strong>";
        q2feedback.style.color = "green";
    }
    else {
        q2feedback.innerHTML = "<strong>Incorrect</strong><br><span class='answer'>Correct answer: </span>";
        q2feedback.style.color = "red";
    }

    if (document.querySelectorAll("input[name='q3']:checked")[0].value == "correct") {
        correctCount += 1;
        q3feedback.innerHTML = "<strong>Correct</strong>";
        q3feedback.style.color = "green";
    }
    else {
        q3feedback.innerHTML = "<strong>Incorrect</strong><br><span class='answer'>Correct answer: </span>";
        q3feedback.style.color = "red";
    }
    
    if (document.querySelectorAll("input[name='q4']:checked")[0].value == "correct") {
        correctCount += 1;
        q4feedback.innerHTML = "<strong>Correct</strong>";
        q4feedback.style.color = "green";
    }
    else {
        q4feedback.innerHTML = "<strong>Incorrect</strong><br><span class='answer'>Correct answer: </span>";
        q4feedback.style.color = "red";
    }
    
    for (let i = 0; i < document.querySelectorAll("input[name='q5']:checked").length; i++) {
        q5selection.push(document.querySelectorAll("input[name='q5']:checked")[i].value);
    }
    
    if (q5selection.toString() == q5answer.toString()) {
        correctCount += 1;
        q5feedback.innerHTML = "<strong>Correct</strong>";
        q5feedback.style.color = "green";
    }
    else {
        q5feedback.innerHTML = "<strong>Incorrect</strong><br><span class='answer'>Correct answers: </span>";
        q5feedback.style.color = "red";
    }

    const pct = Math.round((correctCount / totalQuestions) * 100);
    const passed = pct >= passPct;

    results.innerHTML = `
    <h2 style="margin:0 0 8px">Results</h2>
    <div class="summary ${passed ? 'pass' : 'fail'}">
    <strong>${passed ? '✅ Pass' : '❌ Fail'}</strong>
    <div>Total Score: ${correctCount}/${totalQuestions} (${pct}%)</div>
    </div>`;
    results.style.display = 'block';
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetQuiz() {
    q1feedback.innerHTML = ""
    q2feedback.innerHTML = ""
    q3feedback.innerHTML = ""
    q4feedback.innerHTML = ""
    q5feedback.innerHTML = ""
    results.style.display = 'none';
}