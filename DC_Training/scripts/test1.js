
const allQuestions = [
    {
      "question": "What is a primary benefit of effective document control in an organization?",
      "answers": [
        { "text": "Ensuring outdated documents are frequently used", "correct": false },
        { "text": "Promoting compliance with regulations and enhancing quality assurance", "correct": true },
        { "text": "Restricting access to documents for all stakeholders", "correct": false },
        { "text": "Creating documents without the need for review or approval", "correct": false }
      ]
    },
    {
      "question": "What is one major advantage of using an electronic document management system (EDMS) over a manual system?",
      "answers": [
        { "text": "Increased physical storage space for documents", "correct": false },
        { "text": "Enhanced searchability and version control", "correct": true },
        { "text": "More cumbersome and inefficient processes", "correct": false },
        { "text": "Greater reliance on paper-based filing", "correct": false }
      ]
    },
    {
      question: "What is one key benefit of having well-defined document control procedures?",
      answers: [
        { text: "Increased reliance on outdated information", correct: false },
        { text: "Enhanced consistency and compliance with standards", correct: true },
        { text: "Reduced need for document retention policies", correct: false },
        { text: "Simplified document naming conventions only", correct: false }
      ]
    },
    {
    "question": "What type of document is the Sales Pitch Presentation?",
    "answers": [
      { "text": "Presentations", "correct": true },
      { "text": "Contracts and Agreements", "correct": false },
      { "text": "Training Materials", "correct": false },
      { "text": "Technical Documentation", "correct": false }
    ]
  },
  {
    "question": "What type of document is the IT Security Procedures Manual?",
    "answers": [
      { "text": "Procedures Manual", "correct": true },
      { "text": "Training Materials", "correct": false },
      { "text": "Presentations", "correct": false },
      { "text": "Technical Documentation", "correct": false }
    ]
  },
  {
    "question": "What type of document is the Quarterly Financial Report?",
    "answers": [
      { "text": "Reports", "correct": true },
      { "text": "Policy Document", "correct": false },
      { "text": "Presentations", "correct": false },
      { "text": "Technical Documentation", "correct": false }
    ]
  },
  {
    "question": "What type of document is the Employee Code of Conduct?",
    "answers": [
      { "text": "Policy Document", "correct": true },
      { "text": "Procedures Manual", "correct": false },
      { "text": "Contracts and Agreements", "correct": false },
      { "text": "Reports", "correct": false }
    ]
  },
  {
    "question": "What type of document is the Client Service Agreement?",
    "answers": [
      { "text": "Contracts and Agreements", "correct": true },
      { "text": "Proposals", "correct": false },
      { "text": "Correspondence", "correct": false },
      { "text": "Research Papers", "correct": false }
    ]
  }
  ];

  function getRandomQuestions(numQuestions) {
    const questions = [];
    const allQuestionsCopy = [...allQuestions];
  
    for (let i = 0; i < numQuestions; i++) {
      const index = Math.floor(Math.random() * allQuestionsCopy.length);
      const question = allQuestionsCopy.splice(index, 1)[0];
      questions.push(question);
    }
  
    return questions;
  }
  
  let quiz = getRandomQuestions(5);
  let container = document.querySelector(".container");
  let questionEl = document.getElementById("question");
  let answerEl = document.getElementById("answers");
  let submitBtn = document.getElementById("submit");
  let scoreEl = document.getElementById("score");
  let resetBtn = document.createElement("button");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion(question) {
    questionEl.innerText = question.question;
  
    for (let i = 0; i < question.answers.length; i++) {
      const answer = question.answers[i];
      const label = document.createElement("label");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "answer";
      radio.value = answer.text;
      label.appendChild(radio);
      label.appendChild(document.createTextNode(answer.text));
      answerEl.appendChild(label);
    }
  
    submitBtn.style.display = "block"; // Show submit button
  }
  
  function resetQuestion() {
    questionEl.innerText = "";
    answerEl.innerHTML = "";
  }
  
  function showScore() {
    let scoreText;
    let scoreColor;
    if (score < 3) {
      scoreText = "FAILED";
      scoreColor = "red";
    } else if (score < 5) {
      scoreText = "PASSED";
      scoreColor = "green";
    } else {
      scoreText = "PERFECT!";
      scoreColor = "blue";
    }
    scoreEl.innerHTML = `<span style="color: #666; font-family: Impact; font-size: 30px">YOUR SCORE IS <br></span><span style="font-family: Impact; font-size: 50px">${score}</span><span style="color: #666; font-family: Impact; font-size: 30px">   OUT OF   </span><span style="color: #666; font-family: Impact; font-size: 50px">${quiz.length}</span><br><br><span style="font-family: Impact; font-size: 50px;"><span style="font-family: Algerian; font-size: 50px; color: ${scoreColor}">${scoreText}</span></span>`;
    submitBtn.style.display = "none"; // Hide submit button
  
    resetBtn.innerText = "Reset";
    resetBtn.addEventListener("click", () => {
      resetQuiz();
    });
    container.appendChild(resetBtn);
  
    submitBtn.style.display = "none"; // Hide submit button
  }
  
  function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    resetQuestion();
    quiz = getRandomQuestions(5);
    showQuestion(quiz[currentQuestion]);
    resetBtn.remove();
    scoreEl.innerText = "";
  }
  
  function submitAnswer() {
    const selected = answerEl.querySelector("input:checked");
    if (!selected) return;
  
    const answer = selected.value;
    const currentQuiz = quiz[currentQuestion];
  
    if (answer === currentQuiz.answers.find(a => a.correct).text) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion >= quiz.length) {
      resetQuestion();
      showScore();
      document.dispatchEvent(new Event("quizCompleted")); // Dispatch event when quiz is completed
    } else {
      resetQuestion();
      showQuestion(quiz[currentQuestion]);
    }
  }
  
  showQuestion(quiz[currentQuestion]);
  submitBtn.addEventListener("click", submitAnswer);

  