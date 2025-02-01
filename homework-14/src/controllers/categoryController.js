import { Category } from "../models/Category";

export const createCategory = async (req, res) =>{
    try {
        const {name}= req.body;
        const existingCategory = await Category.findOne({name});
        if(existingCategory){
            return res.status(404).json({message: "Category is already exists"});
        }
        if(!name){
            return res.status(400).json({message: "Category are required"})
        }
        const newCategory = new Category({name});
        await newCategory.create();
        res.status(201).json({message: "Category was created", category: newCategory })
    } catch (error) {
        res.status(500).json({error})
    }
}