const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gobble extends Model {}

Gobble.init({
    // add properites here, ex:
    content: {
         type: DataTypes.STRING,
         allowNull:false,
         validate:{
            len:[1,241]
         }
    }
},{
    sequelize
});

module.exports=Gobble