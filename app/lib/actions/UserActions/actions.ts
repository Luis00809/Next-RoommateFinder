'use server'
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';

import { signIn } from 'next-auth/react';
import AuthError from "next-auth"

// user type validation 
const UserFormSchema = z.object({
    id: z.string(),
    email: z.string({
        invalid_type_error: "Please provide a proper email"
    }),
    password: z.string(),
    firstname: z.string(),
    lastname: z.string(),
    gender: z.enum(['male', 'female', 'other'],{
        invalid_type_error: 'Please select an option'
    }),
    age: z.coerce.number()
    .gte(18,{ message: "must be at least 18."})
})

const CreateUserForm = UserFormSchema.omit({ id: true});
const UpdateUserForm = UserFormSchema.omit({ id: true});



export type UserState = {
    errors?: {
      email?: string[];
      password?: string[];
      firstname?: string[];
      lastname?: string[];
      gender?: string[];
      age?: string[];

    };
    message?: string | null;
  };

//   refactor later to use the userform
export async function authenticate(
    prevState: string | undefined,
    formData: FormData
    ) {
    const email = formData.get('email') || '';
    const password = formData.get('password') || '';
    const redirectUrl = '/dashboard';

    if (typeof window !== 'undefined') {
        try {
            await signIn('credentials', { email, password, redirect: true, callbackUrl: redirectUrl })
        } catch (error) {
            console.log("authentication error: ", error)
            if (error instanceof AuthError) {
                switch (error) {
                    case 'CredentialsSignin':
                        return 'Invalid credentials.';
                    default:
                        return 'Something went wrong.';
                }
            }
            throw error;
        }
    } else {
        console.log('Cannot perform sign in operation on server side.');
    }
}

export async function createUserForm( prevState: UserState, formData: FormData) {
    const validatedFields = CreateUserForm.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
        gender: formData.get('gender'),
        age: formData.get('age'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create User.',
        }
    }

    const { email, password, firstname, lastname, gender, age} = validatedFields.data;

    // if receive an error possibly might be bc string literals aren't wrapped in single quotes for strings

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await sql`
        INSERT INTO users (email, password, firstname, lastname, gender, age)
        VALUES (${email}, ${hashedPassword}, ${firstname}, ${lastname}, ${gender}, ${age})
        `
    } catch (error) {
        console.log("error creating a user: ", error);
        
    }

    return {
        ...prevState,
        message: 'User created successfully'
    }
}

export async function updateUserForm(
    id: string,
    prevState: UserState,
    formData: FormData,
) {
    const validatedFields = UpdateUserForm.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        gender: formData.get('gender'),
        age: formData.get('age'),
    })

    if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Update User.',
        };
      }

    const { email, password, firstname, lastname, gender, age } = validatedFields.data;
    
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await sql`
            UPDATE users
            SET 
            email = ${email},
            password = ${hashedPassword},
            firstname = ${firstname},
            lastname = ${lastname},
            gender = ${gender},
            age = ${age}
            WHERE id = ${id}
        `
    } catch (error) {
        console.log("failed to update user: ", error);
        
    }

    // ravalidatePath('')
    // redirect('')
    
}

export async function deleteUser(id: string) {
   try {
        await sql`DELETE FROM users WHERE id = ${id}`
        // revalidatePath('');
        return { message: 'Deleted user.' };
   } catch (error) {
    console.log('failed to delete user');
    return {
        message: 'database error, failed to delete user'
    }
   }
}
