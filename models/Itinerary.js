import { Schema,model,Types } from "mongoose";

let collection = 'itineraries';

let schema = new Schema({
    name : {type: String, required: true},
    price : {type: Number, required: true},
    duration : {type: String, required: true},
    likes: { type: Number, required: true },
    created_To: {type: Types.ObjectId, ref: 'users'},
    corresponds_To: {type: Types.ObjectId, ref: 'cities'},
    comments:[{type: String}],
    hashtags: [{ type: String }],
}, {
    timestamps: true
})

const Itineraries = model(collection, schema);

export default Itineraries;