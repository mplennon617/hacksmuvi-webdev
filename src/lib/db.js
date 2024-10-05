import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI

let client
/**
 * @type {Promise<MongoClient>}
 */
let clientPromise

if (!uri) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    )
}

client = new MongoClient(uri)
clientPromise = client.connect()


export default clientPromise