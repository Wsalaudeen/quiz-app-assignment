const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Lisbon", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the smallest prime number?",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "Charles Dickens", correct: false },
      { text: "Mark Twain", correct: false },
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
    ],
  },
  {
    question: "Which ocean is the largest?",
    answers: [
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Atlantic Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
    ],
  },
  {
    question: "How many colors are in a rainbow?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ],
  },
  {
    question: "What is the square root of 64?",
    answers: [
      { text: "6", correct: false },
      { text: "7", correct: false },
      { text: "8", correct: true },
      { text: "9", correct: false },
    ],
  },
  {
    question: "Which country gifted the Statue of Liberty to the USA?",
    answers: [
      { text: "Canada", correct: false },
      { text: "France", correct: true },
      { text: "England", correct: false },
      { text: "Spain", correct: false },
    ],
  },
  {
    question: "Which element is denoted by the chemical symbol 'O'?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Osmium", correct: false },
      { text: "Oganesson", correct: false },
    ],
  },
  {
    question: "Which planet is closest to the sun?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
      { text: "Mercury", correct: true },
      { text: "Venus", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Pablo Picasso", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Claude Monet", correct: false },
    ],
  },
  {
    question: "Which country is the largest by area?",
    answers: [
      { text: "Canada", correct: false },
      { text: "Russia", correct: true },
      { text: "China", correct: false },
      { text: "United States", correct: false },
    ],
  },
  {
    question: "How many continents are there on Earth?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ],
  },
  {
    question: "Which language has the most native speakers?",
    answers: [
      { text: "English", correct: false },
      { text: "Mandarin Chinese", correct: true },
      { text: "Spanish", correct: false },
      { text: "Hindi", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "H2", correct: false },
      { text: "O2", correct: false },
      { text: "H2O", correct: true },
      { text: "CO2", correct: false },
    ],
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Iron", correct: false },
      { text: "Diamond", correct: true },
      { text: "Quartz", correct: false },
    ],
  },
  {
    question: "In which year did the Titanic sink?",
    answers: [
      { text: "1910", correct: false },
      { text: "1912", correct: true },
      { text: "1914", correct: false },
      { text: "1916", correct: false },
    ],
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Methane", correct: false },
    ],
  },
  {
    question: "How many bones are there in the adult human body?",
    answers: [
      { text: "204", correct: false },
      { text: "206", correct: true },
      { text: "208", correct: false },
      { text: "210", correct: false },
    ],
  },
  {
    question: "Which artist is known for the painting 'Starry Night'?",
    answers: [
      { text: "Pablo Picasso", correct: false },
      { text: "Vincent van Gogh", correct: true },
      { text: "Leonardo da Vinci", correct: false },
      { text: "Claude Monet", correct: false },
    ],
  },
  {
    question: "What is the largest internal organ in the human body?",
    answers: [
      { text: "Heart", correct: false },
      { text: "Liver", correct: true },
      { text: "Lung", correct: false },
      { text: "Kidney", correct: false },
    ],
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: [
      { text: "China", correct: false },
      { text: "Japan", correct: true },
      { text: "Korea", correct: false },
      { text: "Thailand", correct: false },
    ],
  },
  {
    question:
      "Which organ is responsible for pumping blood throughout the body?",
    answers: [
      { text: "Lungs", correct: false },
      { text: "Liver", correct: false },
      { text: "Heart", correct: true },
      { text: "Kidneys", correct: false },
    ],
  },
  {
    question: "What is the name of the longest river in the world?",
    answers: [
      { text: "Amazon River", correct: false },
      { text: "Nile River", correct: true },
      { text: "Yangtze River", correct: false },
      { text: "Mississippi River", correct: false },
    ],
  },
  {
    question: "Which metal is liquid at room temperature?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Mercury", correct: true },
      { text: "Silver", correct: false },
      { text: "Copper", correct: false },
    ],
  },
  {
    question: "Which planet has the most moons?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false },
      { text: "Uranus", correct: false },
    ],
  },
  {
    question: "Which country invented tea?",
    answers: [
      { text: "India", correct: false },
      { text: "China", correct: true },
      { text: "England", correct: false },
      { text: "Japan", correct: false },
    ],
  },
  {
    question: "What is the speed of light?",
    answers: [
      { text: "300,000 km/s", correct: true },
      { text: "150,000 km/s", correct: false },
      { text: "75,000 km/s", correct: false },
      { text: "30,000 km/s", correct: false },
    ],
  },
  {
    question: "Which country is the largest producer of coffee?",
    answers: [
      { text: "Colombia", correct: false },
      { text: "Brazil", correct: true },
      { text: "Vietnam", correct: false },
      { text: "Ethiopia", correct: false },
    ],
  },
  {
    question: "What is the smallest country in the world?",
    answers: [
      { text: "Monaco", correct: false },
      { text: "Vatican City", correct: true },
      { text: "San Marino", correct: false },
      { text: "Liechtenstein", correct: false },
    ],
  },
  {
    question: "Which year did World War II end?",
    answers: [
      { text: "1945", correct: true },
      { text: "1940", correct: false },
      { text: "1939", correct: false },
      { text: "1950", correct: false },
    ],
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Diamond", correct: true },
      { text: "Iron", correct: false },
      { text: "Platinum", correct: false },
    ],
  },
  {
    question: "Which planet is closest to the Sun?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: false },
      { text: "Mercury", correct: true },
      { text: "Earth", correct: false },
    ],
  },
  {
    question: "How many continents are there on Earth?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ],
  },
  {
    question: "What is the longest river in the world?",
    answers: [
      { text: "Amazon River", correct: true },
      { text: "Nile River", correct: false },
      { text: "Yangtze River", correct: false },
      { text: "Mississippi River", correct: false },
    ],
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: true },
      { text: "Carbon Dioxide", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent Van Gogh", correct: false },
      { text: "Pablo Picasso", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Claude Monet", correct: false },
    ],
  },
  {
    question: "What is the square root of 64?",
    answers: [
      { text: "6", correct: false },
      { text: "8", correct: true },
      { text: "10", correct: false },
      { text: "12", correct: false },
    ],
  },
  {
    question: "What is the boiling point of water in Celsius?",
    answers: [
      { text: "90°C", correct: false },
      { text: "100°C", correct: true },
      { text: "110°C", correct: false },
      { text: "80°C", correct: false },
    ],
  },
  {
    question: "Which planet is known for its rings?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: true },
    ],
  },
  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Beijing", correct: false },
      { text: "Seoul", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Bangkok", correct: false },
    ],
  },
  {
    question: "Which language is most spoken worldwide?",
    answers: [
      { text: "Spanish", correct: false },
      { text: "English", correct: false },
      { text: "Mandarin Chinese", correct: true },
      { text: "Hindi", correct: false },
    ],
  },
  {
    question: "What is the main ingredient in guacamole?",
    answers: [
      { text: "Tomato", correct: false },
      { text: "Onion", correct: false },
      { text: "Avocado", correct: true },
      { text: "Lime", correct: false },
    ],
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: [
      { text: "China", correct: false },
      { text: "Japan", correct: true },
      { text: "South Korea", correct: false },
      { text: "India", correct: false },
    ],
  },
  {
    question: "What is the largest mammal in the world?",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Giraffe", correct: false },
      { text: "Great White Shark", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Ag", correct: false },
      { text: "Au", correct: true },
      { text: "Gd", correct: false },
      { text: "Pb", correct: false },
    ],
  },
  {
    question: "Which is the fastest land animal?",
    answers: [
      { text: "Lion", correct: false },
      { text: "Cheetah", correct: true },
      { text: "Tiger", correct: false },
      { text: "Horse", correct: false },
    ],
  },
  {
    question: "What is the largest organ in the human body?",
    answers: [
      { text: "Liver", correct: false },
      { text: "Heart", correct: false },
      { text: "Skin", correct: true },
      { text: "Lung", correct: false },
    ],
  },
  {
    question: "Which is the most populous country in the world?",
    answers: [
      { text: "India", correct: false },
      { text: "China", correct: true },
      { text: "USA", correct: false },
      { text: "Indonesia", correct: false },
    ],
  },
  {
    question: "What is the freezing point of water in Fahrenheit?",
    answers: [
      { text: "32°F", correct: true },
      { text: "0°F", correct: false },
      { text: "100°F", correct: false },
      { text: "212°F", correct: false },
    ],
  },
  {
    question: "Who discovered penicillin?",
    answers: [
      { text: "Marie Curie", correct: false },
      { text: "Alexander Fleming", correct: true },
      { text: "Louis Pasteur", correct: false },
      { text: "Albert Einstein", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-buttons");
const nextElement = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextElement.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ":" + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerElement.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextElement.style.display = "none";
  while (answerElement.firstChild) {
    answerElement.removeChild(answerElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerElement.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextElement.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
  nextElement.innerHTML = "Play Again";
  nextElement.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextElement.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
