"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gatoController_1 = require("../controllers/gatoController");
class RouterGato {
    constructor() {
        this.router = express_1.Router();
        this.CtrlGato = new gatoController_1.GatoController();
        this.rutas();
    }
    rutas() {
        this.router.get('/gatos', this.CtrlGato.getGatos);
        this.router.get('/gatos/:id', this.CtrlGato.getGato);
        this.router.put('/gatos/:id', this.CtrlGato.actualizarGato);
        this.router.post('/gatos', this.CtrlGato.crearGato);
        this.router.delete('/gatos/:id', this.CtrlGato.eliminarGato);
    }
}
const routerGato = new RouterGato();
exports.default = routerGato.router;
