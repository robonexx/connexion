import mongoose, { Mongoose } from 'mongoose';

interface Connection {
  isConnected?: number;
}

const connection: Connection = {};

export const connectToDB = async (): Promise<void> => {
  try {
    if (connection.isConnected) return;

    const db: Mongoose = await mongoose.connect(process.env.MONGO_DB_URI || '');

    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error(error);
    throw new Error(error as string);
  }
};