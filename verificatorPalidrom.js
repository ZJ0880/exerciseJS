function esPalindromo(texto) {
    let textoLimpiado = texto.toLowerCase().replace(/[\W_]/g, "");
    let textoInvertido = textoLimpiado.split("").reverse().join("");
    return textoLimpiado === textoInvertido;
}

console.log(esPalindromo("Anita lava la tina") ? "La cadena de texto es un palíndromo" : "La cadena de texto no es un palíndromo");
