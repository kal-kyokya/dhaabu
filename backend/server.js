// Create an express server
import express from 'express';
import routing from './routes/index.js';
import cors from 'cors';

// Store an Express instance representing the app
const app = express();

// Initialize the app
const PORT = process.env.PORT || 5002;
app.use(cors());

// Ensure the app processes json data accordingly
app.use(express.json());

// Handle routing inside a function that manipulates the app object
routing(app);

// Run the server on the designated port
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
