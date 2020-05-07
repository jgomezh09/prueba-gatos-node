"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("../config/config");
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = config_1.config.puerto;
    }
    static get instance() {
        return this._intance || (this._intance = new this());
    }
    start(callback) {
        this.app.listen(this.port, (callback));
    }
}
exports.default = Server;
