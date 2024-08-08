function esPalindromo(texto) {
    texto = texto.toLowerCase().replace(/ /g, '');
    return texto === texto.split('').reverse().join('');
}

function esAnagrama(palabra1, palabra2) {
    const sort = str => str.toLowerCase().replace(/ /g, '').split('').sort().join('');
    return sort(palabra1) === sort(palabra2);
}

function esEscapatoria(palabra) {
    return esPalindromo(palabra) || esAnagrama(palabra, 'escapatoria');
}

console.log(esEscapatoria("anilina"));       
console.log(esEscapatoria("Escapatoria"));     
console.log(esEscapatoria("no es escapatoria")); 
