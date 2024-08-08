function verificarContraseña(contraseña) {
    let valida = true;
    if (contraseña.length < 8) {
        console.log("La contraseña debe tener al menos 8 caracteres.");
        valida = false;
    }
    if (!/[A-Z]/.test(contraseña)) {
        console.log("La contraseña debe contener al menos una letra mayúscula.");
        valida = false;
    }
    if (!/[a-z]/.test(contraseña)) {
        console.log("La contraseña debe contener al menos una letra minúscula.");
        valida = false;
    }
    if (!/[0-9]/.test(contraseña)) {
        console.log("La contraseña debe contener al menos un número.");
        valida = false;
    }
    if (valida) {
        console.log("Contraseña válida.");
    }
}

verificarContraseña("Ejemplo1");
