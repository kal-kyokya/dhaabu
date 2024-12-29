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
    this.client.connect();
  }

  // Function validating DB connection's status
  isAlive() {
    return this.client.isConnected();
  }

  // Function returning the number of registered 'users'
  async nbUsers() {
    const ourDB = this.client.db();
    const userCount = ourDB.collection('users').countDocuments();
    return userCount;
  }

  // Function returning the number of uploaded 'files'
  async nbFiles() {
    const ourDB = this.client.db();
    const userCount = ourDB.collection('files').countDocuments();
    return userCount;
  }
}

// Export of class instance
const dbClient = new DBClient();
export default dbClient;
