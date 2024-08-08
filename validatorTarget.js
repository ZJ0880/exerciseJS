function validarTarjeta(numero) {
    let digitos = numero.split("").map(Number);
    for (let i = digitos.length - 2; i >= 0; i -= 2) {
        let duplicado = digitos[i] * 2;
        digitos[i] = duplicado > 9 ? duplicado - 9 : duplicado;
    }
    let suma = digitos.reduce((a, b) => a + b, 0);
    return suma % 10 === 0;
}

console.log(validarTarjeta("4532015112830366")); 
