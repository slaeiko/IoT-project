const express = require('express');
const path = require('path');
const renderController = require('./controllers/renderController');
const { ejecutarScriptPython } = require('./pythonHandler');
const { connectToDatabase } = require('./database/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración del motor de vistas EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware para servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Utiliza el controlador renderController para manejar la ruta principal
app.use('/', renderController);

// Conectar a la base de datos MongoDB Atlas
connectToDatabase()
    .then(db => {
        console.log("Connected to MongoDB Atlas!");
        // Ejecutar el script de Python y procesar los resultados
        const rutaScriptPython = __dirname + '/scripts/train_model.py';
        ejecutarScriptPython(rutaScriptPython, app)
            .then(() => {
                console.log('El script de Python se ha ejecutado correctamente.');
            })
            .catch((error) => {
                console.error('Se produjo un error al ejecutar el script de Python:', error);
            });
    })
    .catch(error => {
        console.error("Error connecting to MongoDB Atlas:", error);
        process.exit(1); // Cerrar la aplicación si no se puede conectar a la base de datos
    });

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});






