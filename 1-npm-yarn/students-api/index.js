// codigo para levantar nuestra API en expressJS

// 1. Crear un endpoint GET en express que devuelta una lista estudiantes.
// 2. La lista de estudiantes puede ser un arreglo guardado en una variable

const express = require('express');
const app = express();
const port = 8080;

const songs = [
    { id: 1, name: 'Kilometros', artist: 'Los Caligaris' },
    { id: 2, name: 'Closer', artist: 'The Chainsmokers' },
    { id: 3, name: 'Solo a Terceros', artist: 'Panda' },
    { id: 4, name: 'Back in black', artist: 'AC/DC' },
    { id: 5, name: 'Ella me levanto', artist: 'DY' },
];

// localhost:8080/
app.get('/', (request, response) => {
    response.json(songs);
});

app.listen(port, () => {
    console.log('servidor iniciado...')
});
