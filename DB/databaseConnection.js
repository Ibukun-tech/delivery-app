import mongoose from "mongoose";

const dbUrl = process.env.DATABASE_URL;
const db = dbUrl.replace("<password>", process.env.DB_PASSWORD);

if (!db) {
  throw new Error("Please the mongodb url environment");
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
    const opts = { bufferCommands: false };
  }
  cached.promise = mongoose.connect(db).then((db) => db);

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
