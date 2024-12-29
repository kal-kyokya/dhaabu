//Contains all our API endpoints
import { Router } from 'express';
import AppController from '../controllers/AppController';


export default function routing(app) {
  const router = new Router();
  app.use('/', router);
  router.get('/status', AppController.getStatus);
  router.get('/stats', AppController.getStats);
}

