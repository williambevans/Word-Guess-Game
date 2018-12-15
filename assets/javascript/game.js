
var winCount = 1;
var lossCount = 0;
var guessesRemaining = 10;
var lettersGuessed = [];


var alphabet =
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
    ,"r","s","t","u","v","w","x","y","z"];


var randomIndex = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomIndex];

  document.onkeyup = function(event) {
  var userChoice = event.key;
  
    
  if (computerChoice === userChoice) {
    alert("You won!");
    document.getElementById("winCount").innerHTML = winCount++;
    lettersGuessed = [];
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
    randomIndex = Math.floor(Math.random() * alphabet.length);
    computerChoice = alphabet[randomIndex];
    guessesRemaining = 10;
    document.getElementById("guessesRemaining").innerHTML = 10;
  } else {
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining--;
    lettersGuessed.push(userChoice);
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
  }

  
  
  
  if (guessesRemaining <= 0) {
      lossCount++;
      document.getElementById("lossCount").innerHTML = lossCount++;
      alert("You lost!");
      guessesRemaining = 10;
      lettersGuessed = [];
      document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
      document.getElementById("guessesRemaining").innerHTML = 10;
      randomIndex = Math.floor(Math.random() * alphabet.length);
      computerChoice = alphabet[randomIndex];
    }
  }

    


