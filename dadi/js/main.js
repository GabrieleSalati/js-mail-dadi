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

    else {
        message = "COMPUTER WINS!";
    }

    console.log(message);

    document.getElementById("winner").innerHTML = message;
}
);