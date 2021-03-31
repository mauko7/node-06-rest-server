//CONFIG DE EXPRESS ( stat)

const express= require("express");
const morgan = require ("morgan");
const config=require("../../config");

class ExpressServer{
    constructor(){
        this.app=express();
        this.port=config.port;
        this._middlewares(); //desde el costructor llamamos a la funcion _meddleware
        this.basePath =`${config.api.prefix}`;
        this._routes();//llamamos a la funcion rutas desde el constructor
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


        this.app.use(`/users`,require("../../routes/users"));
    }
    async start(){
        this.app.listen(this.port,(error)=>{
            if(error){
                console.log(err);
                process.exit(1);//con esto decimos que la app se para
                return;
            }
        })
    }


}
module.exports={
    ExpressServer
}