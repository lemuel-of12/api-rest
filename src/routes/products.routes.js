// Importamos el controlador de productos para manejar las solicitudes GET a la ruta /getAll y /getOne
import { getAll,getOne,insertProduct,updateProduct,deleteProduct } from "../controllers/products.controller.js";
// Importamos el enrutador de Express
import  {Router}  from "express";

// Creamos una nueva instancia de Router
const router = Router();

// Configuramos el router para manejar las solicitudes GET a la ruta /getAll con el controlador getAll
router.get('/',getAll);

router.get('/:bc',getOne);
 
router.post('/',insertProduct);

router.put('/:bc',updateProduct);

router.delete('/:bc',deleteProduct);


// Exportamos el router para que pueda ser utilizado en otros módulos
export default router;