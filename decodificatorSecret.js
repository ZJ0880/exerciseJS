let mensajeCodificado = "El gato rojo tiene hambre";
let diccionario = {
    "gato": "agente",
    "rojo": "secreto",
    "hambre": "misión"
};

let palabras = mensajeCodificado.split(" ");
let mensajeDecodificado = palabras.map(palabra => diccionario[palabra] || palabra).join(" ");

console.log("Mensaje decodificado:", mensajeDecodificado);
