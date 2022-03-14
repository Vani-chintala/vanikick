
const expp = require("express")
const mongo = require("../Mongoutil/mongoutil")

// create a sub api 
const restaurantAPI = expp.Router()
// to make the api read
restaurantAPI.use(expp.json())

restaurantAPI.post("/",async(req,res) =>{
    try{
    const restt = req.body
    //console.log(restt)//
    await  mongo.addDocs("zomato","restaurants",restt)
    res.json("All the restaurants added successfully!")
    }catch(err){
        res.send(err.message)
            .sendStatus(401)
    }
})



restaurantAPI.get("/:city", async (req, res) => {
    try {
       // get city from restaurants collection
        const city = req.params.city
        let query = {}
        if (city) {
            query = { "city": city }
        }
        const cursor = await mongo.getDocs("zomato", "restaurants", query)
        const hotels = await cursor.toArray()
        res.send(hotels)
    } catch(err){
        res.send(error.message)
            .sendStatus(401)
    }
})


// export the sub api
module.exports = restaurantAPI


