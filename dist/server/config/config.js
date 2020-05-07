"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/gatos';
}
else {
    urlDB = 'mongodb+srv://jgomezh:S0p0rt3S0p0rt3@cluster0-dhurk.mongodb.net/gatos';
}
exports.config = {
    'puerto': Number(process.env.PORT || 3000),
    'urlDB': urlDB,
};
exports.header = {
    "x-api-key": "7b6276c7-e964-431d-811a-4a1499919e8d",
    "Content-Type": "application/json"
};
exports.urlApi = {
    "urlGetImg": "https://api.thecatapi.com/v1/images/search?limit=10",
    "urlFavoritas": ""
};
