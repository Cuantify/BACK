const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors());

// Ruta simple para probar
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Servir la aplicación React en producción (una vez que esté construida)
app.use(express.static('howmany/build'));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
