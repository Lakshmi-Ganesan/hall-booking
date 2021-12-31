var express = require("express");
var router = express.Router();
var customerModule = require('../modules/customermodule');
router.get("/get",customerModule.getRoomDetails );
router.put("/update",customerModule.updateCustomer );
router.get("/bookingdetails",customerModule.getBookedDetails);
router.get("/customerdetails",customerModule.getCustomerDetails);
module.exports=router;