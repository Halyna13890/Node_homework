import express from "express";
import { connectToDatabase, getDb } from "./db/index.js";
import "dotenv/config"
import { ObjectId } from "mongodb";
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000

connectToDatabase()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch((error) => {
        console.error(
            "Failed to start the server due to MongoDB connection issue",
            error
        )
    })

    app.get("/", (req, res) =>{
        res.send("basic route")
    })

    app.post('/products', async (req, res) =>{
        try{
            const db = getDb();
            const product = req.body

            if(!name){
               return res.status(400).json({error: "Name are required"})
            }
            const result = await db.collection('products').insertOne(product);
            res.status(200).json(result.ops[0])

        } catch (error){
            res.status(500).json ({ message: 'Failed to cteate users'})
        }
    })


    app.get('/products', async (req, res) => {
        try{
            const db = getDb();
            const products = await db.collection('products').find().toArray()
            res.status(200).json(products)
            if(!product){
               return res.status(404).json({ message: "Collection product does not exist"}) 
            }
        } catch (error){
            return res.status(500).json({ message: "Failed to fetch users"})
        }
    })

    app.get('/products/:id', async (req, res)=> {
        try{
            const db = getDb()
        const productId = req.params.id 
        if(!ObjectId.isValid(productId)){
            res.status(400).json({message: 'invalid productId'})
        }
        const product = await db.collection("products").findOne({_id: new ObjectId(productId)})
        if(!product){
            res.status(404)({message: 'Product not faund'})
        }
        res.status(200).json(product)
        } catch (error){
            res.status(500).json({message:'Failed to fetch product'})
        }
        
    })


    app.put('/products/:id', async (req, res) =>{
        try{
            const db = getDb();
            const productId = req.params.id;
            const updateData = req.body;

            if(!ObjectId.isValid(productId)){
                return res.status(400).json({error: 'Invalid user Id'})
            }
            if(updateData.price !== undefined && typeof updateData.price !== 'number'){
                return res.status(400).json({error: 'Price must be a number'})
            }
            const result = await db.collection('products').updateOne(
                {_id: new ObjectId(productId)},
                {$set: updateData}
            )

            if(result.matchedCount === 0) {
                return res.status(404).json({error:'product not faund'})
            }
            res.status(200).json({message:'product was updated'})
        } catch (error){
            res.status(500).json({error:'Failed to update produkt'})
        }
    })


    app.delete('/product/:id', async (req, res) =>{
        try{
            const db = getDb()
        const productId = req.params.id;
        if(!ObjectId.isValid(userId)){
            return res.status(400)({error: 'Invalid product id'})
        }
        const result = 
        await db.collection('products').deleteOne({_id: new ObjectId(userId)})

        if(result.deletedCount === 0){
            return res.status(400).json({error: 'Product not faund'})
        }

        res.status(200).json({message: 'Product was deleted'})

        } catch (error){
            res.status(500).json({error: 'Failed to delete user'})
        }
    })