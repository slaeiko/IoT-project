const { spawn } = require('child_process');

function ejecutarScriptPython(rutaScriptPython) {
    console.log('Iniciando ejecución del script de Python...');
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('python', [rutaScriptPython]);

        let stdoutData = '';
        let stderrData = '';

        pythonProcess.stdout.on('data', (data) => {
            stdoutData += data.toString();
        });

        pythonProcess.stderr.on('data', (data) => {
            stderrData += data.toString();
        });

        pythonProcess.on('close', (code) => {
            if (code === 0) {
                // Extraer los datos necesarios del resultado del script de Python
                const temperaturaPrediccion = obtenerTemperatura(stdoutData);
                const humedadPrediccion = obtenerHumedad(stdoutData);
                
                // Comprobar si se han obtenido ambos valores
                if (temperaturaPrediccion !== undefined && humedadPrediccion !== undefined) {
                    resolve({ temperaturaPrediccion, humedadPrediccion });
                } else {
                    reject('No se pudieron obtener los datos de predicción correctamente.');
                }
            } else {
                reject(`El script de Python se cerró con un código de salida ${code}. Mensaje de error: ${stderrData}`);
            }
        });

        pythonProcess.on('error', (error) => {
            reject(`Error al ejecutar el script de Python: ${error.message}`);
        });
    });
}

// Función para extraer la temperatura del resultado del script de Python
function obtenerTemperatura(data) {
    const temperaturaMatch = data.match(/"temperaturaPrediccion": (\d+)/);
    return temperaturaMatch ? parseInt(temperaturaMatch[1]) : undefined;
}

// Función para extraer la humedad del resultado del script de Python
function obtenerHumedad(data) {
    const humedadMatch = data.match(/"humedadPrediccion": (\d+)/);
    return humedadMatch ? parseInt(humedadMatch[1]) : undefined;
}

module.exports = { ejecutarScriptPython };










