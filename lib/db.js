import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 8000, // Timeout after 8 seconds
    };

    console.log('🔄 Attempting database connection...');
    cached.promise = mongoose.connect(MONGODB_URI, opts)
      .then((mongooseInstance) => {
        console.log('✅ DATABASE CONNECTED SUCCESSFULLY!');
        return mongooseInstance;
      })
      .catch((err) => {
        console.error('❌ DATABASE CONNECTION ERROR:', err.message);
        cached.promise = null; // Clear cached promise on rejection to allow retries!
        throw err;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null; // Ensure the promise is cleared if awaiting fails
    throw err;
  }
  
  return cached.conn;
}

export default dbConnect;
