// add javascript here


// Game state
let answer = 0;
let guessCount = 0;
let totalWins = 0;
let totalGuesses = 0;
let scores = [];

// Enters their name (via prompt()) and sees it used in all game messages
let input_name = prompt("Enter your name");
// Name capitalized
let playerName = input_name.charAt(0).toUpperCase() + input_name.slice(1);

// Play
// Selects a difficulty level (Easy 1–3, Medium 1–10, Hard 1–100)
document.getElementById("playBtn").addEventListener("click", function(){
    let radios = document.getElementsByName("level");
    let range = 3;
    for (let i = 0; i < radios.length; i++){
        if (radios[i].checked){
            range = parseInt(radios[i].value);
        }
    }

    // Round setup
    // Pick answer
    answer = Math.floor(Math.random() * range) + 1;
    // Disable and Enable buttons and radio choices
    document.getElementById("msg").textContent = playerName + ", guess a number between 1 and " + range;
    document.getElementById("guess").value = "";
    document.getElementById("guessBtn").disabled = false;
    document.getElementById("giveUpBtn").disabled = false;
    document.getElementById("playBtn").disabled = true;

    
    for (let i = 0; i < radios.length; i++){
        radios[i].disabled = true;
    }

})
// Guesses until they find the correct number or gives up
// Sees feedback on each guess: too high, too low, correct — plus hot/warm/cold proximity hints
// Tracks statistics: total wins, average score, and a sorted top-3 leaderboard
// Has a Give Up button that ends the round and sets the score to the range value
// Sees a live date and time display with month names, day suffixes, and updating seconds
// Tracks round timing: fastest game played and average time per game