const express=require('express');
const mongoose=require('mongoose');
const app=express();
const PORT=8000;


//1. Connection
mongoose.connect( 'mongodb://127.0.0.1:27017/dataBaseName1')
.then(()=>console.log("MongoDb connected"))
.catch((err)=>console.log("Mongodb Error:",err));

//2.  Schema creation
const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
    },
    jobTitle:{
        type:String,
    },
    gender:{
        type:String,
    },

})
//3. Model creation from Schema
const User=mongoose.model('user',userSchema);


//MiddleWare-plugins
app.use(express.urlencoded({extended:false}));
//To show all entries:
app.get('/api/users',async(req,res)=>{
    const allUser=await User.find({})
    const html=`
    <ul>
    ${allUser.map(users=>`<li>${users.firstName}</li>`).join(" ")}
    </ul>`
    res.send(html);
})

//HTTP METHODS:
app.get('/users',async(req,res)=>{
    const allUserdb=await User.find({})
    res.json(allUserdb);
})
app.post('/api/users',async(req,res)=>{

    const body=req.body;
    const result = await User.create({
  firstName: body.first_name,
  lastName: body.last_name,
  emailId: body.emailId,
  gender: body.gender,
  jobTitle: body.job_title,
});
console.log("Result: ",result);
return res.status(201).json({ msg: "success" });
})

//Routes
app.route('/api/users/:id')
.get(async(req,res)=>{
    const id=req.params.id;
    const resbyId=await User.findById(id);
    res.json(resbyId);
})
.patch(async(req,res)=>{
    const id = req.params.id;  
    await User.findByIdAndUpdate(id, {lastName: "NewSurname"});
    res.json({msg:"success"});
}) 
.delete(async(req,res)=>{
  const id = req.params.id;
  await User.findByIdAndDelete(id);
  res.json({msg:"success"});
});


app.listen(PORT,()=>console.log(`Server Started at PORT ${PORT}`));