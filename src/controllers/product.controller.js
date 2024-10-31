// Los controllers -> gestionan la logica de las peticiones (GET, POST, PUT, DELETE)
// 1. Importar el modelo de datos a manipular

import { request, response } from 'express';
import { productModel } from '../models/product.model.js';

// peticion POST -> Crear productos
export const postProduct = async (request, response) =>{

    // Logica de la peticion POST -> manejo de errores
    try{
        // para crear informacion -> enviar informacion
        // enviar la info en el cuerpo de la peticion -> body
        const newProduct = await productModel.create(request.body); // Coleccion en la base de datos
        return response.status(201).json({
            mensaje: "producto creado satisfactoriamente",
            datos: newProduct
        });
    }catch (error){
        return response.status(400).json({
            mensaje: "Ocurrio un error al crear el producto",
            problem: error || error.message
        });
    };
}


// peticions GET -> Mostrar productos
export const getProduct = async (request, response) => {

    // Logica de la peticion GET -> manejo de errores
    try{
        // METODO FIND -> mostrar todo lo que encuentra en la base de datos
        let products = await productModel.find()
        // Agregar validaciones -> que pasa si no hay nada almacenado?
        if(products.length === 0){
            return response.status(200).json({
                mensaje : "No hay productos en la base de datos",
            });
        }

        // Si hay productos almacenados
        return response.status(200).json({
            mensaje: "Estos son los productos encontrados",
            datos: products
        });
    }catch (error){
        return response.status(400).json({
            mensaje: "Ocurrio un error al buscar los productos",
            problem: error || error.message
        });
    };
}


// peticion PUT -> Actualizar productos (Actualizar un producto en particular -> utilizar por ID)
export const putProductById = async (request, response) => {

    // Logica de la peticion PUT
    try {
        let idForPut = request.params.id; //Parametro ID del producto a actualizar
        let dataForUpdate = request.body; // Informacion actualizada

        const productUpdated = await productModel.findByIdAndUpdate(idForPut, dataForUpdate); // Parametro del ID  y luego parametro de la info actualizada

        // Validacion cuando el ID no es correcto o no existe
        // !productUpdated -> significa la negacion de una variable (ESTA VACIA O LA CONDICIONS ES FALSA)
        if(!productUpdated){
            return response.status(404).json ({
                mensaje: "No se encontro producto para actualizar"
            });
        }

        return response.status(200).json({
            mensaje: "Se actualizo el producto correctamente",
            datos: productUpdated
        })

    } catch (error) {
        return response.status(400).json({
            mensaje: "Ocurrio un error al actualizar el producto",
            problem: error || error.message
        });
    }
}


// peticion DELETE -> Eliminar productos (Eliminar un producto en particular -> utilizar por ID)
export const deleteProductById = async (request, response) => {

    // Logica de la peticion DELETE
    try {
        let idForDelete = request.params.id;
        //Lo eliminado no se guarda en una variable
        await productModel.findByIdAndDelete(idForDelete); //Encotrar el producto por ID y eliminarlo
        return response.status(200).json({
            mensaje: "Producto eliminado satisfactoriamente" //Mensaje que se da al eliminar un rpodcuto
        });


    } catch (error) {
        return response.status(400).json({
            mensaje: "Ocurrio un error al eliminar el producto",
            problem: error || error.message
        });
    }
}