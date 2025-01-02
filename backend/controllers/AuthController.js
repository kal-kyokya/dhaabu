//File containing endpoints that will authenticate the user
import redisClient from '../utils/redis';
import dbClient from '../utils/db';
import { v4 as uuidv4 } from 'uuid';
import { ObjectId } from 'mongodb';

export default class AuthController {
  //Signs in the user by generating new auth token
  static async signingIn(req, res) {
    const header = req.headers.authorization;
    if(!header) {
      return res.status(401).send({ 'error': 'Unauthorized' });
    }
    const credentials = Buffer.from(header.split(' ')[1], 'base64').toString('utf-8');
    const email = credentials.split(':')[0];
    const password = credentials.split(':')[1];

    const user = await (await dbClient.client.db()).collection('users').findOne({ email });
    if(!user) {
      return res.status(401).send({ 'error': 'Unauthorized' });
    }

    const token = uuidv4();
    const key = `auth_${token}`;
    await redisClient.set(key, user._id, 86400);
    return res.status(200).send({ "token": token });
  }
  
  //Will sign out user based on token
  static async signingOut(req, res) {
    const token = req.headers['x-token'];
    const key = `auth_${token}`;
    const userId = await redisClient.get(key);
    const user = await (await dbClient.client.db()).collection('users').findOne({ _id: new ObjectId(userId) });
    if(!user) {
      return res.status(401).send({ 'error': 'Unauthorized' });
    }
    try {
      await redisClient.del(key);
      return res.status(204).send({});
    } catch(error) {
      console.error(error);
    }
  }

}
