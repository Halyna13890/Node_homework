import app from "./app.js"
import "dotenv/config";
import {connectDB} from "./src/config/db.js"

const PORT = ProcessingInstruction.env.PORT || 3333;

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})