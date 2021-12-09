const  mongoose  = require('mongoose');
const express=require('express'); 
var app = express();
const PORT=process.env.PORT || 5000;
app.use(express.json());

// importing database connection
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 



require('./DB/conn');

app.use(require("./Router/operation"))

// app.use(require("./Router/Autth"))


app.listen(PORT,()=>{
    console.log(`listining server at ${PORT}` )
})