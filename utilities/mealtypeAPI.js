
const expp = require("express");

// create a sub api
const mealtypeAPI = expp.Router();
const mongo = require("../Mongoutil/mongoutil");
// to make the api read
mealtypeAPI.use(expp.json());

mealtypeAPI.post("/add", async (req, res) => {
  const mealOut = req.body.data;
  console.log(mealOut);
  const collName = req.body.collname;
  try {
    await mongo.addDocs("zomato", collName, mealOut);
    // all the mealOut data will be sent to database
    res.json("all the mealtypes added successfully!");
  } catch (err) {
    res.send(error.message).sendStatus(401);
  }
});


mealtypeAPI.get("/mealtypes", async (req, res) => {
  // get all the docs from the mealtypes collection
  console.log("hai")
  try {
    const cursor = await mongo.getDocs("zomato", "mealtypes");
    const mealtypes = await cursor.toArray();
    res.send({ mealtypes });
  } catch (err) {
    res.send({ err });
  }
});


// export the sub api
module.exports = mealtypeAPI;



















/*
const expp = require("express")

// create a sub api
const mealtypeAPI = expp.Router()
const mongo = require("../Mongoutil/mongoutil")
// to make the api read
mealtypeAPI.use(expp.json())

mealtypeAPI.post("/add", async (req,res) => {
    const mealOut = req.body.data
    console.log(mealOut)
    const collName = req.body.collname
    try {
         await mongo.addDocs("zomato", collName, mealOut)
        // all the mealOut data will be sent to database
        res.json('all the mealtypes added successfully!')
    } catch (err) {
        res.send(error.message).sendStatus(401)
    }
})


mealtypeAPI.get("/widgit", async (req,res) => {
    // get the docs from locations coll
    try {
     const cursor = await mongo.getDocs("zomato","mealtypes")
     const mealtypes = await cursor.toArray()
     res.send({ mealtypes })
    } catch (err) {
      res.send({ err })
    
    }
 })



// export the sub api 
module.exports = mealtypeAPI
*/


