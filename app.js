const ques = document.querySelector("#question"),
  answers = document.querySelectorAll(".answer"),
  optLabel1 = document.querySelector("#opt-label1"),
  optLabel2 = document.querySelector("#opt-label2"),
  optLabel3 = document.querySelector("#opt-label3"),
  optLabel4 = document.querySelector("#opt-label4"),
  sbmtBtn = document.querySelector("#submit-btn"),
  quesBox = document.querySelector("#question-container"),
  resultBox = document.querySelector("#result-container");

const quizData = [
  {
    ques: "What is lorem ipsum",
    opt1: "Dummy text",
    opt2: "Mummy text",
    opt3: "Waste text",
    opt4: "Language",
    ans: "opt1",
  },
  {
    ques: "What is Python",
    opt1: "A snake",
    opt2: "Programming Language",
    opt3: "None of these",
    opt4: "Both 'a' and 'b'",
    ans: "opt4",
  },
  {
    ques: "What is the full form of HTML",
    opt1: "Hyper Test Markup Language",
    opt2: "Hyper Text Makeup Language",
    opt3: "Hyper Text Markup Language",
    opt4: "None of these",
    ans: "opt3",
  },
  {
    ques: "Which one of these is not a Programming Language",
    opt1: "Python",
    opt2: "Java",
    opt3: "C# (C-Sharp)",
    opt4: "Angular",
    ans: "opt4",
  },
  // Only four questions for now more adding soon.
];

let quesCount = 0;
const loadQues = () => {
  const quesList = quizData[quesCount];
  ques.innerHTML = `Q${quesCount + 1}. ${quesList.ques}?`;
  optLabel1.innerHTML = quesList.opt1;
  optLabel2.innerHTML = quesList.opt2;
  optLabel3.innerHTML = quesList.opt3;
  optLabel4.innerHTML = quesList.opt4;

};
const getCheckedAnswer = () => {
  let chkAns;
  answers.forEach((ans) => {
    if (ans.checked) {
      chkAns = ans.id;
      ans.checked = false;
    }
  });
  return chkAns;
};

let correctAns = 0;

loadQues();

const correctAnsContainer = document.querySelector("#correct-ans"),
  incorrectAnsContainer = document.querySelector("#incorrect-ans");

sbmtBtn.addEventListener("click", () => {
  const chkAns = getCheckedAnswer();
  const quizLenght = quizData.length;
  if (chkAns == quizData[quesCount].ans) {
    correctAns++;
  }
  quesCount++;
  if (quesCount < quizLenght) {
    loadQues();
  } else {
    const incorrectAns = quizLenght - correctAns;
    const correctAnsPercent = ((correctAns / quizLenght) * 100).toFixed(0);
    const incorrectAnsPercent = ((incorrectAns / quizLenght) * 100).toFixed(0);
    quesBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    correctAnsContainer.innerHTML = `${correctAnsPercent}% (${correctAns})`;
    incorrectAnsContainer.innerHTML = `${incorrectAnsPercent}% (${incorrectAns})`;
  }
});
