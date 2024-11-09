// ARCHIVO PARA LA LOGICA NECESARIO DE LOS INICIOS DE SESION DE LOS USUARIOS

// 1. Importar las dependencias y los modulos
import { userModel } from "../models/users.model.js";
// 2. Importar funcion para crear los tokens
import { generateToken } from "../lib/jwt.js";
// 3. IMPORTAR LA DEPENDENCIA DE ENCRIPTACION
import bcrypt from 'bcryptjs';
import { json, request } from "express";


// 4. CREAR LA FUNCION PARA GESTIONAR EL INICIO
export async function loginUser(request, response){
    // MANEJO DE ERRORES
    try {
        // VALIDACION = CORREO
        const {emailLogin, passwordLogin} = request.body;

        // VALIDACION emailLogin existe
        const userFound = await userModel.findOne({
            emailUser : emailLogin
        });

        // QUE OCURRE SI NO SE ENCUENTRA EL EMAILLOGIN EN LA BASE DE DATOS
        if(!userFound){
            return response.status(404).json({mensaje: 'Usuario no encontrado'});
        }

        // VALIDACION DE LA CONTRASENA -> comparar la contrasena

        const isValidPassword = await bcrypt.compare(passwordLogin, userFound.passwordUser);

        // QUE OCURRE SI LA CONTRASENA ES INCORRECTA
        if(!isValidPassword){
            return response.status(401).json({mensaje: 'Contraseña invalida'});
        };

        // VERIFICAR EL ROL Y LOS PERMISOS DEL USUARIO
        const payload = {
            id: userFound._id,
            name: userFound.nameUser
        }

        // si es admin enviar la info en el payload
        if(userFound.roleUser === 'Admin'){
            payload.isAdmin = true;
        }

        // GENERAR EL TOKEN
        const token = await generateToken(payload);

        // TODO CORRECTO
        return response.status(200).json({
            mensaje: 'Inicio de sesion existoso',
            tokenGenerado: token //ESTO ES UNA MALA PRACTICA
        });

    } catch (error) {
        return response.status(400).json({
            mensaje: 'Inicio de sesion incorrecto',
            error: error.message || error
        });
    }
}


