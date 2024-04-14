const keyboardDiv = document.querySelector(".keyboard");
const wordDisplay = document.querySelector(".word-display");

const getRandomWord = () =>
{
    const {word,hint} = wordList[Math.floor(Math.random()* wordList.length)];
    console.log(word);
    document.querySelector(".hint-text b").innerText = hint;
    wordDisplay.innerHTML = word.split("").map(()=>'<li class="letter"></li>').join("");
}
const initGame = (button, clickedLetter) =>
{
    console.log(clickedLetter);
}

for (let i = 97; i < 122; i++)
{
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();