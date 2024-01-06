import sequelize from '../database';


class Roommate extends Model {};

// change budget to string or int
// change preffered genderr to allownull
const Roommate = sequelize.define('Roomate',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
       }, 
      bio: {
         type: DataTypes.TEXT,
         allowNull: true, 
        },
      budget: {
         type: DataTypes.TEXT,
         allowNull: false, 
        },
      prefferedGender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      smoke: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      roomate_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: "id"
        }
      }
    },
    {
      sequelize, 
      timestamps: false, 
      freezeTableName: true, 
      underscored: true, 
      modelName: 'roommate', 
    }
);

export default Roommate;