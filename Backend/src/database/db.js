const mongoose = require('mongoose');

// URL de conexión a MongoDB
const URI = process.env.MONGODB_URI;


// Conexión a la base de datos
const conexion = mongoose.connect(URI)
  .then(() => {
    console.log('Conexión a MongoDB exitosa');
  })
  .catch((error) => {
    console.error('Error en la conexión a MongoDB:', error);
  });

// Evento cuando la conexión se establece
mongoose.connection.once('open', () => {
  console.log('Conexión a MongoDB establecida');
});

// Evento cuando hay un error en la conexión
mongoose.connection.on('error', (error) => {
  console.error('Error en la conexión a MongoDB:', error);
});

// Evento cuando la conexión se desconecta
mongoose.connection.on('disconnected', () => {
  console.log('Conexión a MongoDB desconectada');
});

module.exports= conexion
