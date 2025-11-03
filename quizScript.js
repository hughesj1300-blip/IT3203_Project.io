//Function called when the quiz is submitted
function evaluateQuiz() {
    const totalQuestions = 5; //Total number of questions
    const passPct = 70; //Percent of correct answers needed to pass
    let correctCount = 0; //Tracks the number of correct answers
    const q1answer = 1990; //Used for eveluating question 1
    const q5answer =  ["correct", "correct", "correct"]; //Used for eveluating question 5
    let q5selection = []; //Used to hold the values submitted for question 5

    //Evaluate question 1
    if (quizForm.q1.value == q1answer) {
        //If correct...
        correctCount += 1;
        q1feedback.innerHTML = "<strong>Correct</strong>";
        q1feedback.style.color = "green";
    }
    else {
        //If incorrect...
        q1feedback.innerHTML = "<strong>Incorrect</strong><br><span class='answer'>Correct answer: 1990</span>";
        q1feedback.style.color = "red";
    }

    //Evaluate question 2
    if (document.querySelectorAll("input[name='q2']:checked")[0].value == "correct") {
        //If correct...
        correctCount += 1;
        q2feedback.innerHTML = "<strong>Correct</strong>";
        q2feedback.style.color = "green";
    }
    else {
        //If incorrect...
        q2feedback.innerHTML = "<strong>Incorrect</strong><br><span class='answer'>Correct answer: Sir Tim Berners-Lee</span>";
        q2feedback.style.color = "red";
    }

    //Evaluate question 3
    if (document.querySelectorAll("input[name='q3']:checked")[0].value == "correct") {
        //If correct...
        correctCount += 1;
        q3feedback.innerHTML = "<strong>Correct</strong>";
        q3feedback.style.color = "green";
    }
    else {
        //If incorrect...
        q3feedback.innerHTML = "<strong>Incorrect</strong><br><span class='answer'>Correct answer: Mosaic</span>";
        q3feedback.style.color = "red";
    }
    
    //Evaluate question 4
    if (document.querySelectorAll("input[name='q4']:checked")[0].value == "correct") {
        //If correct...
        correctCount += 1;
        q4feedback.innerHTML = "<strong>Correct</strong>";
        q4feedback.style.color = "green";
    }
    else {
        //If incorrect...
        q4feedback.innerHTML = "<strong>Incorrect</strong><br><span class='answer'>Correct answer: Chrome</span>";
        q4feedback.style.color = "red";
    }
    
    //Store the values selected for question 5 in q5selection
    for (let i = 0; i < document.querySelectorAll("input[name='q5']:checked").length; i++) {
        q5selection.push(document.querySelectorAll("input[name='q5']:checked")[i].value);
    }
    
    //Evaluate question 5
    if (q5selection.toString() == q5answer.toString()) {
        //If correct...
        correctCount += 1;
        q5feedback.innerHTML = "<strong>Correct</strong>";
        q5feedback.style.color = "green";
    }
    else {
        //If incorrect...
        q5feedback.innerHTML = "<strong>Incorrect</strong><br><span class='answer'>Correct answers: Chrome, Firefox, Edge</span>";
        q5feedback.style.color = "red";
    }

    const pct = Math.round((correctCount / totalQuestions) * 100); //Get the percentage of questions answered correctly
    const passed = pct >= passPct; //Check if the user passed

    //Update the results area
    results.innerHTML = `
    <h2 style="margin:0 0 8px">Results</h2>
    <div class="summary ${passed ? 'pass' : 'fail'}">
    <strong>${passed ? '✅ Pass' : '❌ Fail'}</strong>
    <div>Total Score: ${correctCount}/${totalQuestions} (${pct}%)</div>
    </div>`;
    results.style.display = 'block';
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

//Function called when the user resets the quiz
function resetQuiz() {
    q1feedback.innerHTML = ""
    q2feedback.innerHTML = ""
    q3feedback.innerHTML = ""
    q4feedback.innerHTML = ""
    q5feedback.innerHTML = ""
    results.style.display = 'none';
}