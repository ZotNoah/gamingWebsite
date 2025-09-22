let submitButton = document.getElementById("submit");
let resetButton = document.getElementById("reset");
let nextWordButton = document.getElementById("nextWord");

let userInput = document.getElementById("userInput");
let scrambledDisplay = document.getElementById("scrambledWord"); 

let answerDisplay = document.getElementById("answer");
let attemptsDisplay = document.getElementById("attempts");
let userPointsDisplay = document.getElementById("userPoints");
let highScoreDisplay = document.getElementById("highScoreDisplay");

submitButton.disabled = false;
nextWordButton.disabled = true;

let points = parseInt(userPointsDisplay.textContent);

function scrambleWords(){
    const words = [
        
        "Milk", "Dogs", "Cats", "Tree", "Bird", "Lamp", "Rain", "Book", "Game", "Fish",
        "Wind", "Rock", "Star", "Moon", "Ship", "Gold", "Fire", "Snow", "Leaf", "Road",
        "Farm", "Tool", "Time", "Sand", "Door", "Card", "Coin", "Ball", "Note", "Cake",
        "Wave", "Dust", "Song", "Flag",

        "Apple", "Bread", "Chair", "Dream", "Earth", "Fruit", "Grass", "House", "Juice", "Knife",
        "Light", "Money", "Night", "Ocean", "Piano", "Queen", "River", "Stone", "Table", "Unity",
        "Voice", "Watch", "Xyloh", "Youth", "Zebra", "Angel", "Bread", "Cloud", "Dance", "Eagle",
        "Flame", "Globe", "Horse",

        "Forgive", "Balance", "Capture", "Journey", "Kingdom", "Library", "Monster", "Network", "Passion", "Quality",
        "Request", "Station", "Teacher", "Universe", "Victory", "Weather", "Wonders", "Zephyrs", "Courage", "Dynamic",
        "Excited", "Forward", "Gateway", "Harvest", "Imagine", "Justice", "Lantern", "Mystery", "Nations", "Outlook",
        "Promise", "Restart", "Support"

    ];

    let randomWord = Math.floor(Math.random() * words.length);
    let word = words[randomWord];
    let letters = word.split("");
    let mixLetters = letters.sort(() => Math.random() - 0.5);
    let scrambledLetters = mixLetters.join(""); 
    scrambledDisplay.textContent = scrambledLetters.toUpperCase();
    console.log(scrambledLetters.toUpperCase());
    return word;
}

let guessWord = scrambleWords().toUpperCase();
let highScore = parseInt(localStorage.getItem("highScore")) || 0;
highScoreDisplay.textContent = "High Score: " + highScore;

function validateInput(){
    userInputValue = userInput.value.toUpperCase();
    answerDisplay.textContent = "";

    userInputValue = userInputValue.trim();

    if(userInputValue === guessWord){
        answerDisplay.textContent = "Correct!";
        userPoints();
        submitButton.disabled = true;
        nextWordButton.disabled = false;

    }

    attemptsLeft();

}

function attemptsLeft(){
    let attempts = parseInt(attemptsDisplay.textContent);

    if(!isNaN(userInputValue)){
        answerDisplay.textContent = "Enter a valid word";
        return;
    }

    if(userInputValue !== guessWord){
        answerDisplay.textContent = "Guess Again";
        attempts --;
    }


    attemptsDisplay.textContent = attempts;

    if(attempts < 1){
        attempts = 0;
        answerDisplay.textContent = "You lose. " + `The word was: ${guessWord}`;
        submitButton.disabled =  true;
    }
}

function userPoints(){
    let wordPoints;

    if(guessWord.length  === 5){
        wordPoints = 3;
    }else if(guessWord.length === 7){
        wordPoints = 5;
    }else{
        wordPoints = 1;
    }

    points = points + wordPoints;
    userPointsDisplay.textContent = points;

    if (points > highScore) {
        highScore = points;
        localStorage.setItem("highScore", highScore);
        highScoreDisplay.textContent = "High Score: " + highScore;
    }
    return points;
}

function resetGame(){
    let userConfirmed = confirm("Do you want to reset the game?");

    if(userConfirmed){
        points = 0;
        userPointsDisplay.textContent = 0;

        nextWord();
    }
}

function nextWord(){
    guessWord = scrambleWords().toUpperCase();
    attemptsDisplay.textContent = 3;
    answerDisplay.textContent = "";
    userInput.value = "";
    submitButton.disabled = false;
    nextWordButton.disabled = true;
    console.log(`The new word is: ${guessWord}`);
}


submitButton.addEventListener("click", validateInput);
nextWordButton.addEventListener("click", nextWord);
resetButton.addEventListener("click", resetGame);