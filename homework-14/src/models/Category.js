import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        title: String,
        required: true,
        unique: true
    }
})


export const Category = mongoose.model("Category", categorySchema)