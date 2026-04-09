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
let playerName = input_name.charAt(0).toUpperCase() + input_name.slice(1).toLowerCase();

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
    guessCount = 0;
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
document.getElementById("guessBtn").addEventListener("click", function(){
    let input = document.getElementById("guess").value;
    let num = parseInt(input);

    if (isNaN(num)){
        document.getElementById("msg").textContent = "Please enter a valid number.";
        return;
    }

    guessCount++;
    let diff = Math.abs(num - answer);

    // Sees feedback on each guess: too high, too low, correct — plus hot/warm/cold proximity hints
    if (num === answer){
        document.getElementById("msg").textContent = "Correct! " + playerName + " got it in " + guessCount + " guesses!";
        updateScore(guessCount);
        resetButtons();
    }

    else{
        let temp = "";
        if (diff <= 2){
            temp = "Hot!";
        }
        else if (diff <= 5){
            temp = "Warm!"
        }
        else{
            temp = "Cold";
        }
        // Lower
        if (num < answer){
            document.getElementById("msg").textContent = "Too low! " + temp;
        }
        // Higher
        else{
            document.getElementById("msg").textContent = "Too high! " + temp;
        }
}
})
            // Tracks statistics: total wins, average score, and a sorted top-3 leaderboard

// Only update score when win
function updateScore(score){
    totalWins++;
    totalGuesses += score;
    // Score for round and average
    document.getElementById("wins").textContent = "Total Wins: " + totalWins;
    document.getElementById("avgScore").textContent = "Average Score: " + (totalGuesses/totalWins).toFixed(1);

    // Update Leaderboard
    scores.push(score);
    scores.sort(function(a,b){return a - b;});

    let leaderboard = document.getElementsByName("leaderboard");
    for (let i = 0; i < leaderboard.length; i++){
        if (i < scores.length){
            leaderboard[i].textContent = scores[i];
        }
        else{
            leaderboard[i].textContent = "--";
        }
    }
}

function resetButtons(){
    document.getElementById("guessBtn").disabled = true;
    document.getElementById("giveUpBtn").disabled = true;
    document.getElementById("playBtn").disabled = false;
    let radios = document.getElementsByName("level");
    for (let i = 0; i < radios.length; i++){
        radios[i].disabled = false;
    }
}
// Has a Give Up button that ends the round and sets the score to the range value
document.getElementById("giveUpBtn").addEventListener("click", function(){
    // Defines local variable range
    let radios = document.getElementsByName("level");
    let range = 3;
    for (let i = 0; i < radios.length; i++){
        if (radios[i].checked){
            range = parseInt(radios[i].value);
        }
    }
    updateScore(range);
    resetButtons();
})
// Sees a live date and time display with month names, day suffixes, and updating seconds
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let now = new Date();

let monthName = months[now.getMonth()];
let day = now.getDate();
if (day === 1 || day === 21 || day === 31){
    daySuffix = "st";
}
else if (day === 2 || day === 22){
    daySuffix = "nd";
}
else if (day === 3 || day === 23){
    daySuffix = "rd";
}
else{
    daySuffix = "th";
}

let year = now.getFullYear();

document.getElementById("date").textContent = monthName + " " + day + daySuffix + " " + year; 

// Live Time
/*
let start = new Date().getTime();

let elapsed = (new Date().getTime - start) / 1000
*/
// Tracks round timing: fastest game played and average time per game