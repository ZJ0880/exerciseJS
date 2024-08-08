function contarVocalesConsonantes(texto) {
    let vocales = 'aeiou';
    let vocalesCount = 0;
    let consonantesCount = 0;

    texto.toLowerCase().split("").forEach(char => {
        if (char >= 'a' && char <= 'z') {
            if (vocales.includes(char)) {
                vocalesCount++;
            } else {
                consonantesCount++;
            }
        }
    });

    console.log("Número de vocales:", vocalesCount);
    console.log("Número de consonantes:", consonantesCount);
}

contarVocalesConsonantes("Hola Mundo");
