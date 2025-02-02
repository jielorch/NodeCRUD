import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const username = process.env.user;
const password = process.env.password;

const dbName = 'Post';
 

const connectionString = `mongodb+srv://${username}:${password}@cluster0.geeho.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    family: 4 // Use IPV4, skip trying IPV6
};

 
export const db = mongoose.connect(connectionString, options)
    .then(res => {
        if(res){
            console.log(`Database connection successfully to ${dbName}`);
        }
    }).catch(err => {
        console.log(err);
    });
