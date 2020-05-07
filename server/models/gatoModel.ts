import  Mongoose, { Schema, model } from "mongoose";


interface IGato extends Mongoose.Document {

    Nombre: string;
    Raza: string;
    Edad: number;
    Foto: string;

};

const gatoSachema = new Schema({

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

export default model<IGato>('Gato', gatoSachema);



