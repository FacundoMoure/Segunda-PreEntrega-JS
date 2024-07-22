// Filtrado de productos

function buscarProductoPorNombre(nombreProducto) {
    return todosLosProductos.filter(producto => {
        const nombreProductoBuscado = nombreProducto.toLowerCase();
        const nombreProductoActual = producto.nombre.toLowerCase();
        return nombreProductoActual.includes(nombreProductoBuscado);
    })
}

//Método Push para agregar guitarras o bajos.

function agregarGuitarra(nuevoProducto) {
    guitarras.push(nuevoProducto);
}

function agregarBajo(nuevoProducto) {
    bajos.push(nuevoProducto);
}

const nuevaGuitarra = { id: 4, nombre: "Guitarra Electrica", cuerdas: 6, precio: 900000 };
agregarGuitarra(nuevaGuitarra);

const nuevoBajo = { id: 4, nombre: "Bajo Electrico", cuerdas: 5,precio: 700000 };
agregarBajo(nuevoBajo);
