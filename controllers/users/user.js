const db= require('../../models');
const users= require('../../models/users')(db.sequelize, db.Sequelize.DataTypes);


exports.allusers= async(req, res)=>{
    // const list= await users.findAll();
    // const batlist= await db.bats.findAll();
    const productlist= await db.products.findAll({
        include: [{model: db.bats, where: { batsName: 'MRF'}}]
    });
    // const result=[];
    // result[0]=list, result[1]= batlist, result[2]=productlist;
    return res.status(200).send(productlist);
}