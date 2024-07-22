
while (true) {
    const nombreProductoBuscado = prompt("¿Desea consultar sobre una guitarra, un bajo o precio de una calibración?\nEscriba 'guitarra', 'bajo', 'calibracion' o 's' para salir:");

    if (nombreProductoBuscado.toLowerCase() === "s") {
        break;
    }

    if (nombreProductoBuscado.toLowerCase() !== "guitarra" && nombreProductoBuscado.toLowerCase() !== "bajo" && nombreProductoBuscado.toLowerCase() !== "calibracion") {
        console.log("Por favor, ingrese 'guitarra', 'bajo', 'calibracion' o 's' para salir.");
        continue; 
    }

    const resultadosBusqueda = buscarProductoPorNombre(nombreProductoBuscado);

    if (resultadosBusqueda.length > 0) {
        console.log("Resultados de la búsqueda para '" + nombreProductoBuscado + "':");
        console.log(resultadosBusqueda);
    } else {
        console.log("No se encontraron resultados para '" + nombreProductoBuscado + "'.");
    }
}
