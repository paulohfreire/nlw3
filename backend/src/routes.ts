import { Router } from 'express';
import multer from 'multer';

import upLoadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController'

const routes = Router();
const upload = multer(upLoadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;