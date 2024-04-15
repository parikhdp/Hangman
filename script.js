const keyboardDiv = document.querySelector(".keyboard");
const wordDisplay = document.querySelector(".word-display");

let currentWord;
//get a random word displayed on screen
const getRandomWord = () =>
{
    const {word,hint} = wordList[Math.floor(Math.random()* wordList.length)];
    console.log(word);
    currentWord= word;
    document.querySelector(".hint-text b").innerText = hint;
    wordDisplay.innerHTML = word.split("").map(()=>'<li class="letter"></li>').join("");
}
//checking if clicked letter exists in the word
const initGame = (button, clickedLetter) =>
{
    if(currentWord.includes(clickedLetter))
    {
        console.log(clickedLetter, " exists in the word");
    }
    else
    {
        console.log(clickedLetter, " doesn't exist in the word");
    }
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