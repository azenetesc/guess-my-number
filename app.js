const btnCheck = document.querySelector(".check");
const btnResetGame = document.querySelector(".again");
const inputGuess = document.querySelector(".guess");
const numberBlock = document.querySelector(".number");
const message = document.querySelector(".message");
const scoreDisplay = document.querySelector(".score");
const highScoreDisplay = document.querySelector(".highscore");
const body = document.querySelector("body");
const guessBlock = document.querySelector(".left");

let secretNumber = Math.floor(Math.random() * 20 + 1)
let score = 20
let highscore = 0;

const setContent = function (selector, message){
  selector.textContent = message;
}
 
const clear = function (){
  inputGuess.value = "";
  inputGuess.focus();
}
 
const disableGame = function (){
  guessBlock.style.display = 'none';
}
 
function guessGame(){
  const guessNumber = Number(inputGuess.value);
  const scoreCount = function (){
    if(score > 1){
      setContent(message,`${guessNumber < secretNumber ? "Too low" : "Too high"}` )
      score--;
      setContent(scoreDisplay, score);  
      clear();  
    } else{       
      setContent(message, "Game Over");
      scoreDisplay.textContent = 0;  
      disableGame()  
    }
  }
   
  if(!guessNumber){  
    setContent(message, "No number!");  
  } else if(guessNumber < 0){  
    setContent(message, "Number must be between 1 and 20!")
    clear();  
   
  } else if(guessNumber === secretNumber){  
    setContent(numberBlock, secretNumber);  
    setContent(message,"🎉 Correct Number! 🎉");  
    body.style.background = "linear-gradient(#e66465, #9198e5)"       
    if(score > highscore){   
      highscore = score;  
      setContent(highScoreDisplay, highscore);
      highScoreDisplay.style.color = "#3a3";  
    }
    disableGame()  
    
  } else if(guessNumber !== secretNumber){
    scoreCount();  
  }}

  btnCheck.addEventListener('click', guessGame); 
  inputGuess.addEventListener('keydown', (event) =>{
    if(event.keyCode === 13){
      guessGame();
    }}
  );

  btnResetGame.addEventListener("click", () =>{ 
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);  
  setContent(numberBlock, "?")  
  setContent(message, "Start guessing...")  
  setContent(scoreDisplay, score)  
  body.style.background = "#222";  
  numberBlock.style.width = "15rem";  
  guessBlock.style.display = 'inherit'; 
  highScoreDisplay.style.color = "inherit";
  clear()
})