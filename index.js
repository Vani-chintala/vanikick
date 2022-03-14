
const expp = require("express")
const dott = require("dotenv")
const cors = require("cors")
dott.config()
console.log(process.env.mongoUri)
 
// import the sub api 
const mealtypeAPI = require("./utilities/mealtypeAPI")
const restaurantAPI = require("./utilities/restaurantAPI")
const userAPI = require("./utilities/userAPI")
//create an api(main)
const api = expp()

// use the sub api and connect with main api
api.use("/user", userAPI)
api.use("/", restaurantAPI)
api.use("/", mealtypeAPI)

//listen to api 
api.listen(8900)







