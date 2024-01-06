import sequelize from '../database';

const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
}

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,

        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8],
        },
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

// User.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,

//             validate: {
//                 isEmail: true,
//             },
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: [8],
//             },
//         },
//         firstName: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         lastName: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         gender: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
        

//     },
//     {
//         hooks: {
//             beforeCreate: async (newData) => {
//                 newData.password = await bcrypt.hash(newData.password, 10);
//                 return newData;
//             },
//             beforeUpdate: async (updatedData) => {
//                 if(updatedData.password) {
//                     updatedData.password = await bcrypt.hash(updatedData.password, 10);
//                 }
//                 return updatedData;
//             },
//         },
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'user',
//     }
// );

export default User;