const startServer = async()=>{
    require("./loaders")()//hace que se ejecute loaders/index.js lo que hace que levante express xq trae el archivo expressServer.js
};
startServer();