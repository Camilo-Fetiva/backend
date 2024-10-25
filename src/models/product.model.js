// DEFINE LA ESTRUCTURA DE LOS DATOS A GUARDAR EN LA BASE DE DATOS

//1.IMPORTAR LAS DEPENDENCIAS
import mongoose from "mongoose";

//2.Plantilla de datos definida como SCHEMA -> esquema de datos solicitado a guardar en la base de datos
const productSchema = new mongoose.Schema({
    imageProduct:{type: String, required: true}, //Crear el tipo de dato dentro del esquema, en este caso imagen
    nameProduct:{type: String, required: true},
    categoryProduct:{type: String},
    priceProduct: {type: Number, required:true},
    stockProduct: {type: Number, required:true},
    isAvailable: {type: Boolean}
});

//3. La base de datos debe crear una coleccion con el esquma anterior
export const productModel = mongoose.model('product', productSchema);