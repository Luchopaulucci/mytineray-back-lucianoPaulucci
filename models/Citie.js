import { Schema,model,Types } from "mongoose";

let collection = 'cities';

let schema = new Schema({
    citie : {type:String, required: true},
    country : {type:String, required: true},
    description : {type:String, required: true},
    image: { type:String, required: true },
    divisa: { type:Number, required: true },
    language: { type:String, required: true },
    created_By: {type:Types.ObjectId,ref:'users'},
}, {
    timestamps: true
})

const Cities = model(collection, schema);

export default Cities;