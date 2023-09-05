let playerTurn = true;
let computerMoveTimeout = 0;

const gameStatus = {
	MORE_MOVES_LEFT: 1,
	HUMAN_WINS: 2,
	COMPUTER_WINS: 3,
	DRAW_GAME: 4
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
	// Setup the click event for the "New game" button
	const newBtn = document.getElementById("newGameButton");
	newBtn.addEventListener("click", newGame);

	// Create click-event handlers for each game board button
	const buttons = getGameBoardButtons();
	for (let button of buttons) {
		button.addEventListener("click", function () { boardButtonClicked(button); });
	}

	// Clear the board
	newGame();
}

// Returns an array of 9 <button> elements that make up the game board. The first 3 
// elements are the top row, the next 3 the middle row, and the last 3 the 
// bottom row. 
function getGameBoardButtons() {
	return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {
	
	const buttons = getGameBoardButtons();

	// Ways to win
	const possibilities = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
		[0, 4, 8], [2, 4, 6] // diagonals
	];

	// Check for a winner first
	for (let indices of possibilities) {
		if (buttons[indices[0]].innerHTML !== "" &&
			buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
			buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML) {
			
			// Found a winner
			if (buttons[indices[0]].innerHTML === "X") {
				return gameStatus.HUMAN_WINS;
			}
			else {
				return gameStatus.COMPUTER_WINS;
			}
		}
	}

	// See if any more moves are left
	for (let button of buttons) {
		if (button.innerHTML !== "X" && button.innerHTML !== "O") {
			return gameStatus.MORE_MOVES_LEFT;
		}
	}

	// If no winner and no moves left, then it's a draw
	return gameStatus.DRAW_GAME;
}

function newGame() {
	// TODO: Complete the function
	if(computerMoveTimeout){
		clearTimeout(computerMoveTimeout);
		computerMoveTimeout=0;
	}
	const buttons = getGameBoardButtons();
	for(const cell of buttons){
		cell.innerHTML="";
		cell.className="";
		cell.disabled=false;
	}
	playerTurn=true;
	const label=document.getElementById("turnInfo");
	label.innerText="Your Turn"
}

function boardButtonClicked(button) {
	// TODO: Complete the function
	if(playerTurn){
		button.innerHTML=("X");
		button.classList.add("x");
		button.setAttribute("disabled",true);
		switchTurn()
	}
}

function switchTurn() {
	// TODO: Complete the function
	const gameCurrentStatus=checkForWinner();
	const label=document.getElementById("turnInfo");
	//console.log(gameCurrentStatus,"gameCurrentStatus")
	//console.log(playerTurn)
	if(gameCurrentStatus==1){
		playerTurn=!playerTurn;
		if(!playerTurn){
			//console.log("Entered")
			label.innerText="Computers Turn"
			computerMoveTimeout=setTimeout(makeComputerMove,1000);
			//playerTurn=true;
		}else{
			//console.log("Entered else")
			label.innerText="Your Turn";
			//playerTurn=false;
		}
	}
	else if(gameCurrentStatus==4 ||gameCurrentStatus==2||gameCurrentStatus==3){
		playerTurn=false;
		if(gameCurrentStatus==2){
			label.innerText="You Win";
		}else if(gameCurrentStatus==3){
			label.innerText="Computer Win";
		}else{
			label.innerText="Draw Game";
		}
	}
}

function makeComputerMove() {
	// TODO: Complete the function
	const buttons=getGameBoardButtons();
	const availableButtons=[];
	for(const button of buttons){
		if(button.innerHTML!="X" && button.innerHTML!="O"){
			availableButtons.push(button)
		}
	}
	if (availableButtons.length > 0) {
		//console.log(availableButtons)
        const randomIndex = Math.floor(Math.random() * availableButtons.length);
        //console.log(randomIndex);
        const selectedButton = availableButtons[randomIndex];
        //console.log("selected", selectedButton);
        selectedButton.innerHTML = "O";
        selectedButton.classList.add("o");
        selectedButton.disabled = true;
        switchTurn();
    }
}