import mongoose from "mongoose";

const publisherShema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    location:{
        type: String,
    }
})

const Publisher = mongoose.model('Publisher', publisherShema)

export default Publisher