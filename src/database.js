// Importamos mongoose, que es una biblioteca de Node.js para trabajar con MongoDB
import mongoose from "mongoose";

// Nos conectamos a la base de datos utilizando la cadena de conexión almacenada en las variables de entorno
mongoose.connect(process.env.CONNECTION_STRING)
// Si la conexión es exitosa, imprimimos 'DB is connected'
.then(db => console.log('DB is connected'))
// Si hay un error durante la conexión, lo imprimimos
.catch(err => console.log(err));

// Exportamos mongoose para que pueda ser utilizado en otros módulos
export default mongoose;