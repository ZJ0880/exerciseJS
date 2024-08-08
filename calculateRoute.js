function calcularRuta(grafo, inicio, destino) {
    let cola = [inicio];
    let visitado = { [inicio]: null };
    
    while (cola.length > 0) {
        let nodo = cola.shift();
        if (nodo === destino) {
            break;
        }
        (grafo[nodo] || []).forEach(vecino => {
            if (!(vecino in visitado)) {
                visitado[vecino] = nodo;
                cola.push(vecino);
            }
        });
    }

    let ruta = [];
    while (destino) {
        ruta.push(destino);
        destino = visitado[destino];
    }
    return ruta.reverse();
}

let grafo = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

console.log(calcularRuta(grafo, 'A', 'F')); 
