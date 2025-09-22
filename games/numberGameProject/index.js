const userInput = document.getElementById('userInput');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');

let correctAnswer = document.getElementById('correctAnswer');
let attempts = document.getElementById('attempts');
let level = document.getElementById('level');
let nextLevelButton = document.getElementById('nextLevel');


let randomNum = Math.floor(Math.random()* 100 + 1);
submitButton.disabled = false;
nextLevelButton.disabled = true;

function submitAnswer() {
    const guess = parseInt(userInput.value);

    if(guess === randomNum){
        correctAnswer.innerHTML = `Correct the answer was ${randomNum}!`;
        submitButton.disabled = true;
        nextLevelButton.disabled = false;


    }else{
        hint(guess);
    }


    console.log("User guess:", guess);
    console.log("Correct number:", randomNum);

    currentAttempts(guess);

}

function nextLevel(){
    let winner =  confirm("Do you want to go to the next level?");

        if(winner === true){
            randomNum = Math.floor(Math.random()* 10 + 1);
            console.log(randomNum);
            submitButton.disabled = false;

            let currentLevel = parseInt(level.textContent);
            currentLevel ++;

            level.textContent =  currentLevel;

            let attemptsLeft = parseInt(attempts.textContent);
            attemptsLeft = 5;
            attempts.textContent = attemptsLeft;

            correctAnswer.innerHTML = ` `;
            userInput.value = ' ';
            nextLevelButton.disabled = true;
        }
}

function hint(guess){
    if(guess < randomNum){
        correctAnswer.innerHTML = `${guess} is less than the number I'm thinking of`;
    }else{
        correctAnswer.innerHTML = `${guess} is greater than the number I'm thinking of`;
    }
}

function currentAttempts(guess){
    let attemptsLeft = parseInt(attempts.textContent);

    if (isNaN(guess)) {
        correctAnswer.textContent = "Please enter a valid number!";
        return;
    }

    if(guess !== randomNum){
        attemptsLeft --;
    }

    if(attemptsLeft <= 0){
        attemptsLeft = 0;
        correctAnswer.innerHTML = `You lose :( The number I was thinking was ${randomNum}`;
        submitButton.disabled = true;
    }


    attempts.textContent = attemptsLeft;
    return attemptsLeft;

}

function resetGame(){
    let reset = confirm("Are you sure you want to reset the game?");

    if(reset === true){
        userInput.value = ' ';
        correctAnswer.innerHTML = ' ';
        randomNum = Math.floor(Math.random()* 10 + 1);
        attempts.innerText = '5';
        level.innerText = '1';
        submitButton.disabled = false;
    }
    
}

submitButton.addEventListener("click", submitAnswer);
resetButton.addEventListener("click", resetGame);
nextLevelButton.addEventListener("click", nextLevel);