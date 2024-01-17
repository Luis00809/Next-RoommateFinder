const { db } = require('@vercel/postgres');
const {
    users,
    userForm,
    roomForm
} = require('../app/lib/placeholder-data');
const bcrypt = require('bcrypt');



// EACH FUNCTION DROPOS THE TABLES ONCE SCRIPT IS RAN NEED TO CHANGE WHEN IN PRODUCTION


async function seedUsers (client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // creates users table
        const createTable = await client.sql`
            DROP TABLE IF EXISTS users;
            CREATE TABLE IF NOT EXISTS users (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                firstname VARCHAR(255) NOT NULL,
                lastname VARCHAR(255) NOT NULL,
                email TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL,
                gender TEXT CHECK (gender IN ('male', 'female', 'other')),
                age INT NOT NULL
            );
        `;
        if (createTable) {
            console.log('created users table');
        }

        const insertUsers = await Promise.all(
            users.map(async (user) => {
                const hashedPassword = await bcrypt.hash(user.password, 10);
                return client.sql`
                INSERT INTO users (id, firstname, lastname, email, password, gender, age)
                VALUES ( ${user.id}, ${user.firstname}, ${user.lastname}, ${user.email}, ${hashedPassword}, ${user.gender}, ${user.age})
                ON CONFLICT (id) DO NOTHING;
              `;
              }),
            );
              
        if (insertUsers) {
            console.log(`Seeded ${insertUsers.length} users`);
        }

        return {
            createTable,
            users: insertUsers,
        };

    } catch (error) {
        console.log('seeding users error:', error)
    }
};

async function seedUserForm(client, usersData) {
    try {
        
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
       const createTable = await client.sql`
        DROP TABLE IF EXISTS roommateForms;
        CREATE TABLE IF NOT EXISTS roommateForms (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            bio TEXT,
            budget INT NOT NULL,
            preferredgender TEXT CHECK (preferredgender IN ('male', 'female', 'other', 'no preference')),
            smokes TEXT CHECK (smokes IN ('no', 'yes')),
            roommateid UUID NOT NULL UNIQUE,
            CONSTRAINT fk_roommateForms_user FOREIGN KEY(roommateid) REFERENCES users(id) ON DELETE CASCADE
        );
       `;

       if (createTable) {
            console.log("created userForms table");
       };

       const insertRoommateForms = await Promise.all(
        userForm.map(
            (roomateForms) => client.sql`
            INSERT INTO roommateForms ( bio, budget, preferredgender, smokes, roommateid)
            VALUES (${roomateForms.bio}, ${roomateForms.budget}, ${roomateForms.preferredgender}, ${roomateForms.smokes},${roomateForms.roommateid})
            ON CONFLICT (id) DO NOTHING;
          `,
          ),
        );
       console.log(`Seeded ${insertRoommateForms.length} roommateForms`); 
       return {
        createTable,
        userForm: insertRoommateForms,
       }

    } catch (error) {
        console.log('seeding userForms error:', error)
    }
};

async function seedRooms(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
       DROP TABLE IF EXISTS rooms;
       CREATE TABLE IF NOT EXISTS rooms (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        address TEXT,
        description TEXT NOT NULL,
        creditscore INT,
        rent INT NOT NULL,
        smoking TEXT CHECK (smoking IN ('allowed', 'not allowed')),
        gender TEXT CHECK (gender IN ('male', 'female', 'other', 'no preference')),
        roomid UUID NOT NULL,
        CONSTRAINT fk_rooms_user FOREIGN KEY(roomid) REFERENCES users(id) ON DELETE CASCADE
       );
       `;

        console.log('creates Rooms table');
        
        const insertedRooms = await Promise.all(
            roomForm.map(
                (room) => client.sql`
                INSERT INTO rooms ( address, description, creditscore, rent, smoking, gender, roomid)
                VALUES  (${room.address}, ${room.description}, ${room.creditscore}, ${room.rent},${room.smoking}, ${room.gender}, ${room.roomid})
                ON CONFLICT (id) DO NOTHING;
                `
            ),
        );

        console.log(`Seeded ${insertedRooms.length} rooms`);
        return {
            createTable,
            roomForm: insertedRooms
        }
    } catch (error) {
        console.log('seeding rooms error:', error)
    }
}

async function main() {
    const client = await db.connect();
    await client.sql`DROP TABLE IF EXISTS users CASCADE;`;
    await client.sql`DROP TABLE IF EXISTS roommateForms CASCADE;`;
    await client.sql`DROP TABLE IF EXISTS rooms CASCADE;`;
  
    await seedUsers(client);
    await seedUserForm(client);
    await seedRooms(client);
    await client.end();
  }

main().catch((err) => {
    console.error('An error occurred while attempting to seed the database:',
    err);
});