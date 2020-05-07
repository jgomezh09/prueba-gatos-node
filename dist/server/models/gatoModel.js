"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const gatoSachema = new mongoose_1.Schema({
    Nombre: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    Raza: {
        type: String,
        required: [true, 'La raza es requerida']
    },
    Edad: {
        type: Number,
        required: [true, 'La edad es requerida']
    },
    Foto: {
        type: String,
        required: [true, 'La foto es requerida']
    },
});
exports.default = mongoose_1.model('Gato', gatoSachema);
