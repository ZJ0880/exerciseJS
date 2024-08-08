function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function esFibonacci(num) {
    let a = 0, b = 1, temp;
    while (a <= num) {
        if (a === num) return true;
        temp = a;
        a = b;
        b = temp + b;
    }
    return false;
}

function analizarNumero(num) {
    const primo = esPrimo(num) ? 'primo' : 'no es primo';
    const fibonacci = esFibonacci(num) ? 'fibonacci' : 'no es fibonacci';
    const par = num % 2 === 0 ? 'par' : 'impar';
    
    console.log(`${num} es ${primo}, ${fibonacci} y es ${par}`);
}

analizarNumero(2); 
analizarNumero(7); 
