const hangmanImg= document.querySelector(".hangman-box img");
const keyboardDiv = document.querySelector(".keyboard");
const wordDisplay = document.querySelector(".word-display");
const guesses = document.querySelector(".guesses-text b");
const gameModal = document.querySelector(".game-modal");

let currentWord, correctLetters= [], count=0;
const max = 6;

//get a random word displayed on screen
const getRandomWord = () =>
{
    const {word,hint} = wordList[Math.floor(Math.random()* wordList.length)];
    console.log(word);
    currentWord= word;
    document.querySelector(".hint-text b").innerText = hint;
    wordDisplay.innerHTML = word.split("").map(()=>'<li class="letter"></li>').join("");
}
//game over functionality 
const gameOver = (isVictory) =>
{
    setTimeout(() => 
    {
        const modalText = isVictory ? `You corectly guessed the word: ` : `The correct word was: `;
        gameModal.querySelector(".img").src= `images/${isVictory ? `victory` : `lost`}.gif`;
        gameModal.querySelector(".h4").innerText = `${isVictory ? `Congratulations!` : `Game Over`}`;
        gameModal.querySelector(".img").innerHTML= `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");
    },300);
}
//checking if clicked letter exists in the word or not
const initGame = (button, clickedLetter) =>
{
    if(currentWord.includes(clickedLetter))
    {
        [...currentWord].forEach((letter,index) =>
    {
        if(letter === clickedLetter)
        {
            correctLetters.push(letter);
            wordDisplay.querySelectorAll("li")[index].innerText = letter;
            wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
        }
    })    
    }
    else
    {
        count++;
        hangmanImg.src = `images/hangman-${count}.svg`
    }
    button.disabled = true;
    guesses.innerText = `${count} / ${max}`;

    if(count === max)
      return gameOver(false);
    if(correctLetters.length === currentWord.legth)
      return gameOver(true);    
}

//creating the keyboard
for (let i = 97; i < 122; i++)
{
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();

