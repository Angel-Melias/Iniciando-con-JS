let numero = 6;     
let numeroElegido;

function askNumber () {
    numeroElegido = parseInt(prompt("guest the number I have on mint"));
    checkIfCorrect();
}

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


