// This file contain all the app's API endpoints
import { Router } from 'express';
import AppController from '../controllers/AppController';
import AuthController from '../controllers/AuthController';
import UsersController from '../controllers/UsersController';

export default function routing(app) {
  // Create a router instance
  const router = new Router();

  // Mount the router on '/' and all subsequent paths
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
