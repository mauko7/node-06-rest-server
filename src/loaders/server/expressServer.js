//CONFIG DE EXPRESS ( stat)

const express= require("express");
const morgan = require ("morgan");
const swaggerUi = require('swagger-ui-express');

const config=require("../../config");
const logger = require ("../logger");


class ExpressServer{
    constructor(){
        this.app=express();
        this.port=config.port;

        this._middlewares(); //desde el costructor llamamos a la funcion _meddleware
        
        //this._swaggerConfig();
        
        this._routes();//llamamos a la funcion rutas desde el constructor
        this._notFound();
        this._errorHandler();
    }

    _middlewares(){
        this.app.use(express.json());//hace que express funcione con comunicacion de content-type a json. Tanto las entradas como salidas van a ser json
        this.app.use(morgan("tiny"));
    }

    _routes(){
        //este status sirve para que luego l aparte de infraestructura conecte otra aplicacion que va a chequear constantemente si nuestra app esta levantada o se callo.
        this.app.head(("/status"),(req,res)=>{
            res.status(200).end();
        })


        this.app.use(`${config.api.prefix}/users`,require("../../routes/users"));
    }

    _notFound(){
        this.app.use((req,res,next)=>{
            const err = new Error("Not Found");
            err.code=404;
            next(err);
        });
    }
    _errorHandler(){
        this.app.use((err,req,res,next)=>{
            const code = err.code || 500;
            
            logger.error(`${code} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
            logger.error(err.stack)
            
            const body = {
                error:{
                    code,
                    message: err.message
                }
            }
            res.status(code).json(body);
        })
    }
/*
    _swaggerConfig(){
        this.app.use(
        config.swagger.path,
        swaggerUi.serve,
        swaggerUi.setup(swaggerDocument));
    }
*/

    async start(){
        this.app.listen(this.port,(error)=>{
            if(error){
                loggers.error(err);
                process.exit(1);//con esto decimos que la app se para
                return;
            }
        })
    }


}
module.exports={
    ExpressServer
}