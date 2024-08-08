function sombreroSeleccionador() {
    const casas = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
    const respuestas = ['A', 'B', 'C', 'D'];
    
    let puntos = { 'Gryffindor': 0, 'Slytherin': 0, 'Hufflepuff': 0, 'Ravenclaw': 0 };

    for (let i = 1; i <= 5; i++) {
        let respuesta = prompt(`Pregunta ${i}: ${respuestas.join(' ')}\n`); // Usa prompt para recibir la respuesta
        if (respuesta === 'A') puntos['Gryffindor']++;
        else if (respuesta === 'B') puntos['Slytherin']++;
        else if (respuesta === 'C') puntos['Hufflepuff']++;
        else if (respuesta === 'D') puntos['Ravenclaw']++;
    }

    let maxPuntos = Math.max(...Object.values(puntos));
    let casaSeleccionada = Object.keys(puntos).find(casa => puntos[casa] === maxPuntos);
    console.log(`El sombrero seleccionador coloca al alumno en ${casaSeleccionada}`);
}

sombreroSeleccionador();
