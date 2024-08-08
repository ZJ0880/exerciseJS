let agenda = {
    "Juan Pérez": "555-1234",
    "Ana Gómez": "555-5678"
};

let nombreContacto = "Juan Pérez";

if (agenda[nombreContacto]) {
    console.log("Número de teléfono:", agenda[nombreContacto]);
} else {
    console.log("Contacto no encontrado.");
}
