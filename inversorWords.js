function invertirPalabras(frase) {
    return frase.split(" ").map(palabra => palabra.split("").reverse().join("")).join(" ");
}

console.log(invertirPalabras("Hola mundo"));
