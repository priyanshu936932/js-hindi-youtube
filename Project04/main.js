let randomNumber = parseInt(Math.random()*100+1);

const submit=document.getElementById("subt");
const userInput=document.getElementById("guessField");
const guessSlot=document.querySelector(".guesses");
const lastResult=document.querySelector(".lastResult");
const lowOrHi=document.querySelector(".lowOrHi");
const startOver=document.querySelector(".resultParas");

const p=document.createElement("p");

let previousGuesses=[];
let numOfGuesses=1;
let playGame=true;

if(playGame){
    submit.addEventListener("click",function(event){
        event.preventDefault();
        const guess=parseInt(userInput.value);
        validateGuess(guess);
    })
}



function validateGuess(guess){
  if(isNaN(guess)){
    displayMessage("Please enter a valid number");
  }
  else if(guess<1 || guess>100){
    displayMessage("Please enter a number between 1 and 100");
  }
  else{
    if(numOfGuesses>10){
      displayGuess(guess);
      displayMessage(`Sorry, you've used all your guesses. The number was ${randomNumber}`);
      endGame();
    }
    else{
      previousGuesses.push(guess);
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess===randomNumber){
    displayMessage(`Congratulations! You guessed the number!`);
    endGame();
  }
  else{
    if(guess<randomNumber){
      displayMessage(`Your guess ${guess} is too low!`);
    }
    else if(guess>randomNumber){
      displayMessage(`Your guess ${guess} is too high!`);
    }
  }
}

function displayGuess(guess){
    userInput.value="";
    guessSlot.innerHTML+=` ${guess}`;
    numOfGuesses++;
    lastResult.innerHTML=`${11-numOfGuesses} guesses left`;
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2> ${message}</h2>`;
}

function endGame(){
    userInput.value="";
    userInput.setAttribute("disabled", "");
    playGame=false;
    p.classList.add("button");
    p.innerHTML="<h2 id='newGame'>Start New Game</h2>";
    p.style.cursor = "pointer";
    startOver.appendChild(p);
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function(e){
        randomNumber = parseInt(Math.random()*100+1);
        previousGuesses = []; 
        numOfGuesses = 1;
        guessSlot.innerHTML = "";
        lastResult.innerHTML = `10`;
        lowOrHi.innerHTML = "";
        userInput.removeAttribute("disabled");
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
        playGame = true;
    });
}
