'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

import Room from './Room';
import Roommate from './Roommate';
import User from './User';



let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// model relationships

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
module.exports = { Room, Roommate, User, db };

