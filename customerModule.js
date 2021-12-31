const mongo=require("../shared/connect")

module.exports.getRoomDetails = async (req,res,next) => {
    try {
        var data = await mongo.db.collection("customers").find().toArray();
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}
module.exports.updateCustomer = async (req,res,next)=>
{
    try
    {
    var data = await mongo.db.collection("customers").updateOne({roomno:req.body.roomno}, {$set: {name:req.body.name, date:req.body.date,starttime:req.body.starttime,endtime:req.body.endtime,status:req.body.status}});
    res.send(data);
    }
    catch
    {
        console.log(err);
        res.status(500).send(err)
    }
}
module.exports.getBookedDetails = async (req,res,next) => {
    try 
    {
        var data = await mongo.db.collection("customers").find({status:"booked"}).toArray();
        res.send(data);
        
    } 
    catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}
module.exports.getCustomerDetails = async (req,res,next) => {
    try {
        var data = await mongo.db.collection("customers").find({status:"booked"},{ projection: {status:0}}).toArray();
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}