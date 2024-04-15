const hangmanImg= document.querySelector(".hangman-box img");
const keyboardDiv = document.querySelector(".keyboard");
const wordDisplay = document.querySelector(".word-display");
const guesses = document.querySelector(".guesses-text b");

let currentWord, count=0;
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

//checking if clicked letter exists in the word or not
const initGame = (button, clickedLetter) =>
{
    if(currentWord.includes(clickedLetter))
    {
        [...currentWord].forEach((letter,index) =>
    {
        if(letter === clickedLetter)
        {
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