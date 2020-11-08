var p1Button = document.querySelector("#player_one");
var p2Button = document.getElementById("player_two");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#player_one_Display");
var p2Display = document.querySelector("#player_two_Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			player_one_Display.classList.add("winner");
			gameOver = true;
		}
		player_one_Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			player_two_Display.classList.add("winner");
			gameOver = true;
		}
		player_two_Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	player_one_Display.textContent = 0;
	player_two_Display.textContent = 0;
	player_one_Display.classList.remove("winner");
	player_two_Display.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});