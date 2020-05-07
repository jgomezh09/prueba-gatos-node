"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imagenController_1 = require("../controllers/imagenController");
class RouterImg {
    constructor() {
        this.router = express_1.Router();
        this.CtrlImage = new imagenController_1.ImagenController();
        this.rutas();
    }
    rutas() {
        this.router.get('/imagenes', this.CtrlImage.getImagenes);
        this.router.post('/imagenes/favoritos', this.CtrlImage.AddFavoritos);
        this.router.get('/imagenes/favoritos', this.CtrlImage.getImgFavoritos);
    }
}
const routerImg = new RouterImg();
exports.default = routerImg.router;
