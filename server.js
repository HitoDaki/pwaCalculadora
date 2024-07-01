const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Servir archivos estáticos
app.use(express.static('public'));

// Manejo de la solicitud del Service Worker
app.get('/sw.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/sw.js'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
