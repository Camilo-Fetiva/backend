// DEFINE LA ESTRUCTURA DE LOS DATOS A GUARDAR EN LA BASE DE DATOS

//1.IMPORTAR LAS DEPENDENCIAS
 import mongoose from "mongoose";

//2.Plantilla de datos definida como SCHEMA -> esquema de datos solicitado a guardar en la base de datos
const userSchema = new mongoose.Schema({
    nameUser:{type: String, required: true}, //Crear el tipo de dato dentro del esquema, en este caso el nombre
    emailUser:{type: String, required: true, unique:true},
    passwordUser:{type: String, required: true},
    roleUser: {type: String, default: 'cliente'},
});

//3. La base de datos debe crear una coleccion con el esquma anterior
export const userModel = mongoose.model('user', userSchema);