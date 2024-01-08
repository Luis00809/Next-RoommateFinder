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
export async function getOneUser(id: string) {
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
        return data.rows;
    } catch (error) {
        console.log("getting a user error", error)
    }
}
