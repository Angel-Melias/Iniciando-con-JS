//variables.
let numero = Math.round(Math.random()*10);
let numeroElegido;

//function to ask the user for a number.
function askNumber () {
    numeroElegido = parseInt(prompt("write a number from 0 to 10"));
    checkIfCorrect();
}

//function to verify if the number provided is correct.
function checkIfCorrect() {

    if (numero == numeroElegido) {
        alert("Eso es correcto!")
    }
    
    else {
        alert("estas bien menso ese no es");
        askNumber();
    }
}

askNumber();


