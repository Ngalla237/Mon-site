const questions = [
  {
    question: "Que veut dire HTML ?",
    options: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language"],
    bonneReponse: 0
  },
  {
    question: "Quel langage permet de rendre une page web interactive ?",
    options: ["CSS", "JavaScript", "HTML"],
    bonneReponse: 1
  },
  {
    question: "Que signifie CSS ?",
    options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System"],
    bonneReponse: 1
  },
  {
    question: "Quelle balise HTML sert à créer un lien ?",
    options: ["&lt;link&gt;", "&lt;a&gt;", "&lt;href&gt;"],
    bonneReponse: 1
  }
];

let indexQuestion = 0;
let score = 0;

function afficherQuestion() {
  const conteneur = document.getElementById("quizConteneur");

  if (indexQuestion >= questions.length) {
    conteneur.innerHTML = "";
    document.getElementById("score").textContent = `Quiz terminé ! Score : ${score} / ${questions.length}`;
    document.getElementById("btnRecommencer").style.display = "inline-block";
    return;
  }

  const q = questions[indexQuestion];
  let html = `<h3>${q.question}</h3>`;
  q.options.forEach((option, i) => {
    html += `<button onclick="repondre(${i})" style="display:block; margin:10px 0;">${option}</button>`;
  });
  conteneur.innerHTML = html;
}

function repondre(choix) {
  if (choix === questions[indexQuestion].bonneReponse) {
    score++;
  }
  indexQuestion++;
  afficherQuestion();
}

function recommencer() {
  indexQuestion = 0;
  score = 0;
  document.getElementById("score").textContent = "";
  document.getElementById("btnRecommencer").style.display = "none";
  afficherQuestion();
}

afficherQuestion();
