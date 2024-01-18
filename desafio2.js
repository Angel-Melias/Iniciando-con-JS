//variables
let currentDay = prompt(" por favor indica el dia de la semana en el que te encuentras");
let numero = parseInt(prompt(" Por favor ingresa un numero positivo o negativo"));

//function to verify what day is today.
function verifyDay () {
    if (currentDay == "Sabado" || currentDay == "sabado" || currentDay == "Domingo" || currentDay == "domingo") {
        alert("Feliz fin de semana");
    }
}

//verifica si es positivo o negativo
function numeroPositivoOnegativo () {
    if (numero > 0) {
        alert(`el numero ${numero} es positivo`);
    }

    if (numero < 0) {
        alert(`el numero ${numero} es negativo`);
    }
}



