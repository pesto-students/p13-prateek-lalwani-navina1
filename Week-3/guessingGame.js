function playGuessingGame(numToGuess, totalGuesses = 10) {
    var count = 0;
    var message="Enter a number between 1 and 100."
    while (count < totalGuesses) {
        count++;
        let userInput = prompt(message);
        //console.log(userInput);
        if(userInput==null){
            return 0;
        }
        if(isNaN(userInput) || userInput==""){
            count = count - 1;
            message = `Please enter a number.(${totalGuesses - count} attempt left)`;
            continue;
        }  
        if (userInput == numToGuess) {
            alert(`You guessed the number ${numToGuess} in ${count} attempt`);
            return (count);
        }
        else if (userInput < numToGuess) {
            message=`${userInput}is too small. Guess a larger number.(${totalGuesses-count} attempt left)`
        } else {
            message=`${userInput}is too large. Guess a small number.(${totalGuesses-count} attempt left)`
        }
    }
    alert(`Game Over, the number is ${numToGuess}`);
    return 0;
}
playGuessingGame(13, 4);
