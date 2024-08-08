
let peso = 70;
let altura = 1.75;

let imc = peso / (altura * altura);

console.log("Tu IMC es: " + imc.toFixed(2));

if (bmi < 18.5) {
    console.log("Bajo peso");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso normal");
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidad");
}