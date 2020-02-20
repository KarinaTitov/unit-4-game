// Create a variables
// for wins
let wins = "";
// for looses
let losses = "";
// for crystals
let crystal1 =  Math.floor(Math.random()*12+1);
let crystal2 =  Math.floor(Math.random()*12+1);
let crystal3 =  Math.floor(Math.random()*12+1);
let crystal4 =  Math.floor(Math.random()*12+1);
// for random number
let random = Math.floor(Math.random()*102+19);

// for the score
let userTotal = "";
// Choose the random number
$(document).ready(function() {
    let random = Math.floor(Math.random()*102+19);
    $("#randomNumber").text(random);
// Every crystal is a random number
    let crystal1 =  Math.floor(Math.random()*12+1);
    let crystal2 =  Math.floor(Math.random()*12+1);
    let crystal3 =  Math.floor(Math.random()*12+1);
    let crystal4 =  Math.floor(Math.random()*12+1);

    let wins = 0;
    let losses = 0;
    let userTotal = 0;

    $("#winsNumber").text(wins);
    $("#lossesNumber").text(losses);
// Reset Function
    function reset() {
        random = Math.floor(Math.random()*102+19);
        $("#randomNumber").text(random);

    let crystal1 =  Math.floor(Math.random()*12+1);
    let crystal2 =  Math.floor(Math.random()*12+1);
    let crystal3 =  Math.floor(Math.random()*12+1);
    let crystal4 =  Math.floor(Math.random()*12+1);
    }

// Write a function that going to check for win
function winner() {
    if ()
}
})