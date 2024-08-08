let nombre = "Juan";
let apellido = "Pérez";

let usuario = nombre.substring(0, 3) + apellido.substring(0, 3) + Math.floor(Math.random() * 100);
console.log("Nombre de usuario:", usuario);
