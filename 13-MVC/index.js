const express=require('express');
const app=express();
const PORT=8000;
const userRouter=require('./routes/user');
const {connectMongoDb}=require('./connection');
const {logReqRes}=require('./Middleware/index');


//Connection
connectMongoDb('mongodb://127.0.0.1:27017/dataBaseName1').then(()=>console.log("MongoDb Connected!"));

//Middleware
app.use(express.urlencoded({extended:false}));
app.use(logReqRes('log.txt'));

//Routes
app.use('/api/users',userRouter);

app.listen(PORT,()=>console.log(`Server Started at PORT ${PORT}`));