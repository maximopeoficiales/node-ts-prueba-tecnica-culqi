import mongoose from 'mongoose';

export const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Database connection Successfully');
  } catch (error) {
    console.log(error);
    throw new Error('Error connecting to database');
  }
};