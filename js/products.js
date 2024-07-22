const guitarras = [
    { id: 1, nombre: "Guitarra", cuerdas: 6, precio: 600000 },
    { id: 2, nombre: "Guitarra", cuerdas: 7, precio: 720000 },
    { id: 3, nombre: "Guitarra", cuerdas: 8, precio: 780000 },
];

const bajos = [
    { id: 1, nombre: "Bajo", cuerdas: 4, precio: 600000 },
    { id: 2, nombre: "Bajo", cuerdas: 5, precio: 740000 },
    { id: 3, nombre: "Bajo", cuerdas: 6, precio: 740000 },
];

const calibracion = [
    { id: 1, nombre: "Calibracion Guitarra", cuerdas: 6, precio: 30000 },
    { id: 2, nombre: "Calibracion Bajo", cuerdas: 5, precio: 40000 },
    { id: 3, nombre: "Calibracion Guitarra criolla", cuerdas: 6, precio: 30000 }, 
    { id: 4, nombre: "Calibracion Guitarra Acústica", cuerdas: 6, precio: 30000 },
];


const todosLosProductos = guitarras.concat(bajos, calibracion);