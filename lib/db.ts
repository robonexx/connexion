import mongoose, { Mongoose } from 'mongoose';

interface Connection {
  isConnected?: number;
}

const connection: Connection = {};

export const connectToDB = async (): Promise<void> => {
  try {
    if (connection.isConnected === 1) return;

    if (!process.env.MONGO_DB_URI) {
      throw new Error('MONGO_DB_URI is not defined in the environment variables.');
    }

    const db: Mongoose = await mongoose.connect(process.env.MONGO_DB_URI);

    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error(`Error connecting to MongoDB at ${process.env.MONGO_DB_URI}:`, error);
    throw new Error(error as string);
  }
};