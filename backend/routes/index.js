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
  router.post('/users/singUp', UsersController.createNewUser);
  router.get('/users/me', AuthMiddleware.loginRequired, UsersController.getMe);
  // AuthController
  router.get('/signIn', AuthController.signingIn);
  router.get('/signOut', AuthController.signingOut);

}
