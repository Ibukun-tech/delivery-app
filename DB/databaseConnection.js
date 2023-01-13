import mongoose from "mongoose";

console.log(process.env.DATABASE_URL);
const db =
  "mongodb+srv://Ibukunoluwa:April84ibk@cluster0.xriegcg.mongodb.net/?retryWrites=true&w=majority";

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

    cached.promise = mongoose.connect(db, opts).then((db) => db);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
