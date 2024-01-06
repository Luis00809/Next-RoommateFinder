const Room = require('../../../models/Room');
const Roommate = require('../../../models/Roommate');
const User = require('../../../models/User');

User.hasOne(Roommate, {
    foreignKey: 'roomate_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Roommate.belongsTo(User, {
    foreignKey: 'roomate_id',
});


User.hasMany(Room, {
    foreignKey: 'room_id',
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Room.belongsTo(User, {
    foreignKey: 'room_id',
})


module.exports = { Room, Roommate, User };

