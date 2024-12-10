// Importar Express
const express = require('express');

// Crear la aplicación Express
const app = express();

// Definir un puerto
const PORT = 3000;

// Ruta principal
app.get('/', (req, res) => {
    res.json({ message: 'Hola Mundo Desde RestApi' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});