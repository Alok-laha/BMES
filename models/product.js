const Sequelize= require('sequelize');

module.exports= (sequelize, DataTypes)=> {
const products= sequelize.define('products', {
    productID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
    productName: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
    dealerName:{
            type: Sequelize.STRING,
            allowNull: false
        }
    }, { freezeTableName: true, 
        timestamps: false,
        createAt: false,
        updatedAt: false,
        paranoid: true
}
);
    
products.associate= models =>{
    products.hasMany(models.bats, {onDelete: 'CASCADE'})
}
    
return products
}
