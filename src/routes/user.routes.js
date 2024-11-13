// 1. Importar los controladores y las dependencias
import { postUser, getUser } from "../controllers/user.controller.js";
import express from 'express';
import { authToken } from "../middleware/auth.js";

// 2. Configurar el router con express
export const userRouter = express.Router();

// 3. Crear las rutas para las 2 peticiones

// GET
userRouter.get('/obtener', authToken('admin'), getUser);

// POST
userRouter.post('/crear', postUser);