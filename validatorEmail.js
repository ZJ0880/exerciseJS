let correo = "ejemplo@dominio.com";

let esValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

if (esValido) {
    console.log("La dirección de correo electrónico es válida.");
} else {
    console.log("La dirección de correo electrónico no es válida.");
}
