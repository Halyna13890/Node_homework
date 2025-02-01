import express from "express"; 
import "dotenv/config"; 
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json()); 

const PORT = process.env.PORT || 3333;
const jwtSecret = process.env.JWT_SECRET || "secret_hello_world"; 


const users = [
    {
        id: 1,
        username: "john_doe",
        email: "john.doe@example.com",
        password: bcrypt.hashSync("password123", 10) 
    },
    {
        id: 2,
        username: "jane_smith",
        email: "jane.smith@example.com",
        password: bcrypt.hashSync("securePass456", 10)
    }
];


app.get("/", (req, res) => {
    res.send("Welcome to homepage!");
});



//-----------Задача 1 ---------------------

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
      
        const user = users.find((user) => user.email === email);
        if (!user) {
            return res.status(404).json({ message: "Пользователь не найден" });
        }

     
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Неверный пароль" });
        }

        
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            jwtSecret,
            { expiresIn: "1d" }
        );

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Ошибка сервера" });
    }
});

function authenticateJWT(req, res, next){
    const authHeader = req.headers.autorization;
    if(authHeader && authHeader.startsWith('Bearer')){
        const token = authHeader.substring(7, authHeader.length)

        jwt.verify(token, process.env.JWT_SECRET, (err, user) =>{
            if(err){
                return res.status(403).json({message: 'Токен неверный или истекший'})
            }
            req.user = user;
            next();
        })
    } else {
        return res.status(401).json({message: 'Токен не передан'})
    }
    
}

app.put('/update-email', authenticateJWT, (req, res) => {
    const {email} = req.body
    const userId = req.user.userId
    const user = users.find((user) => user.id === userId);
    if(!user){
        return res.status(404).json({message: 'Пользователь не найден'})
    }
    user. email = email
    res.status(200).json({message: 'Email успешно обновлен', user})
})

//-----------Задача 2 ---------------------

app.delete('/delete-account', authenticateJWT, (req, res) => {
    const {id} = req.params
    const deletedId = id === user.id
    if(!deletedId){
        res.status(404).json({message:'Пользователь не найден'})
    }
    res.status(204).json({message:"Пользователь успешно удален"})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
