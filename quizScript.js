function evaluateQuiz() {
    console.log("Evaluating")
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
}

/*
resetBtn.addEventListener('click', () => {
    form.reset();
    results.style.display = 'none';
    results.innerHTML = '';
    const first = form.querySelector('input,select,button,textarea');
    if (first) first.focus();
});*/