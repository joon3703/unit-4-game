$(document).ready(function(){

//============= Variables ===============================
    // This will generate random number to be shawn at the start of the game.
    var random = Math.floor(Math.random() * 101 + 19);

    // This is for random numbers to the each gems.
    var number1 = Math.floor(Math.random() * 11 + 1);
    var number2 = Math.floor(Math.random() * 11 + 1);
    var number3 = Math.floor(Math.random() * 11 + 1);
    var number4 = Math.floor(Math.random() * 11 + 1);

    // Declare variables
    var total = 0;
    var wins = 0;
    var losses = 0;

    $("#randomNumber").text(random);
    $("#winsCount").text(wins);
    $("#lossesCount").text(losses);

    // Function that resets random numbers.
    function reset() {
        //Repeat the variables that I declared

        random = Math.floor(Math.random() * 101 + 19);
        number1 = Math.floor(Math.random() * 11 + 1);
        number2 = Math.floor(Math.random() * 11 + 1);
        number3 = Math.floor(Math.random() * 11 + 1);
        number4 = Math.floor(Math.random() * 11 + 1);

        // Resets total number.
        total = 0;

        $("#randomNumber").text(random);
    }

    //===================FUNCTIONS======================
    // Function for winning situation
    function win() {
        wins++;
        alert("You Won! Click gems to start again!")
        $("#totalScore").text("YOU WIN!");
        $("#winsCount").text(wins);
        reset();
    }


    // Function for losing situation
    function lose() {
        losses++;
        alert("You Lose! Click gems to start again!")
        $("#totalScore").text("YOU LOSE!");
        $("#lossesCount").text(losses);
        reset();
    }
    
    // This function able to click blue gem.
    $("#blue").on("click", function() {
        total = total + number1;
        $("#totalScore").text(total);
        if (total === random) {
            win();
        } else if (total > random) {
            lose();
        }
    });

    $("#green").on("click", function() {
        total = total + number2;
        $("#totalScore").text(total);
        if (total === random) {
            win();
        } else if (total > random) {
            lose();
        }
    });

    $("#red").on("click", function() {
        total = total + number3;
        $("#totalScore").text(total);
        if (total === random) {
            win();
        } else if (total > random) {
            lose();
        }
    });

    $("#yellow").on("click", function() {
        total = total + number4;
        $("#totalScore").text(total);
        if (total === random) {
            win();
        } else if (total > random) {
            lose();
        }
    });
});