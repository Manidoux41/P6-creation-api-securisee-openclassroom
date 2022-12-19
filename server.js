import express from 'express';
import './config/db.js'
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3001

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(PORT, () => console.log(`Server Listening on port : ${PORT}`))