// Este es el archivo de ejecucion de la aplicacion web
// Aca se configura el servidos con Express y se gestiona todo lo relacionado con la logica de la app web
// Bases de datos, peticiones, respuestas

// 1. Importar las dependencias y módulos necesarios 
import express from 'express'; //ECMAS 6

// 2. CONFIGURAR EL USO DEL SERVIDOR
const app = express();
const port = 6000; //3000, 6000 o 9000

// 3. EJECUTAR EL SERVIDOR EN EL COMPUTADOR
app.listen(port, () => {
    console.log ('Soy el server ejecutandose correctamente en el puerto ', port);
});

