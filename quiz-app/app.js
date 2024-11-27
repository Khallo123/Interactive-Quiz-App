// Questions Array (30 questions)
const questions = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], correctAnswer: "Paris" },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correctAnswer: "4" },
    { question: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"], correctAnswer: "William Shakespeare" },
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correctAnswer: "Jupiter" },
    { question: "Which element has the chemical symbol 'O'?", options: ["Oxygen", "Osmium", "Ozone", "Oganesson"], correctAnswer: "Oxygen" },
    { question: "What is the speed of light?", options: ["300,000 km/s", "299,792 km/s", "150,000 km/s", "600,000 km/s"], correctAnswer: "299,792 km/s" },
    { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Saturn", "Jupiter"], correctAnswer: "Mars" },
    { question: "What is the smallest prime number?", options: ["1", "2", "3", "5"], correctAnswer: "2" },
    { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], correctAnswer: "Leonardo da Vinci" },
    { question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Shark"], correctAnswer: "Blue Whale" },
    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], correctAnswer: "Diamond" },
    { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "India", "Japan", "South Korea"], correctAnswer: "Japan" },
    { question: "What is the main ingredient in guacamole?", options: ["Tomato", "Avocado", "Onion", "Chili"], correctAnswer: "Avocado" },
    { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], correctAnswer: "8" },
    { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], correctAnswer: "Canberra" },
    { question: "What is the largest continent?", options: ["Africa", "Asia", "Europe", "North America"], correctAnswer: "Asia" },
    { question: "Who discovered electricity?", options: ["Albert Einstein", "Nikola Tesla", "Thomas Edison", "Benjamin Franklin"], correctAnswer: "Benjamin Franklin" },
    { question: "Which chemical element has the symbol 'Au'?", options: ["Silver", "Gold", "Uranium", "Aluminum"], correctAnswer: "Gold" },
    { question: "What year did the Titanic sink?", options: ["1912", "1899", "1923", "1931"], correctAnswer: "1912" },
    { question: "What is the longest river in the world?", options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"], correctAnswer: "Nile River" },
    { question: "Which ocean is the largest?", options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"], correctAnswer: "Pacific Ocean" },
    { question: "What is the largest desert in the world?", options: ["Sahara Desert", "Arabian Desert", "Kalahari Desert", "Antarctic Desert"], correctAnswer: "Antarctic Desert" },
    { question: "How many continents are there?", options: ["5", "6", "7", "8"], correctAnswer: "7" },
    { question: "Which animal is known as the King of the Jungle?", options: ["Elephant", "Lion", "Tiger", "Giraffe"], correctAnswer: "Lion" },
    { question: "Which country is the largest by land area?", options: ["China", "Russia", "United States", "Canada"], correctAnswer: "Russia" },
    { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], correctAnswer: "Ottawa" },
    { question: "Who is the author of 'Harry Potter'?", options: ["J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling", "Suzanne Collins"], correctAnswer: "J.K. Rowling" },
    { question: "What is the name of the longest-running TV show?", options: ["Friends", "The Simpsons", "The Office", "The Big Bang Theory"], correctAnswer: "The Simpsons" },
    { question: "Which animal can sleep for three years?", options: ["Snail", "Koala", "Bat", "Bear"], correctAnswer: "Snail" },
    { question: "What is the tallest mountain in the world?", options: ["Mount Everest", "K2", "Kangchenjunga", "Mount Fuji"], correctAnswer: "Mount Everest" },
    { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "H2"], correctAnswer: "H2O" },
    { question: "How many bones are in the adult human body?", options: ["206", "205", "208", "210"], correctAnswer: "206" },
    { question: "What is the capital of Spain?", options: ["Barcelona", "Madrid", "Sevilla", "Valencia"], correctAnswer: "Madrid" }
];


let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = "";


const questionContainer = document.getElementById("question-container");
const feedbackContainer = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreDisplay = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");


function loadQuestion() {
    const questionObj = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h2 class="question">${questionObj.question}</h2>
        <div class="options">
            ${questionObj.options.map(option => 
                `<input type="radio" name="option" value="${option}" id="${option}" onchange="selectAnswer('${option}')">
                 <label for="${option}">${option}</label>`
            ).join('')}
        </div>
    `;

    feedbackContainer.innerHTML = ""; // Clear previous feedback
    nextBtn.disabled = true; // Disable next button until answer is selected
}


function selectAnswer(answer) {
    selectedAnswer = answer;
    nextBtn.disabled = false; 
}


function nextQuestion() {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        score++;
        feedbackContainer.innerHTML = "<span class='correct'>Correct! Moving to the next question.</span>";
    } else {
        feedbackContainer.innerHTML = `<span class='incorrect'>Incorrect! The correct answer is: ${correctAnswer}</span>`;
    }

    
    const options = document.querySelectorAll(".options input");
    options.forEach(option => option.disabled = true);

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            selectedAnswer = "";
            loadQuestion();
        } else {
            showScore();
        }
    }, 1500);
}


function showScore() {
    questionContainer.style.display = "none";
    nextBtn.style.display = "none";
    scoreContainer.style.display = "block";
    scoreDisplay.textContent = score;
}


function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = "";
    questionContainer.style.display = "block";
    scoreContainer.style.display = "none";
    loadQuestion();
    nextBtn.style.display = "inline-block";
    nextBtn.disabled = true;
}


nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartQuiz);


loadQuestion();
