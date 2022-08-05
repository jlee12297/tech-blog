const User = require('./User');
const Gear = require('./Gear');

User.hasMany(Gear, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Gear.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Gear };
