document.getElementById('inputArchivo').addEventListener('change', function(event) {
    let archivo = event.target.files[0];
    if (archivo) {
        let lector = new FileReader();
        lector.onload = function(e) {
            console.log(e.target.result);
        };
        lector.readAsText(archivo);
    }
});
