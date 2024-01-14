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
        await sql`
        INSERT INTO users (email, password, firstname, lastname, gender, age)
        VALUES (${email}, ${password}, ${firstname}, ${lastname}, ${gender}, ${age})
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

export async function deleteUser(id: number) {
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

export async function deleteRoommateForm(id: number) {
    try {
        await sql`DELETE FROM roommateforms WHERE id = ${id}`
        // revalidatePath('')
        return {message: 'Deleted roommate form'}
    } catch (error) {
        console.log('failed to delte roommate form');
        return {
            message: 'database error, failed to delete roommate form.'
        }
    }
}


// room type validation
const RoomSchema = z.object({
    id: z.number(),
    address: z.string({
        invalid_type_error: 'Please Provide an address.'
    }),
    description: z.string({
        invalid_type_error: 'Please provide a description for the room.'
    }),
    creditScore: z.number({
        invalid_type_error: 'Please give a minimum credit score'
    }),
    rent: z.number({
        invalid_type_error: 'Please determine the rent amount for the room'
    }),
    smoking: z.enum(['allowed', 'not allowed'],{
        invalid_type_error: 'Please select an option'
    }),
    gender: z.enum(['male', 'female', 'other', 'no preference'], {
        invalid_type_error: 'please select an option'
    }),
    roomId: z.number()
});

const CreateRoom = RoomSchema.omit({ id: true });
const UpdateRoom = RoomSchema.omit({ id: true });

export type RoomState = {
    errors?: {
        address?: string[];
        description?: string[];
        creditScore?: string[];
        rent?: string[];
        smoking?: string[];
        gender?: string[];
        roomId?: string[]
    };
    message?: string | null;
}

export async function createRoomForm(prevState: RoomState, formData: FormData) {
    const validatedFields = CreateRoom.safeParse({
        address: formData.get('address'),
        description: formData.get('description'),
        creditScore: formData.get('creditscore'),
        rent: formData.get('rent'),
        smoking: formData.get('smoking'),
        gender: formData.get('gender'),
        roomId: formData.get('roomid')
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create room form.',
          };
    }

    const { address, description, creditScore, rent, smoking, gender, roomId } = validatedFields.data;

    try {
        await sql`
        INSERT INTO rooms (address, description, creditscore, rent, smoking, gender, roomid )
        VALUES (${address}, ${description}, ${creditScore}, ${rent}, ${smoking}, ${gender}, ${roomId})
        `
    } catch (error) {
        console.log('error creating room form: ', error);
        
    }

    // revalidatePath('');
    // redirect('');
}

export async function updateRoomForm(
    id: number,
    prevState: RoomState,
    formData: FormData,
) {
    const validatedFields = UpdateRoom.safeParse({
        address: formData.get('address'),
        description: formData.get('description'),
        creditScore: formData.get('creditscore'),
        rent: formData.get('rent'),
        smoking: formData.get('smoking'),
        gender: formData.get('gender'),
        roomId: formData.get('roomid')
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update room form.',
        }
    }

    const { address, description, creditScore, rent, smoking, gender, roomId } = validatedFields.data;

    try {
        await sql`
        UPDATE rooms
        SET address = ${address}, description = ${description}, creditscore = ${creditScore}, rent = ${rent}, smoking = ${smoking}, gender = ${gender}, roomid = ${roomId}
        WHERE id = ${id}
        `
    } catch (error) {
        console.log("failed to update room: ", error);
        
    }
}

export async function deleteRoomForm(id: number) {
    try {
        await sql`DELETE FROM room WHERE id = ${id}`;
        // revalidatePath('')
        return { message: 'Deletes room'};

    } catch (error) {
        console.log('failed to delete room: ', error
        );
        
    }
}