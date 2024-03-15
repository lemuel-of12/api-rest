// Importamos la aplicación Express desde app.js
import app from "./app.js";
// Importamos la conexión a la base de datos desde database.js
import database from "./database.js";
// Obtenemos el puerto del entorno en el que se ejecuta la aplicación
const PORT = process.env.PORT;
// Hacemos que la aplicación escuche en el puerto especificado
app.listen(PORT, () => {
    // Imprimimos un mensaje en la consola cuando el servidor comienza a escuchar en el puerto
    console.log(`Server on port ${PORT}`);
});