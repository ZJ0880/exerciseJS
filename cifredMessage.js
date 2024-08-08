function cifrarMensaje(mensaje, desplazamiento) {
    let resultado = "";
    for (let i = 0; i < mensaje.length; i++) {
        let char = mensaje.charAt(i);
        if (char.match(/[a-z]/i)) {
            let code = mensaje.charCodeAt(i);
            if ((char >= 'a') && (char <= 'z')) {
                char = String.fromCharCode((code - 97 + desplazamiento) % 26 + 97);
            } else if ((char >= 'A') && (char <= 'Z')) {
                char = String.fromCharCode((code - 65 + desplazamiento) % 26 + 65);
            }
        }
        resultado += char;
    }
    return resultado;
}

let mensaje = "hola mundo";
let desplazamiento = 1;
console.log("Mensaje cifrado:", cifrarMensaje(mensaje, desplazamiento));
