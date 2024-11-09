// Este es el archivo de ejecucion de la aplicacion web
// Aca se configura el servidos con Express y se gestiona todo lo relacionado con la logica de la app web
// Bases de datos, peticiones, respuestas

// 1. Importar las dependencias y módulos necesarios 
import express from 'express'; //ECMAS 6
import dotenv from 'dotenv'; //Dependencia para manejar variables de entorno
import { connectionMongo } from './src/config/dataBase.js';
import { productRouter } from './src/routes/products.routes.js';
import { userRouter } from './src/routes/user.routes.js';
import { loginRouter } from './src/routes/login.routes.js';


// 2. CONFIGURAR EL USO DEL SERVIDOR
const app = express();
dotenv.config(); //configurar para poder usar variables de entorno
const port = process.env.PORT//3000, 6000 o 9000

// Rutas que debe utilizar
app.use(express.json()); //Usar formato JSON, CREAR y ACTUALIZAR datos
app.use ( '/productos', productRouter);
app.use ('/usuarios', userRouter);
app.use ('/loginUser', loginRouter);

//INVOCAR LA FUNCION DE LA BASE DE DATOS
connectionMongo ();

// 3. EJECUTAR EL SERVIDOR EN EL COMPUTADOR
app.listen(port, () => {
    console.log ('Soy el server ejecutandose correctamente en el puerto ', port);
});

