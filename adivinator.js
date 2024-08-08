let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let suposicion = 5; 
let intentos = 3;

while (intentos > 0) {
    if (suposicion === numeroSecreto) {
        console.log("¡Felicidades! Has adivinado el número.");
        break;
    } else if (suposicion > numeroSecreto) {
        console.log("La suposición es demasiado alta.");
    } else {
        console.log("La suposición es demasiado baja.");
    }
    intentos--;
    if (intentos === 0) {
        console.log("Has perdido. El número era:", numeroSecreto);
    }
}
