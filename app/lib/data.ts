import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

import {
    User,
    RoommateForm,
    Room
} from './definitions';

// fetch all Users 
export async function fetchUsers() {
    noStore();

    try {
        
        const data = await sql<User>`
        SELECT 
            users.id,
            users.email,
            users.firstName,
            users.lastName,
            users.gender
        FROM users;
        `;
        return data.rows;

    } catch (error) {
        console.log('getting users error:',error);        
    }
    
};

// fetch a User
export async function getOneUser(id: number) {
    noStore();
    try {
        const data = await sql<User>`
            SELECT 
            users.id,
            users.email,
            users.firstName,
            users.lastName,
            users.gender
            FROM users
            WHERE users.id = ${id}
        `
        return data;
    } catch (error) {
        console.log("getting a user error", error)
    }
};


// fetch rooms
export async function getRoooms() {
    try {
        const data = await sql<Room>`
            SELECT * FROM rooms

        `
        return data.rows;
    } catch (error) {
        console.log('fetching rooms error:', error)
    }
};

// fetch a room
export async function getOneRoom(id: number) {
    try {
        const data = await sql<Room>`
        SELECT r.*, u.* FROM rooms r LEFT JOIN users u ON r.roomId = u.id WHERE r.id = ${id}
        `
        
        return data.rows[0];
    } catch (error) {
        console.log('fetching one room error: ', error);
        
    }
};

// fetch roommates
export async function fetchRoommates() {
    try {
        const data = await sql<User>`
            SELECT 
                users.id,
                users.email,
                users.firstName,
                users.lastName,
                users.gender,
                users.age,
                roommateforms.*
            FROM users
            JOIN roommateforms on roommateforms.roommateId = users.id
        `
        return data.rows;
    } catch (error) {
        console.log("fetching roommates error: ", error);
        
    }
};

// get one roommate
export async function getOneRoommate(id: number) {
    try {
        const data = await sql<User>`
        SELECT 
            users.id,
            users.email,
            users.firstName,
            users.lastName,
            users.gender,
            users.age,
            roommateforms.*
        FROM USERS
        JOIN roommateforms on roommateforms.roommateId = users.id
        WHERE users.id = ${id}
        `
    } catch (error) {
        console.log("getting one roommate error: ", error);
        
    }
};



