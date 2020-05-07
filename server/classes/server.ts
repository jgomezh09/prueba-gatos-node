import express from 'express';
import { config } from '../config/config';


export default class Server {

    private static _intance: Server;

    public app: express.Application;
    public port: number;
   

    private constructor() {
        this.app = express();
        this.port = config.puerto;
    }

    public static get instance() {
        return this._intance || ( this._intance = new this() );
    }

    start( callback: any ) {
        this.app.listen( this.port, (callback));
    }

}