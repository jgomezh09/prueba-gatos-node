import { Router } from 'express';
import routerImg from './imagenRouter';
import routerGato from './gatoRouter';

const router:Router = Router();

router.use( routerImg );
router.use( routerGato )


export default router;