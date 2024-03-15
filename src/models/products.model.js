// Importamos Schema y model de mongoose
import { Schema, model } from "mongoose";

// Definimos el esquema del producto
const productSchema = new Schema({
    // Código de barras del producto, debe ser único y es requerido
    barcode:{
        type: String,
        unique: true,
        required: true
    },
    // Descripción del producto
    description: String,
    // Marca del producto
    brand: String,
    // Precio del producto
    price: Number,
    // Costo del producto
    cost: Number,
    // Stock del producto
    stock: Number,
    // Fecha de vencimiento del producto
    expiredDate:String,
    // Estado del producto
    status:Number
},{
    // Desactivamos la clave de versión de mongoose
    versionKey: false,
    // Habilitamos las marcas de tiempo (createdAt y updatedAt)
    timestamps: true    
});

// Exportamos el modelo del producto
export default model('product', productSchema);