const db= require('../../models/index');
const users= require('../../models/users/users')(db.sequelize, db.Sequelize.DataTypes);


exports.allusers= async(req, res)=>{
    const list= await users.findAll();
    return res.status(200).send(list);
}