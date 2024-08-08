function esHeterograma(cadena) {
    const letras = new Set();
    for (let letra of cadena) {
        if (letras.has(letra)) return false;
        letras.add(letra);
    }
    return true;
}

function esIsograma(cadena) {
    const letras = new Set();
    for (let letra of cadena) {
        if (letras.has(letra)) return false;
        letras.add(letra);
    }
    return true;
}

function esPangrama(cadena) {
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    const letras = new Set(cadena.toLowerCase());
    return alfabeto.split('').every(letra => letras.has(letra));
}


console.log(esHeterograma("abcdefgh"));
console.log(esIsograma("hello")); 
console.log(esPangrama("The quick brown fox jumps over the lazy dog")); 
