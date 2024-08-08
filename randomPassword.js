function generarContrasena(longitud) {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let contrasena = "";
    for (let i = 0; i < longitud; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres[indice];
    }
    return contrasena;
}

console.log("Contraseña generada:", generarContrasena(12));
