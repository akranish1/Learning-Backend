const express=require('express');
const { handleAllGet, getUserById, updateElementById, deleteElementById, createNewUser } = require('../controller/user');
const router=express.Router();

router.route('/').get(handleAllGet)
.post(createNewUser);

//Routes
router.route('/:id')
.get(getUserById)
.patch(updateElementById) 
.delete(deleteElementById);


module.exports=router;