// Importamos el DAO de productos
import productDao from "../dao/products.dao.js";

// Creamos y exportamos una función para manejar las solicitudes GET a la ruta /products
export const getAll = (req, res) => {
    // Llamamos al método getAll del DAO de productos
    productDao.getAll()
    .then(products=>{
        if(products!=null)
        res.json(products);
        else
        res.json({
            status:"producto no encontrado"
        })
    })
    .catch(err => {
        res.json({
            status: "server error"
        })
    })
};
// Creamos y exportamos una función para manejar las solicitudes GET a la ruta /products/:bc
export const getOne = (req,res)=>{
    productDao.getOne(req.params.bc)
    .then(products=>{
        if(products!=null)
        res.json(products);
        else
        res.json({
            status:"producto no encontrado"
        })
    })
    .catch(()=>{
        res.json({
            status:"servidor no disponible"
        });
    })
}

export const insertProduct=(req,res)=>{
    productDao.insertProduct(req.body)
    .then(result=>{
        res.json({
            status: "Product saved"
        })
    })
    .catch(err=>{
        res.json({
            status: "server error"
        })
    })
}

export const updateProduct=(req,res)=>{
    productDao.updateProduct(req.params.barcode,req.body)
    .then(result=>{
        if(result)
            res.json({
                status: "Product updated"
            })
        else
            res.json({
                status: "Product not found"
            })
    })
    .catch(err=>{
        res.json({
            status: "server error"
        })
    })  
}

export const deleteProduct=(req,res)=>{
    productDao.deleteProduct(req.params.barcode)
    .then(result=>{
        if(result)
            res.json({
                status: "Product deleted"
            })
        else
            res.json({
                status: "Product not found"
            })
    })
    .catch(err=>{
        res.json({
            status: "server error"
        })
    })  
}