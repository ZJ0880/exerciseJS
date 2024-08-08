function generarAcronimo(frase) {
    return frase.split(" ").map(palabra => palabra.charAt(0).toUpperCase()).join("");
}

console.log(generarAcronimo("Organización de Naciones Unidas"));
