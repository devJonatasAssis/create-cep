import {Router} from 'express';

import UserController from './controllers/UserController';
import ZipCodeController from './controllers/ZipCodeController';

const routes = Router();

// Rotas de Usuários
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

// Rotas de CEPS
routes.get('/zipcode', ZipCodeController.index);
routes.post('/zipcode', ZipCodeController.store);
routes.delete('/zipcode/:id', ZipCodeController.delete);

export default routes;