const express=require('express');
const users=require('./MOCK_DATA.json');
const app=express();
const PORT=8000;
const fs=require('fs');
//================================================
//1. with HTML Rendering (SSR)
app.get('/users',(req,res)=>{
    const html=`
    <ul>
    ${users.map(users=>`<li>${users.first_name}</li>`).join(" ")}
    </ul>`
    res.send(html);
})
//==================================================
//2. with CSR(raw data render later by react or others)
app.get('/api/users',(req,res)=>{
    res.json(users);
})

//MiddleWare-plugins
app.use(express.urlencoded({extended:false}));

app.post('/api/users',(req,res)=>{
    //ToDo: Create new users //Since in browser you can only have GET request
    const body=req.body;
    users.push({...body,id:users.length+1});
    //to access json file use fs first
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json({status:'success',id:users.length});
    })
})

//3. WATCH OUT: get,patch,delete has same Routes. so,
//we can use app.route('/api/users/:id')
// app.patch('/api/users/:id',(req,res)=>{
//     //ToDo: update users with id
//     return res.json({status:'pending'});
// })
// app.delete('/api/users/:id',(req,res)=>{
//     //ToDo: delete users with id
//     return res.json({status:'pending'});
// })
//===========================================================

app.route('/api/users/:id')
.get((req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    res.json(user);
})
.patch((req,res)=>{
    const id = Number(req.params.id);
    const {last_name}= req.body;  

    const updatedUsers = users.map(user => {
        if (user.id === id) {
            return { ...user,last_name }; 
        }
        return user; 
    });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(updatedUsers), (err) => {
        return res.json({ status: "success", id });
    });
}) 
.delete((req,res)=>{
  const id = Number(req.params.id);
  const updated=users.filter(u=>u.id!==id);
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(updated), (err) => {
        return res.json({ status: "success", id });
    });
});

//Since in browser you can only place GET request 
// =>Solution install POSTMAN which will carry out this for us


app.listen(PORT,()=>console.log(`Server Started at PORT ${PORT}`));