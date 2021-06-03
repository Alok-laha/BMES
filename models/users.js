const Sequelize= require('sequelize');

module.exports= (sequelize, DataTypes)=> {
  const users= sequelize.define('users', {
    userID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    userMobile: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {freezeTableName: true, 
  timestamps: false,
  createAt: false,
  updatedAt: false,
  paranoid: true}
);

  return users
}

// eslint-disable-next-line no-unused-vars
//users.sync().then(result=>console.log('users table created')).catch(error=>console.log('users table not created'));

