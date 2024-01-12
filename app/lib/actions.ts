'use server'

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// user type validation 
const UserFormSchema = z.object({
    id: z.number(),
    email: z.string({
        invalid_type_error: "Please provide a proper email"
    }),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    gender: z.enum(['male', 'female', 'other'],{
        invalid_type_error: 'Please select an option'
    }),
    age: z.number(),
})

const CreateUserForm = UserFormSchema.omit({ id: true});
const UpdateUserForm = UserFormSchema.omit({ id: true});

export type UserState = {
    errors?: {
      email?: string[];
      password?: string[];
      firstName?: string[];
      lastName?: string[];
      gender?: string[];
      age?: string[];

    };
    message?: string | null;
  };

export async function createUserForm( prevState: UserState, formData: FormData) {
    const validatedFields = CreateUserForm.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        gender: formData.get('gender'),
        age: formData.get('age'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create User.',
        }
    }

    const { email, password, firstName, lastName, gender, age} = validatedFields.data;

    // if receive an error possibly might be bc string literals aren't wrapped in single quotes for strings

    try {
        await sql`
        INSERT INTO users (email, password, firstname, lastname, gender, age)
        VALUES (${email}, ${password}, ${firstName}, ${lastName}, ${gender}, ${age})
        `
    } catch (error) {
        console.log("error creating a user: ", error);
        
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

    const { email, password, firstName, lastName, gender, age } = validatedFields.data;
    
    try {
        await sql`
            UPDATE users
            SET 
            email = ${email},
            password = ${password},
            firstname = ${firstName},
            lastname = ${lastName},
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

// roommateform type validation
const RoommateFormSchema = z.object({
    id: z.number(),
    bio: z.string(),
    budget: z.number().gt(0, { message: 'Please enter an amount greater that 0.'}),
    preferredGender: z.enum(['male', 'female', 'other', 'no preference']),
    smokes: z.enum(['no', 'yes']),
    roommateId: z.number(),
});

const CreateRoommateForm = RoommateFormSchema.omit({ id: true});
const UpdateRoommateForm = RoommateFormSchema.omit({ id: true});

export type RoommateState = {
    errors?: {
      bio?: string[];
      password?: string[];
      budget?: string[];
      preferredGender?: string[];
      smokes?: string[];
      roommateId?: string[];

    };
    message?: string | null;
  };

export async function createRoommateForm( prevState: RoommateState, formData: FormData) {
    const validatedFields = CreateRoommateForm.safeParse({
        bio: formData.get('bio'),
        budget: formData.get('budget'),
        preferredGender: formData.get('preferredgender'),
        smokes: formData.get('smoked'),
        roommateId: formData.get('roommateid')
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create roommate form.',
          };
    };

    const { bio, budget, preferredGender, smokes, roommateId } = validatedFields.data;

    try {
        await sql`
        INSERT INTO roommateforms (bio, budget, preferredgender, smokes, roommateid)
        VALUES (${bio}, ${budget}, ${preferredGender}, ${smokes}, ${roommateId})
        `
    } catch (error) {
        console.log("error creating roommate form: ", error);
        
    }

    // revalidatePath('');
    // redirect('');
}

export async function updateRoommateForm(
    id: string,
    prevState: RoommateState,
    formData: FormData,
) {
    const validatedFields = UpdateRoommateForm.safeParse({
        bio: formData.get('bio'),
        budget: formData.get('budget'),
        preferredGender: formData.get('preferredgender'),
        smokes: formData.get('smoked'),
        roommateId: formData.get('roommateid')
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create roommate form.',
          };
    };

    const { bio, budget, preferredGender, smokes, roommateId } = validatedFields.data;

    try {
        await sql`
        UPDATE roommateforms
        SET bio = ${bio}, budget =${budget}, preferredgender = ${preferredGender}, smokes = ${smokes}, roommateid = ${roommateId}
        WHERE id = ${id}
        `
    } catch (error) {
        console.log("faild to update roommate form: ", error);
        
    }

    // revalidatePath('');
    // redirect('');

}


// room type validation
