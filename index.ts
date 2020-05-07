import { config } from './server/config/config';
import Server from './server/classes/server';
import bodyParser from 'body-parser';
import express from 'express';
import  Mongoose  from 'mongoose';
import router from './server/routers';
import cors from 'cors';



// calase del servidor
const server = Server.instance;

// BodyParser
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );

// CORS
server.app.use( cors({ origin: true, credentials: true  }) );

// Carpeta publica
server.app.use(express.static(__dirname + '/public'));

//Rutas de los servicios
server.app.use('/', router );

// Conexion Base de datos Mongo
Mongoose.connect( config.urlDB || '', { 
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useCreateIndex: true 
})
.then(() => console.log('DB gatos está conectada'))
.catch(() => console.error("Error"));


// Iniciar servidor
server.start( () => {
    console.log(`Servidor corriendo en el puerto ${ server.port }`);
});
