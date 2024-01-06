const sequelize = require('../config/connection');
const User = require('../models/User');
const Room = require('../models/Room');
const Roommate = require('../models/Roommate')

const roommateData = require('./Roommate-seed.json');
const userData = require('./User-seeds.json');
const roomData = require('./Room-seeds.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    })
    .catch(err => console.error('Error seeding User data:', err));

    await Roommate.bulkCreate(roommateData, {
        individualHooks: true,
        returning: true,
    })
    .catch(err => console.error('Error seeding Roommate data:', err));

    await Room.bulkCreate(roomData, {
        individualHooks: true,
        returning: true,
    })
    .catch(err => console.error('Error seeding Room data:', err));

    process.exit(0);
};

seedDatabase();
