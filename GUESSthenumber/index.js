const randomnum=parseInt(Math.random()*100+1);
const submit=document.querySelector('#subt');
const user=document.querySelector('#guessField');
const guessslot=document.querySelector('.guesses');
const lastslot=document.querySelector('.lastResult');
const lowOrhi=document.querySelector('.lowOrHi');
const startover=document.querySelector('.resultParas')
const p=document.createElement('p')
let prevGuess=[]
let numGuess=1
let playGame=true
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(user.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
//valiadates if it is btwn 1 to 100
if (guess<1 || guess>100 || isNaN(guess)){
alert("please enter a valid number")

}
else{
    prevGuess.push(guess)
    if(numGuess===11){
        displayGuess(guess)
        displaymessage(`Game over. Random number was ${randomnum}`)
        endGame()
    }
    else{
        displayGuess(guess)
        checkguess(guess)
    }
}
}
function checkguess(guess){
//checks if the guessed number is right,tells low or high
if(guess===randomnum){
    displaymessage('you guessed it right')
    endGame()

}
else if(guess<randomnum){
    displaymessage(`Number is too low`)
}
else if(guess>randomnum){
    displaymessage(`Number is too high`)
}
}
function displayGuess(guess){
//cleans the values, uodates arrays
user.value=''
guessslot.innerHTML +=   `${guess}    `   ;
numGuess++;
lastslot.innerHTML=`${11-numGuess}`


}
function displaymessage(message){
//simply displays
lowOrhi.innerHTML=`<h2>${message}</h2>`;
}
function endGame(){
    //to end the game
    user.value=''
    user.setAttribute('disabled','')
    p.classList.add('button')
p.innerHTML='<h2 id="newGame">Start new game </h2>'
startover.appendChild(p)
newGame();
    }
function newGame(){
//to start a new game
const newGameButton=document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
    randomnum=parseInt(Math.random*100+1)
    prevGuess=[]
    numGuess=1
    guessslot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`
    user.removeAttribute('disabled')
    startover.removeChild(p)

    playGame=true
})

}


