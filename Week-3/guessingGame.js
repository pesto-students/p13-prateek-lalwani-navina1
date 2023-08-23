function playGuessingGame(numToGuess,totalGuesses=10) {
    var userInput = prompt("Enter a number between 1 and 100:");
    var guessCount;
    for(guessCount=1;guessCount<totalGuesses;guessCount++){
        if(isNaN(userInput)){
            userInput=prompt("Please enter a valid number.")
            
        }
        if(userInput==numToGuess){
            alert(`congrats your guess is right, you guess the number ${numToGuess} in ${guessCount} guess`);
            return (guessCount);
        }else if(userInput<numToGuess){
            userInput=prompt(`${userInput} is too small. Guess a larger number.`);
        }else{
            userInput=prompt(`${userInput} is too large. Guess a smaller number.`);
        }
    }
    alert(`You are out off guesses, The correct number is ${numToGuess}`)
    return (0);
    
}

var noOfGuesses=playGuessingGame(11,2);
console.log(noOfGuesses);