// File containing a class enabling interaction with MongoDB
import { MongoClient } from 'mongodb';

class DBClient {
  // class definition
  constructor() {
    // Load environment variables
    const HOST = process.env.DB_HOST || 'localhost';
    const PORT = process.env.DB_PORT || '27017';
    const DATABASE = process.env.DB_NAME || 'dhaabu_db';

    const uri = `mongodb://${HOST}:${PORT}/${DATABASE}`;

    // Create a Client
      this.client = MongoClient(uri, { useUnifiedTopology: true });
  }

  // Function validating connection's status
  isAlive() {
    if (this.client.isConnected) {
      return true;
    }
    return false;
  }

  // Function returning the number of registered 'users'
  async nbUsers() {
    console.log('start');
    const db = await this.client.db();
    const userCount = await db.collection('users').countDocuments();
    console.log('resolved');
    console.log(userCount);
    return userCount;
  }
}

// Export of class instance
const dbClient = new DBClient();
export default dbClient;
