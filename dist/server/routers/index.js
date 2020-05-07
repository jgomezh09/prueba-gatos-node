"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imagenRouter_1 = __importDefault(require("./imagenRouter"));
const gatoRouter_1 = __importDefault(require("./gatoRouter"));
const router = express_1.Router();
router.use(imagenRouter_1.default);
router.use(gatoRouter_1.default);
exports.default = router;
