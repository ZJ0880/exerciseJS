function generarNumeroAleatorio(max) {
    const semilla = 12345; 
    return (semilla * 9301 + 49297) % 233280 / 233280 * max;
}

console.log(Math.floor(generarNumeroAleatorio(100))); 
