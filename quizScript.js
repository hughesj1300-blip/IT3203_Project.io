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

/*
submitBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent page reload
    const fd = new FormData(document.getElementById("quizForm"));
    let correctCount = 0;
    const totalQuestions = Object.keys(ANSWERS).length;
    const feedback = [];


    const a1raw = (document.getElementById('q1').value || '').trim();
    const a1 = a1raw.replace(/\D+/g,'');
    const ok1 = a1 === ANSWERS.q1.correct;
    correctCount += ok1 ? 1 : 0;
    feedback.push({ id:'Q1', ok: ok1, user: a1raw || '—', expected: '2' });


    ['q2','q3','q4'].forEach((qid, idx) => {
    const user = (fd.get(qid) || '').toString();
    const ok = user === ANSWERS[qid].correct;
    correctCount += ok ? 1 : 0;
    feedback.push({ id:`Q${idx+2}`, ok, user: user || '—', expected: ANSWERS[qid].correct });
    });


    const checked = Array.from(document.querySelectorAll('input[name="q5"]:checked')).map(el => el.value);
    const correctSet = new Set(ANSWERS.q5.correct);
    const userSet = new Set(checked);
    const ok5 = correctSet.size === userSet.size && [...correctSet].every(v => userSet.has(v));
    correctCount += ok5 ? 1 : 0;
    feedback.push({ id:'Q5', ok: ok5, user: checked.length ? checked.join(', ') : '—', expected: ANSWERS.q5.correct.join(', ') });


    const pct = Math.round((correctCount / totalQuestions) * 100);
    const passed = pct >= PASS_PCT;


    const rows = feedback.map(row => `
    <div class="result-row">
    <div><strong>${row.id}</strong> — Your: <span class="answer">${row.user}</span> · Correct: <span class="answer">${row.expected}</span></div>
    <div class="badge ${row.ok ? 'ok' : 'bad'}">${row.ok ? 'Correct' : 'Incorrect'}</div>
    </div>`).join('');


    results.innerHTML = `
    <h2 style="margin:0 0 8px">Results</h2>
    <div class="summary ${passed ? 'pass' : 'fail'}">
    <strong>${passed ? '✅ Pass' : '❌ Fail'}</strong>
    <div>Total Score: ${correctCount}/${totalQuestions} (${pct}%)</div>
    </div>
    ${rows}`;
    results.style.display = 'block';
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
*/


/*
resetBtn.addEventListener('click', () => {
    form.reset();
    results.style.display = 'none';
    results.innerHTML = '';
    const first = form.querySelector('input,select,button,textarea');
    if (first) first.focus();
});
*/