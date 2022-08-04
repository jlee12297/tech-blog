const sequelize = require("../config/connection");

const {User,Gobble} = require("../models");

const users = [
    {
        username:"joeLovesCats",
        email:"joe@joe.joe",
        password:"password"
    },
    {
        username:"BaShiva",
        email:"joescats@joe.joe",
        password:"weAreTheBest"
    }
]

const gobbles = [
    {
        UserId:1,
        content:"whoa its like twitter ",
    },
    {
        UserId:1,
        content:"i love cats so much",
    },
    {
        UserId:2,
        content:"being a cat is great!",
    },
]

const seedMe = async ()=>{
    await sequelize.sync({force:true});
    await User.bulkCreate(users,{individualHooks:true})
    await Gobble.bulkCreate(gobbles)
    process.exit(0)
}

seedMe()