const dbConnect = require("./config/db");
const routes = require('./routes/routes');


const express = require("express");
const cors = require("cors");
require("dotenv").config(); 



const app = express();

const PORT = 8060;

app.use(cors());
app.use(express.json({ extended: false }));
app.use("/api/todo",routes);

dbConnect();




//app.get('/api',)

app.get('/',(req,res)=>{
    res.status(200).send("Backend is up");
})


app.listen(PORT,()=>{
    console.log(`Server is listening in PORT: ${PORT}`);
})