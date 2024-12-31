// This is a Script containing a class whose methods handle API routes
import dbClient from '../utils/db';
import { sha1 } from 'js-sha1';
import { ObjectId } from 'mongodb';
import redisClient from '../utils/redis';

export default class UsersController {
    // Create a new user based on email and password
    static async postNew(req, res) {

	// Validate the 'email' sent
	const email = req.body ? req.body.email : null;
	if (!email) {
	    res.status(400).send({'error': 'Missing email'});
	    return
	}

	// Validate the 'password' sent
	const password = req.body ? req.body.password : null;
	if (!password) {
	    res.status(400).send({'error': 'Missing password'});
	    return
	}

	const ourDB = dbClient.client.db();
	const userCollection = ourDB.collection('users');

	const user = await userCollection.findOne({ email });

	// Verify that the 'email' not in Database
	if (user && user.email === email) {
	    res.status(400).send({'error': 'Email already in use, User already exists N*gga'});
	    return;
	}

	// Hash 'password' using SHA1
	const hashedPwd = sha1(password);

	// Save 'new user' to MongoDB
	const newUser = await userCollection.insertOne({email, hashedPwd});

	// Return an Object containing the user's 'email' and the auto-assigned 'id'
	res.status(200).send(
	    {
		email: newUser.ops[0].email || 'None',
		'id': newUser.ops[0]._id || 0,
	    }
	);
    }
    
    // Retrieves the user based on the token used
    static async getMe(req, res) {
      const token = req.headers['x-token'];
      const key = `auth_${token}`;
      const userId = await redisClient.get(key);
      const user = await (await dbClient.client.db()).collection('users').findOne({ _id: new ObjectId(userId) });
      if(!user) {
        return res.status(401).send({ 'error': 'Unauthorized' });
      }

      return res.send({ "id": userId, "email": user.email });

    }
}
