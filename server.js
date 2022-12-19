import express from 'express';
import './config/db.js'
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3001

const app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes
app.get('/', (req,res) => {
    res.send('<h2>Welcome on the main API page</h2>')
})

app.listen(PORT, () => console.log(`Server Listening on port : ${PORT}`))