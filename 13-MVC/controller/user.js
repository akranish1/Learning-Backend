const User=require('../models/user');

async function handleAllGet(req,res){
      const allUserdb=await User.find({})
    return res.json(allUserdb);
}

async function getUserById(req,res){
    const id=req.params.id;
    const resbyId=await User.findById(id);
    res.json(resbyId);
}

async function updateElementById(req,res) {
    const id = req.params.id;  
    await User.findByIdAndUpdate(id, {lastName: "NewSurname"});
    res.json({msg:"success"});
}

async function deleteElementById(req,res) {
    const id = req.params.id;
  await User.findByIdAndDelete(id);
  res.json({msg:"success"});
}

async function createNewUser(req,res) {
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
}





module.exports={
    handleAllGet,getUserById,updateElementById,deleteElementById,createNewUser,
}