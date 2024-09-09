const quiz = [
  {
    question: "Which one is a Styling Utility",
    option1: "Java",
    option2: "HTML",
    option3: "CSS",
    option4: "JS",
    answer: "CSS",
  },
  {
    question: "In which year JS introduced",
    option1: "1992",
    option2: "1993",
    option3: "1995",
    option4: "1994",
    answer: "1994",
  },
  {
    question: "Which is called Scripting Language",
    option1: "Java",
    option2: "HTML",
    option3: "CSS",
    option4: "JS",
    answer: "JS",
  },
  {
    question: "Which is a most secure language in the below list",
    option1: "Java",
    option2: "HTML",
    option3: "CSS",
    option4: "JS",
    answer: "Java",
  },
  {
    question: "Which one is Framework of JS",
    option1: "React",
    option2: "Material",
    option3: "Tailwind",
    option4: "Bootstap",
    answer: "React",
  },
  {
    question: "In 2024 Trending Web Dev Positions",
    option1: "Mern Dev",
    option2: "PHP DEV",
    option3: "Wordpress Dev",
    option4: "Duropal Dev",
    answer: "Mern Dev",
  },
  {
    question: "Which is  the Part of JS",
    option1: "sout",
    option2: "clg",
    option3: "cout",
    option4: "printf",
    answer: "clg",
  },
  {
    question: "What is the Full Form of HTML",
    option1: "Hyper text transfer protocol",
    option2: "Hyper text markup language",
    option3: "Hyper text makeup language",
    option4: "Hyper text moden language",
    answer: "Hyper text markup language",
  },
  {
    question: "Who is the inventor of JS",
    option1: "Charles Babbage",
    option2: "Necolos Tesla",
    option3: "Joe Biden",
    option4: "None of the Above",
    answer: "None of the Above",
  },
  {
    question: "Which is called a Browser",
    option1: "Net Browser",
    option2: "Yahoo",
    option3: "Google",
    option4: "Chrome",
    answer: "Chrome",
  },
];

let highScore = quiz.length;

let currentQuestion = 0;
let score = 0;

let question = document.querySelector("h1");

let container = document.querySelector(".container");
let option1 = document.getElementById("first-opt");
let option2 = document.getElementById("sec-opt");
let option3 = document.getElementById("third-opt");
let option4 = document.getElementById("four-opt");
let answer = document.querySelectorAll(".answer");

let submit = document.querySelector("#submit");

question.textContent = quiz[currentQuestion].question;
option1.textContent = quiz[currentQuestion].option1;
option2.textContent = quiz[currentQuestion].option2;
option3.textContent = quiz[currentQuestion].option3;
option4.textContent = quiz[currentQuestion].option4;

submit.addEventListener("click", () => {
  let checkedAnswer = document.querySelector('input[type="radio"]:checked');
  //    let myans = checkedAnswer.nextElementSibling.textContent
  if (checkedAnswer == null) alert("Please select a choice");
  else {
    if (
      checkedAnswer.nextElementSibling.textContent ===
      quiz[currentQuestion].answer
    ) {
      score++;
    }
    checkedAnswer.checked = false;
    currentQuestion++;

    if (currentQuestion < quiz.length) {
      question.textContent = quiz[currentQuestion].question;
      option1.textContent = quiz[currentQuestion].option1;
      option2.textContent = quiz[currentQuestion].option2;
      option3.textContent = quiz[currentQuestion].option3;
      option4.textContent = quiz[currentQuestion].option4;
    } else {
      container.innerHTML = `
      <div class='result'>
      
      <h1>The result is "${score} marks."</h1> 
     <a class='link' href="index.html">Re-Test</a>
      
      </div> 
      
      `;
      console.log(score);
    }
  }
});
