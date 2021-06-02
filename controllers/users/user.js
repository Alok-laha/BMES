const users = require('../../models/users/users');


exports.allusers= async(req, res)=>{
    const list= await users.findAll();
    return res.status(200).send(list);
}