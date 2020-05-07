import { Router } from 'express';
import { ImagenController } from '../controllers/imagenController';

class RouterImg {

    public router: Router = Router();
    private CtrlImage: ImagenController = new ImagenController();

    constructor() {
        this.rutas()
    }

    private rutas() {
        this.router.get('/imagenes', this.CtrlImage.getImagenes); 
        this.router.post('/imagenes/favoritos', this.CtrlImage.AddFavoritos);  
        this.router.get('/imagenes/favoritos', this.CtrlImage.getImgFavoritos); 
    }

}

const routerImg = new RouterImg();
export default routerImg.router;