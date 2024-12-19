require('dotenv').config();
const express = require('express');
const app = express();
const connectDb  =require('./config/db')
const cors = require('cors');
const UserRoute = require("./routes/UserRoute")
const questionRoute = require("./routes/QuestionRoute")
connectDb();
app.use(cors({
    origin:['http://localhost:5173','https://calm-pie-dc83cf.netlify.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
    
}));
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use('/users',UserRoute);
app.use('/api',questionRoute)
const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
// oFiakUUqZadaUI2C