import { Router } from 'express';
import { GatoController } from '../controllers/gatoController';

class RouterGato {

    public router: Router = Router();
    private CtrlGato: GatoController = new GatoController();

    constructor() {
        this.rutas()
    }

    private rutas() {
        this.router.get('/gatos', this.CtrlGato.getGatos); 
        this.router.get('/gatos/:id', this.CtrlGato.getGato);
        this.router.put('/gatos/:id', this.CtrlGato.actualizarGato);
        this.router.post('/gatos', this.CtrlGato.crearGato);        
        this.router.delete('/gatos/:id', this.CtrlGato.eliminarGato);
    }

}

const routerGato = new RouterGato();
export default routerGato.router;