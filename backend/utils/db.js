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
    return this.client.db().collection('users').countDocuments();
  }

  // Function returning the number of uploaded 'files'
  async nbFiles() {
    return this.client.db().collection('files').countDocuments();
  }
}

// Class instance export
const dbClient = new DBClient();
export default dbClient;
