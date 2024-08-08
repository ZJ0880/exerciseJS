function lenguajeHacker(texto) {
    const mapaLeet = {
        'a': '4', 'e': '3', 'i': '1', 'o': '0', 's': '5',
        't': '7', 'g': '9', 'b': '8'
    };
    return texto.toLowerCase().split('').map(letra => mapaLeet[letra] || letra).join('');
}

console.log(lenguajeHacker("Hola Mundo")); 
