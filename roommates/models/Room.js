import sequelize from '../database';


class Room extends Model {};

const Room = sequelize.define('Room',
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    }, 
    creditScore: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rent: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    smoking: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    room_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: "user",
            key: "id"
        }
    }
},
{
    sequelize, 
    timestamps: false, 
    freezeTableName: true, 
    underscored: true, 
    modelName: 'rooms', 
  }
);

export default Room;