// PERMITE CREAR LAS RUTAS PARA PODER HACER LAS PETICIONES (GET, POST, PUT, DELETE)

// 1. Importar los controladores y las dependencias
import { getProduct, postProduct, putProductById, deleteProductById } from "../controllers/product.controller.js";
import express from 'express'; //Ayuda a contruir las rutas para las peticiones
import { authToken } from "../middleware/auth.js";

// 2. Configurar el router de Express
export const productRouter = express.Router();

// 3. Crear la rutas para las peticiones de los productos

// Ruta para la peticion GET
// primero determinar la ruta, luego indicar el controlador
productRouter.get ('/obtener', getProduct);

// Ruta para la peticion POST
productRouter.post ('/crear', authToken('admin'),  postProduct);

// Ruta para la peticion PUT
productRouter.put ('/actualizar/:id', authToken('admin'), putProductById);

// Ruta para la peticion DELETE
productRouter.delete ('/eliminar/:id', authToken('admin'), deleteProductById);