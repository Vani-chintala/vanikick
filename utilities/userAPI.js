
const expp = require("express")
//create a sub api 
const userAPI = expp.Router()
const mongo = require("../Mongoutil/mongoutil")
// to make the api read
userAPI.use(expp.json())

userAPI.post("/details",async(req, res) => {
    // firstname,lastname,email,password are sent to body
    const userOut = req.body
    try {
        await mongo.addDoc("zomato", "users", userOut) //o/p of addDoc is promise
        //userout will  be added to the database
        res.json({
            message: `User data  is added successfully!!`,
        })
    } catch (err) {
        res.send(err.message)
            .sendStatus(403) // 403 =>internal error
    }
})




module.exports = userAPI
