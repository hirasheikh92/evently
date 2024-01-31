import mongoose from "mongoose"


const MONGODB_URI = process.env.MONGODB_URI
//initialize cached variable,retrieve mongoose property from the global object
let cached = (global as any ).mongoose ||  {conn:null,promise:null};


//
export const connectToDatabase= async()=>{
    //check connection is already connected
    if(cached.conn) return cached.conn;

    if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');

//already connected otherwise connect
    cached.promise = cached.promise || mongoose.connect(MONGODB_URI,{
        dbName:'evently',
        bufferCommands:false,
    })

    cached.conn = await cached.promise;
    return cached.conn;
}