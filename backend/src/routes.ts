import { Router } from 'express';
import OngController from './controllers/OngController';
import SessionController from './controllers/SessionController';
import IncidentsController from './controllers/IncidentsController';


//Middlewares
import AuthMiddleware from './middlewares/Auth';

const router = Router();

router.post('/ongs', OngController.store);
router.get('/ongs/:page?', AuthMiddleware.ignite, OngController.show);
router.post('/login', SessionController.login);

router.post('/incidents',AuthMiddleware.ignite , IncidentsController.store);
router.delete('/incidents/:id', AuthMiddleware.ignite, IncidentsController.delete);
router.get('/incidents', IncidentsController.index);

export default router;