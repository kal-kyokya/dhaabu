import redisClient from '../utils/redis';
import dbClient from '../utils/db';


export default class AppController {
  static getStatus(req, res) {
    const serverStatus = { "redis": redisClient.isAlive(), "db": dbClient.isAlive() };
    res.status(200).send(serverStatus);
  }

  static async getStats(req, res) {
    const dbStats = { "users": await dbClient.nbUsers(), "files": await dbClient.nbFiles() };
    res.status(200).send(dbStats);
  }
}
