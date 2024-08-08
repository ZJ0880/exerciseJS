function jugarAhorcado(palabra, intentos) {
    let palabraOculta = Array(palabra.length).fill('_');
    let letrasAdivinadas = new Set();
    
    while (intentos > 0 && palabraOculta.includes('_')) {
        let letra = prompt(`Palabra: ${palabraOculta.join(' ')}\nLetras adivinadas: ${Array.from(letrasAdivinadas).join(', ')}\nIntentos restantes: ${intentos}\nIntroduce una letra:`);
        if (letrasAdivinadas.has(letra)) {
            alert('Ya has adivinado esa letra.');
            continue;
        }
        
        letrasAdivinadas.add(letra);
        if (palabra.includes(letra)) {
            for (let i = 0; i < palabra.length; i++) {
                if (palabra[i] === letra) palabraOculta[i] = letra;
            }
        } else {
            intentos--;
        }
    }
    
    if (palabraOculta.join('') === palabra) {
        console.log('¡Ganaste! La palabra era:', palabra);
    } else {
        console.log('Perdiste. La palabra era:', palabra);
    }
}

jugarAhorcado("javascript", 5);
