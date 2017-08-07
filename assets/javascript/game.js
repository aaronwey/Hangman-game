
var word = [
["e", "l", "e", "p", "h", "a", "n", "t"],
  ["z","e","b","r","a"],
  ["m","o","n","g","o","o","s","e"],
  ["t","u","r","t","l","e"],
  ["o","t","t","e","r"],
  ["h","i","p","p","o","p","o","t","a","m","u","s"]
]
var random = Math.floor((Math.random()*(word.length))); 

var wordInRound = word[random]; // the word to guess will be chosen from the array above
var guessWord = new Array(wordInRound.length);
var mistake = 0;

// every letter in the word is symbolized by an underscore in the guessfield
for (var i = 0; i < guessWord.length; i++){
	guessWord[i] = "_ ";
}

// prints the guessfield
function printGuessWord(){
	for (var i = 0; i < guessWord.length; i++){
	var guessField = document.getElementById("guessField");
	var letter = document.createTextNode(guessWord[i]);
	guessField.appendChild(letter);
	}
}

//checks if the the letter provided by the user matches one or more of the letters in the word

document.onkeyup = function(){

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	console.log(userGuess);

	for (var i = 0; i < wordInRound.length; i++){
		if(wordInRound[i] === userGuess){
			guessWord[i] = userGuess + " ";
			var hit = true;
		}

}

	
	//deletes the guessfield and replaces it with the new one
	var guessField = document.getElementById("guessField");
	guessField.innerHTML=""; 
	printGuessWord();
	
	// if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
	if(!hit){
		var wrongLetter = document.getElementById("wrongLetter");
		var character = document.createTextNode(" " + userGuess);
		wrongLetter.appendChild(character); 
		mistake++;

	}
	
	//checks if all letters have been found
	var finished = true;
	for (var i = 0; i < guessWord.length; i++){
		if(guessWord[i] === "_ "){
			finished = false;
		}
	}
	if(finished){
		window.alert("You win!");
	}
	
	//once you got six wrong letters, you lose
	if(mistake === 6){
		window.alert("Now you're dead you dum dum!");
	}
}

function init(){
	printGuessWord();
}
 
window.onload = init;