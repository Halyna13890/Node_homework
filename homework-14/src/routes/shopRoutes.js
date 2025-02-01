import express from "express";
import { createCategory } from "../controllers/categoryController";
import { createProduct } from "../controllers/productController";



const router = express.Router();

router.post('/category', createCategory)
router.post('/product', createProduct)


export default router;