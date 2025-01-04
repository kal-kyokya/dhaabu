// This file contains a class protecting routes that require login
import dbClient from '../utils/db';
import redisClient from '../utils/redis';
import { ObjectId } from 'mongodb';


export default class AuthMiddleWare {
    static async loginRequired(req, res, next) {
	const token = req.headers['x-token'];
	const key = `auth_${token}`;
	const userId = await redisClient.get(key);
	if(!userId) {
            return res.status(401).send({ 'error': 'Unauthorized' });
	}
	const user = await (await dbClient.client.db()).collection('users').findOne({ _id: new ObjectId(userId) });
	if(!user) {
            return res.status(401).send({ 'error': 'Unauthorized' });
	}
	req.user = user;
	req.key = key;
	next();
    }

    static async logoutRequired(req, res, next) {
       if(req.headers['x-token']) {
         return res.redirect('/users/me')  // .send({ "error": "User already logged in" });
       }
       next();
    }
}
