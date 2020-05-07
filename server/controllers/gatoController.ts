import Gato from "../models/gatoModel";
import { Request, Response } from "express";



export class GatoController {


    getGatos(req: Request, res: Response) {


        Gato.find({}, (err, gatos) => {
            if(err) {
                return res.status(500).json({
                    ok: false,
                    err                    
                });
            }

            res.json({
                ok: true,
                gatos
                
            });
        })

    }


    getGato(req: Request, res: Response) {

        const id = req.params.id;
        Gato.find({_id: id}, (err, gato) => {

            if(err) {
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


    crearGato(req: Request, res: Response) {

        console.log('creó');

         let { Nombre, Raza, Edad, Foto } = req.body

         const crearGato = new Gato({
               Nombre, Raza, Edad, Foto
         });

         crearGato.save((err, gato) => {

            if(err) {
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

    actualizarGato(req: Request, res: Response) {

        const id = req.params.id;    
        const body = req.body;   
        console.log(body);
   
        Gato.findByIdAndUpdate({_id: id }, body, { new: true, runValidators: true }, (err, gato) => {
        
            if(err) {
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


    eliminarGato(req: Request, res: Response) {

        const id = req.params.id; 
        Gato.findOneAndDelete ({_id: id },(err, gato) => {
        
            if(err) {
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