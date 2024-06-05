import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async (): Promise<void> => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error('MONGO_URI is not defined in environment variables');
  }

  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log('MongoDB conectado');
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Ha Ocurrido un Error');
    }
    process.exit(1);
  }
};

export default connectDB;

