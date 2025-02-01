import { Product } from "../models/Product";

export const createProduct = async (req, res) =>{
    try {
        const {name, price, category}= req.body;
        const existingCategory = await Product.findOne({name});
        if(existingCategory){
            return res.status(404).json({message: "Product is already exists"});
        }
        if(!name){
            return res.status(400).json({message: "Product name are required"})
        }
        const newCategory = new Category({name});
        await newCategory.create();
        res.status(201).json({message: "Product was created", category: newCategory })
    } catch (error) {
        res.status(500).json({error})
    }
}