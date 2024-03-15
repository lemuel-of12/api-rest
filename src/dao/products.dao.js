// Importamos el modelo de producto
import product from '../models/products.model.js';

// Creamos un objeto vacío para el DAO (Data Access Object) del producto
const productDao = {};

// Agregamos un método al DAO para obtener todos los productos
productDao.getAll = async (bc) => {
    // Usamos el método find de mongoose para obtener todos los productos de la base de datos
    const products = await product.find();
    // Devolvemos los productos obtenidos
    console.log(products);

    return products;
}
productDao.getOne = async (bc) => {
    console.log(bc);
    const products = await product.findOne({barcode:bc});
    console.log(products);
    return products;
}

productDao.insertProduct=async (product)=>{
    const productSaved=new product(product);
    await productSaved.save();
    return true;
}

productDao.updateProduct=async (barcode,product)=>{
    const productUpdated=await product.findOneAndUpdate({ "barcode": product.barcode},{product});
    if(productUpdated!=null)
        return true;
    else
        return false;
}

productDao.deleteProduct=async (barcode)=>{
    const productDeleted=await product.findOneAndDelete({barcode:barcode});
    console.log(productDeleted);
    if(productDeleted!=null)
        return true;
    else
        return false;
}

// Exportamos el DAO del producto para que pueda ser utilizado en otros módulos
export default productDao;