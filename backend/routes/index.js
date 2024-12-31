//Contains all our API endpoints
import { Router } from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';


export default function routing(app) {
  const router = new Router();
  app.use('/', router);
  // AppController
  router.get('/status', AppController.getStatus);
  router.get('/stats', AppController.getStats);
  // UsersController
  router.post('/users', UsersController.postNew);
  router.get('/users/me', UsersController.getMe);
  // AuthController
  router.get('/connect', AuthController.getConnect);
  router.get('/disconnect', AuthController.getDisconnect);
}

