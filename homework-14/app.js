import express from "express";
import shopRoutes from "./src/routes/shopRoutes.js"

const app = express();

app.use(express.json());
app.use("/api/shop", shopRoutes)