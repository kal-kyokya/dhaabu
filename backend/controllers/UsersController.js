// This is a Script containing a class whose methods handle API routes
import { sha1 } from 'js-sha1';
import dbClient from '../utils/db';

export default class UsersController {
  /**
   * Creates a new user by saving their username, email and password
   * @param { Object } req - The request object
   * @param { Object } res - The response object
   */
  static async createNewUser(req, res) {
    // Validate the 'username' sent
    const username = req.body ? req.body.username : null;
    if (!username) {
      res.status(400).send({ error: 'Missing username' });
      return;
    }

    // Validate the 'email' sent
    const email = req.body ? req.body.email : null;
    if (!email) {
      res.status(400).send({ error: 'Missing email' });
      return;
    }

    // Validate the 'password' sent
    const password = req.body ? req.body.password : null;
    if (!password) {
      res.status(400).send({ error: 'Missing password' });
      return;
    }

    const ourDB = dbClient.client.db();
    const userCollection = ourDB.collection('users');

    const user = await userCollection.findOne({ email });

    // Verify that the 'email' not in Database
    if (user && user.email === email) {
      res.status(400).send({ error: 'Email already in use' });
      return;
    }

    // Hash 'password' using SHA1
    const hashedPwd = sha1(password);

    // Save 'new user' to MongoDB
    const newUser = await userCollection.insertOne({ username, email, hashedPwd });

    // Return an Object containing the user's 'email' and the auto-assigned 'id'
    res.status(200).send({ email, username, id: newUser.ops[0]._id || 0 });
  }

  /**
   * Retrieves the user based on the token in the request object
   * @param { Object } req - The request object
   * @param { Object } res - The response object
   */
  static async getMe(req, res) {
    const { user } = req;
    return res.send({ id: user._id.toString(), email: user.email });
  }
}
