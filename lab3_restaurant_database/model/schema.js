const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    "address": {
        "building": {type:Number},
        "street": {type:String},
        "zipcode": {type:Number}
     },
     "city":  {type:String},
     "cuisine":  {type:String},
     "name":  {type:String},
     "restaurant_id": {type:Number}
    
})

module.exports={
    Post:mongoose.model("restaurants", PostSchema)
}