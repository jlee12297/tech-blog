const User = require("./User");
const Gobble = require("./Gobble")

User.hasMany(Gobble,{
    onDelete:"CASCADE",
    foreignKey:{
        allowNull:false
    }
})
Gobble.belongsTo(User);

module.exports={
    User,
    Gobble
}