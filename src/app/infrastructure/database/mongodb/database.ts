import mongoose from 'mongoose';

// https://refactoring.guru/es/design-patterns/singleton/typescript/example
// No realize un singleton aqui porque la instance de mongoose se mantiene en toda la aplicacion a traves de los modelosS
export const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Database connection Successfully');
  } catch (error) {
    console.log(error);
    throw new Error('Error connecting to database');
  }
};