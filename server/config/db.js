const mongoose = require("mongoose");
require("dotenv").config(); 



const dbUrl = process.env.MONGODB_URL;


const connectToDb = async() =>{

    try{

        await mongoose.connect(dbUrl,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`DB is connected`);


    }catch(error){
        console.log(`Error in Db connection` , error);
    }


};

module.exports = connectToDb;