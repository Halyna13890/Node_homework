import express, {Request, Response} from "express"


const app = express()
const port = 3000;
app.use(express.json())



app.get('/', (req: Request, res: Response) =>{
    res.send("Привет!")
})

app.post("/data", (req: Request, res:Response) =>{
    const postData = req.body

    res.status(200).json({message: "Данные получены", postData})
})


app.listen(port, () =>{
    console.log(`сервер запущен на порте: ${port}`);
    
})