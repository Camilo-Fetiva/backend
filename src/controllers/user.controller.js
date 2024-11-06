// LOGICA DE CONTROLADORES PARA LOS USUARIOS
// Peticiones-> GET (CREAR), POST (VER)

// 1. Importar las dependencias y el modelo de datos a manipular

import bcrypt from 'bcryptjs'// Dependencia de encriptacion
import { userModel } from '../models/users.model.js';

// CREAR LAS FUNCIONES ASINCRONAS PARA CADA PETICION

// peticion POST -> Crear usuarios
export const postUser = async (request, response) =>{

    // Logica de la peticion POST
    try {

        // Deestructuracion ->  Permite acceder a cada una de las variables suministradas por el usuario en el Schema de datos
        const {nameUser, emailUser, passwordUser, roleUser} = request.body;
        
        // encriptar la contrasena
        // hash -> metodo para encriptar la contrasena
        const codedPassword = await bcrypt.hash(passwordUser, 10);

        const newUser = await userModel.create({nameUser, emailUser, passwordUser: codedPassword, roleUser}); // Traer la variable de la password encriptada

        return response.status(201).json({
            mensaje: "Usuario creado satisfactoriamente",
            datos: newUser
        });
        
    } catch (error) { //catch -> atrapar errores
        return response.status(400).json({
            mensaje: 'Error al crear un usuario',
            problema: error || error.message
        });
    }
}


// peticions GET -> Mostrar usuarios
export const getUser = async (request, response) => {

    // Logica de la peticion GET
    try {
        let users = await userModel.find() //Encontrar los usuarios

        if(users.length === 0){
            return response.status(200).json({
                mensaje : 'No hay usuarios en la base de datos',
            });
        }

        return response.status(200).json({
            mensaje :'Estos son los usuarios encontrados',
            datos: users
        });

    } catch (error) { //catch -> atrapar errores
        return response.status(400).json({
            mensaje: 'Error al mostrar los usuarios',
            problema: error || error.message
        });
    }
}

