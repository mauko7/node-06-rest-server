//CARGAMOS LAS PROPIEDADES DE AMBIENTES QUE SE SACAN DEL .ENV


const dotenv = require("dotenv");

const envFound = dotenv.config();
//validacion de que este el .env en los archivos
if(!envFound){
    throw new Error("Could not find .env file");
};
//validacion del entorno
process.env.NODE_ENV = process.env.NODE_ENV ||"development";

module.exports ={
    port:process.env.PORT,
    api:{
        prefix:"api/v1"
    }
}