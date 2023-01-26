//VARIABLE

let userEmail = document.getElementById("mail");

//ARRAY

const mailingList = ["danny.palumbo@mail.me", "darcy.fogarino@mail.me", "paul.blanco@mail.me", "brian.ferry@mail.me", "marcus.fenix@mail.me"];

//DATA COLLECTOR

send.addEventListener(
    "click",
    function() {
        
    //USER EMAIL REQUEST
    
    let email = userEmail.value;

    console.log(email);
    
    if (mailingList.includes(email)) {
        message = "ACCESS GRANTED!"
    }

    else {
        message = "ACCESS DENIED!"
    }

    document.getElementById("result").innerHTML = message;

}
);