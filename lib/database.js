require("dotenv").config()
const password = process.env.DB_USERNAME
const username = process.env.DB_PASSWORD
const { MongoClient, ServerApiVersion } = require('mongodb')
const URI = `mongodb+srv://${password}:${username}@firstcluster.zwa6gov.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(URI, {
    "serverApi": {
      "version": ServerApiVersion.v1,
      "strict": true,
      "deprecationErrors": true,
    }})


module.exports = {
    getAllData: async ()=>{
        return client.db("chat-app").collection("messages").find().toArray()
    }
}