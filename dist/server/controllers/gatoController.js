"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gatoModel_1 = __importDefault(require("../models/gatoModel"));
class GatoController {
    getGatos(req, res) {
        gatoModel_1.default.find({}, (err, gatos) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                gatos
            });
        });
    }
    getGato(req, res) {
        const id = req.params.id;
        gatoModel_1.default.find({ _id: id }, (err, gato) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                gato
            });
        });
    }
    crearGato(req, res) {
        console.log('creó');
        let { Nombre, Raza, Edad, Foto } = req.body;
        const crearGato = new gatoModel_1.default({
            Nombre, Raza, Edad, Foto
        });
        crearGato.save((err, gato) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                gato
            });
        });
    }
    actualizarGato(req, res) {
        const id = req.params.id;
        const body = req.body;
        console.log(body);
        gatoModel_1.default.findByIdAndUpdate({ _id: id }, body, { new: true, runValidators: true }, (err, gato) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                gato
            });
        });
    }
    eliminarGato(req, res) {
        const id = req.params.id;
        gatoModel_1.default.findOneAndDelete({ _id: id }, (err, gato) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                gato
            });
        });
    }
}
exports.GatoController = GatoController;
