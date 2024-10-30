// Los controllers -> gestionan la logica de las peticiones (GET, POST, PUT, DELETE)
// 1. Importar el modelo de datos a manipular

import { request, response } from 'express';
import { userModel } from '../models/users.model.js';

// peticion POST -> Crear usuarios
export const postUser = async (request, response) =>{

    // Logica de la peticion POST
    return response.json({'Mensaje': 'Funciona la peticion POST'});
}


// peticions GET -> Mostrar usuarios
export const getUser = async (request, response) => {

    // Logica de la peticion GET
    return response.json ({'Mensaje': 'Funciona la peticion GET'})
}


// peticion PUT -> Actualizar usuarios (Actualizar un usuario en particular -> utilizar por ID)
export const putUserById = async (request, response) => {

    // Logica de la peticion PUT
    return response.json ({'Mensaje': 'Funciona la peticion PUT'})
}


// peticion DELETE -> Eliminar usuarios (Eliminar un usuario en particular -> utilizar por ID)
export const deleteUserById = async (request, response) => {

    // Logica de la peticion DELETE
    return response.json ({'Mensaje': 'Funciona la peticion DELETE'})
}