//CALC OPERATOR

play.addEventListener(
    "click",
    function() {
    
    // PLAYER NUMBER GENERATOR

    const playerNumber = Math.floor(Math.random() * 6) + 1;

    console.log(playerNumber)

    // COMPUTER NUMBER GENERATOR

    const computerNumber = Math.floor(Math.random() * 6) + 1;

    console.log(computerNumber)    
    
    //CALCULATOR

    if (playerNumber > computerNumber) {
        message = "PLAYER WINS!";
    }

    else if (playerNumber < computerNumber) {
        message = "COMPUTER WINS!";
    }

    else {
        message = "EVEN!";
    }

    console.log(message);

    document.getElementById("player").innerHTML = playerNumber;
    document.getElementById("computer").innerHTML = computerNumber;
    document.getElementById("winner").innerHTML = message;
}
);