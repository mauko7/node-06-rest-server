const winston = require('winston');
const config = require("../../config")

const transports =[]

transports.push(
    new winston.transports.Console(),  
);
const LoggerInstance = winston.createLogger({
     //recibe un objeto de configuracion
     level:config.log.level,//que tipo de log quiero que se imprima.. en desarrollo se suele poner todo.. en produccion en general pone un nivel info o nivel error para no tener tanto dato que no es necesario en un archivo
     //este tipo de level lo pongodesde el .env y lo paso por el config por eso importe confi arriba
     format: winston.format.simple(),
     transports
}
   

);


module.exports= LoggerInstance;