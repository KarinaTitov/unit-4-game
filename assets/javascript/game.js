// Create a variables
// for wins
let wins = "";

// for looses
let losses = "";

// for crystals
let crystal1 = Math.floor(Math.random() * 12 + 1);
let crystal2 = Math.floor(Math.random() * 12 + 1);
let crystal3 = Math.floor(Math.random() * 12 + 1);
let crystal4 = Math.floor(Math.random() * 12 + 1);


// for random number
let random = Math.floor(Math.random() * 102 + 19);

// for your total number
let userTotal = "";


// Choose the random number
$(document).ready(function () {
    let random = Math.floor(Math.random() * 102 + 19);
    $("#randomNumber").text(random);
    // Every crystal is a random number
    let crystal1 = Math.floor(Math.random() * 12 + 1);
    let crystal2 = Math.floor(Math.random() * 12 + 1);
    let crystal3 = Math.floor(Math.random() * 12 + 1);
    let crystal4 = Math.floor(Math.random() * 12 + 1);

    let wins = 0;
    let losses = 0;
    let userTotal = 0;

    $("#winsNumber").text(wins);
    $("#lossesNumber").text(losses);
    $("#alert").text("");
    $("#score").text(userTotal);
    $("#randomNumber").text(random);

    // Reset Function
    function reset() {
        random = Math.floor(Math.random() * 102 + 19);
        $("#randomNumber").text(random);

        let crystal1 = Math.floor(Math.random() * 12 + 1);
        let crystal2 = Math.floor(Math.random() * 12 + 1);
        let crystal3 = Math.floor(Math.random() * 12 + 1);
        let crystal4 = Math.floor(Math.random() * 12 + 1);
    }

   //adds wins to the userTotal
    function winner() {
        $("#alert").html("You won!")
        wins++;
        $("#winsNumber").text(wins);
        reset();
    }
    //adds the losses to the userTotal
    function looser() {
        $("#alert").html("You lost!")
        losses++;
        $("#lossesNumber").text(losses);
        reset()
    }


    // when user clicks on crystal it gives a random value for each of them and adds to your total score
    $("#image1").on("click", function () {
        userTotal = eval(userTotal) + eval(crystal1);
        $("#score").text(userTotal);
        checkWinLoss();
    })

    $("#image2").on("click", function () {
        userTotal = eval(userTotal) + eval(crystal2);
        $("#score").text(userTotal);
        checkWinLoss();
    })

    $("#image3").on("click", function () {
        userTotal = eval(userTotal) + eval(crystal3);
        $("#score").text(userTotal);
        checkWinLoss();
    })

    $("#image4").on("click", function () {
        userTotal = eval(userTotal) + eval(crystal4);
        $("#score").text(userTotal);
        checkWinLoss();
    })


    // Write a function that going to check for win
    function checkWinLoss() {
        if (userTotal == random) {
            //if the user total hits the target, user is alerted that they win 
            winner();
        } else if (userTotal > random) {
            looser();
        }
    }





});