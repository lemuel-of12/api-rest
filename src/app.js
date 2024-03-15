// Importamos los módulos necesarios
import  express  from "express";
import morgan from "morgan";
import ejs from "ejs";
import productsRoutes from "./routes/products.routes.js";
import {config} from "dotenv";
// Cargamos las variables de entorno desde el archivo .env
config();

// Creamos una nueva aplicación Express
const app = express();
// Configuramos la aplicación
// Establecemos el motor de vistas a ejs
app.set('views engine','ejs');
// Middlewares
// Usamos el middleware de express.json para analizar las solicitudes con contenido JSON
app.use(express.json());
// Usamos el middleware de express.urlencoded para analizar las solicitudes con contenido URL-encoded
app.use(express.urlencoded({extended:false}));
// Usamos el middleware de morgan para registrar las solicitudes HTTP en la consola
app.use(morgan('dev'));
// Usamos el middleware de productsRoutes para manejar las rutas que comienzan con /api/products
app.use('/api/products',productsRoutes);

// Exportamos la aplicación para que pueda ser utilizada en otros módulos
export default app;
