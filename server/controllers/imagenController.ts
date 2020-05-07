import axios from 'axios';
import { header } from '../config/config';
import { Request, Response } from 'express';


export class ImagenController {

    async getImagenes(req: Request, res: Response) {
        try {

            const url:string = "https://api.thecatapi.com/v1/images/search?limit=10"
            const ImgGatos = await axios.get(url, {headers: header});
            return res.json({
                ok: true,
                Imagenes: ImgGatos.data  
            });

        } catch (err) {

            return res.status(500).json({
                ok: false,
                err 
            });  

        }         
         
    }

    async AddFavoritos(req: Request, res: Response) {
        try{

            console.log(req.body)

            const id = req.body.id;           
            if(!id) 
               return;

            const url = 'https://api.thecatapi.com/v1/favourites';
            let body = {
                image_id: id,
                sub_id:"gatito-kafka"
            }

            let response = await axios.post(url, body, {headers: header} );
                 console.log('el gatito',response.data);
                if(response.data.message === 'SUCCESS')
                    {
                        return res.json({
                            ok: true,
                            id: response.data.id
                        })
                    }
            
        }catch(err) {

            return res.status(500).json({
                ok: false,
                err 
            });     

        }
         
    }


    async getImgFavoritos(req: Request, res: Response) {

        try{
                    
            let response = await axios.get('https://api.thecatapi.com/v1/favourites',{headers: header});
                return res.json({
                     ok: true,
                     favoritos: response.data
                });                
                
        } catch(err) {

            return res.json({
                ok: true,
                err
            });

        }

    }

}