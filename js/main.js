
while (true) {
    const nombreProductoBuscado = prompt("¿Desea consultar sobre una guitarra, un bajo o precio de una calibración? \nsino, escriba 's' para salir:");

    if (nombreProductoBuscado.toLowerCase() === "s") {
        break; 
    }

    const resultadosBusqueda = buscarProductoPorNombre(nombreProductoBuscado);

    if (resultadosBusqueda.length > 0) {
        console.log("Resultados de la búsqueda para '" + nombreProductoBuscado + "':");
        console.log(resultadosBusqueda);
    } else {
        console.log("No se encontraron resultados para '" + nombreProductoBuscado + "'.");
    }
}