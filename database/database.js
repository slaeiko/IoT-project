const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const { ejecutarScriptPython } = require('../pythonHandler');

// Connection URI
const uri = "mongodb+srv://josecs:password1234@cluster0.0si1vrm.mongodb.net/";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Función para conectar a la base de datos y devolver la instancia de la base de datos
async function connectToDatabase() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB Atlas!");
    return client.db('nombre_de_tu_base_de_datos');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
    throw error;
  }
}

// Función para cerrar la conexión
async function closeConnection() {
  try {
    await client.close();
    console.log('Connection to MongoDB Atlas closed');
  } catch (error) {
    console.error('Error closing connection to MongoDB Atlas:', error);
    throw error;
  }
}

const dbConnection = async(app) => {
  try {
      await mongoose.connect(uri)
        .then(() => {
          console.log('Connected to MongoDB Atlas!');

          // Ejecutar el script de Python y procesar los resultados
          const rutaScriptPython = './scripts/train_model.py';
          ejecutarScriptPython(rutaScriptPython, app)
              .then(() => {
                  console.log('El script de Python se ha ejecutado correctamente.');
              })
              .catch((error) => {
                  console.error('Se produjo un error al ejecutar el script de Python:', error);
              });
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB Atlas:', error);
            process.exit(1); // Cerrar la aplicación si no se puede conectar a la base de datos
        });

  } catch (error) {
      console.log(error);
      throw new Error('Error al inicializar la base de datos');
  }
}

module.exports = { 
  dbConnection,
  connectToDatabase, 
  closeConnection };

