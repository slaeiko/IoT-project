const express = require('express');
const router = express.Router();
const { ejecutarScriptPython } = require('../pythonHandler');

// Define la ruta para renderizar la página principal
router.get('/', async (req, res) => {
    try {
        // Ejecutar el script de Python para obtener los datos de predicción
        const { temperaturaPrediccion, humedadPrediccion } = await ejecutarScriptPython('./scripts/train_model.py');
        
        // Ejemplo de valores manuales
        const temperatura = 25;
        const humedad = 50;

        // Renderiza la página index.ejs y pasa los datos de temperatura y humedad como variables
        res.render('index', { 
            temperatura: temperatura, 
            humedad: humedad,
            temperaturaPrediccion: temperaturaPrediccion, 
            humedadPrediccion: humedadPrediccion 
        });
    } catch (error) {
        console.error('Error al obtener los datos de predicción:', error);
        // Renderiza una página de error en caso de fallo
        res.render('error', { message: 'Error al obtener los datos de predicción.' });
    }
});

module.exports = router;


