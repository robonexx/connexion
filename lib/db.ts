import mongoose, { Mongoose } from 'mongoose';

interface Connection {
  isConnected?: boolean;
}

const connection: Connection = {};

export const connectToDB = async (): Promise<void> => {
 
  if (!process.env.MONGO_DB_URI) {
    throw new Error('MONGO_DB_URI is not defined in the environment variables.');
  }

  if (connection.isConnected) {
    console.log('Database is already connected.');
    return;
  }

  try {
    const db: Mongoose = await mongoose.connect(process.env.MONGO_DB_URI);

    // connection status to true if connected
    connection.isConnected = true;

    console.log('Database connected successfully.');
  } catch (error) {
    // Handle errors if there's an issue connecting to the database
    console.error(`Error connecting to MongoDB at ${process.env.MONGO_DB_URI}:`, error);

    // Set status to false in case of an error
    connection.isConnected = false;

    throw new Error(error as string);
  }
};