function calcularPromedio(notas) {
    let suma = notas.reduce((total, nota) => total + nota, 0);
    let promedio = suma / notas.length;
    return promedio;
}

let notas = [8, 9, 10, 7, 6];
console.log("Promedio:", calcularPromedio(notas).toFixed(2));
