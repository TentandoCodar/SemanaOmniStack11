import { Router } from 'express';
import OngController from './controllers/OngController';


const router = Router();

router.post('/ongs', OngController.store);

export default router;