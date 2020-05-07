"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config/config");
class ImagenController {
    getImagenes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = "https://api.thecatapi.com/v1/images/search?limit=10";
                const ImgGatos = yield axios_1.default.get(url, { headers: config_1.header });
                return res.json({
                    ok: true,
                    Imagenes: ImgGatos.data
                });
            }
            catch (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
        });
    }
    AddFavoritos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const id = req.body.id;
                if (!id)
                    return;
                const url = 'https://api.thecatapi.com/v1/favourites';
                let body = {
                    image_id: id,
                    sub_id: "gatito-kafka"
                };
                let response = yield axios_1.default.post(url, body, { headers: config_1.header });
                console.log('el gatito', response.data);
                if (response.data.message === 'SUCCESS') {
                    return res.json({
                        ok: true,
                        id: response.data.id
                    });
                }
            }
            catch (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
        });
    }
    getImgFavoritos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield axios_1.default.get('https://api.thecatapi.com/v1/favourites', { headers: config_1.header });
                return res.json({
                    ok: true,
                    favoritos: response.data
                });
            }
            catch (err) {
                return res.json({
                    ok: true,
                    err
                });
            }
        });
    }
}
exports.ImagenController = ImagenController;
