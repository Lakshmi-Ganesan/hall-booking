const express=require("express")
const app=express();
const mongo=require("./shared/connect")
const customerRouter=require("./routes/customer")
const dotenv=require("dotenv")
dotenv.config();
// to convert req.body to json format
app.use(express.json())
mongo.connect()
//console.log(mongo)
app.use('/customers',customerRouter)
app.listen(3000)