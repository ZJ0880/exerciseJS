function detectarIdioma(palabra) {
    const palabraLower = palabra.toLowerCase();
    const vocalesTildadas = ['á', 'é', 'í', 'ó', 'ú'];
    let contadorTildadas = 0;

    for (let letra of palabraLower) {
        if (vocalesTildadas.includes(letra)) {
            contadorTildadas++;
        }
    }

    return contadorTildadas > 0 ? "Español" : "Inglés";
}

console.log(detectarIdioma("Hello"));
console.log(detectarIdioma("película"));
