const Sequelize = require("sequelize")

module.exports= (sequelize, DataTypes)=> {
const bats= sequelize.define('bats', {
      batsID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      batsName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      batsPrice: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAT: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
 }, { freezeTableName: true, 
  timestamps: false,
  createAt: false,
  updatedAt: false,
  paranoid: true
}
);

 return bats;
}