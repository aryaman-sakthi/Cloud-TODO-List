import { MongoClient } from "mongodb";

let client: MongoClient;
let clientPromise: Promise<MongoClient>

const uri = process.env.MONGODB_URI;

const options: any = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

if (!process.env.MONGODB_URI){
    throw new Error('Please add your MongoDB Atlas connection string to .env.local')
}

client = new MongoClient(uri!, options);
clientPromise = client.connect();

clientPromise.then(()=> console.log('Connected to MongoDB Atlas'));

export default clientPromise
