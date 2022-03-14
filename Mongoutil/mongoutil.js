
const mongoDB = require("mongodb")
const dott = require("dotenv")
dott.config()

const uri = process.env.mongoUri
console.log(uri)

// create a client using fn o/p = promise
const createClient = () =>{
    // create a client
    const mongoClient = new mongoDB.MongoClient(uri)
    // create a connected client
    const client = mongoClient.connect()
    // return client
    return client
}


// close the client using fn
const closeClient = (client) => client.close()


// fn to add a document to specific collection to data base
const addDoc = async(dbName,collName,doc)=>{
    //create our client
    const client = await createClient()
    // create the db or fetch the db
    const db = client.db(dbName)
    // create the collection
    const coll = db.collection(collName)
    //insert the doc
    const result = await coll.insertOne(doc)
    // return the result
    return result
}

const addDocs =async (dbName, collName, doc) =>{
    // create our client
     const client  = await createClient()
    // create/fetch the DB
    const db = client.db(dbName)
    // create the coll
    const coll = db.collection(collName)
    // insert the doc
    const result = await coll.insertMany(doc)
    // return the result
    return result
  }
  
  const getDocs = async (dbName, collName, query={})=>{
    // create our client
    const client  = await createClient()
    // create/fetch the DB
    const db = client.db(dbName)
    // create the coll
    const coll = db.collection(collName)
    // insert the doc
    const result = await coll.find(query)
    // return the result
    return result
  }
  
  
  const getDoc = async (dbName, collName, query={})=>{
    // create our client
    const client  = await createClient()
    // create/fetch the DB
    const db = client.db(dbName)
    // create the coll
    const coll = db.collection(collName)
    // insert the doc
    const result = await coll.findOne(query)
    // return the result
    return result
  }
  
  
  

  module.exports={
    addDoc,
    addDocs,
    getDoc,
    getDocs
  }