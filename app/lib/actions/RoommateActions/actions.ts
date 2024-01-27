'use server'

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import GetUserId from '@/app/Components/testId';


// roommateform type validation
const RoommateFormSchema = z.object({
    id: z.string(),
    bio: z.string(),
    budget: z.coerce.number().gt(0, { message: 'Please enter an amount greater that 0.'}),
    preferredgender: z.enum(['male', 'female', 'other', 'no preference']),
    smokes: z.enum(['no', 'yes']),
    roommateid: z.string(),
});

const CreateRoommateForm = RoommateFormSchema.omit({ id: true, roommateid: true});
const UpdateRoommateForm = RoommateFormSchema.omit({ id: true, roommateid: true});

export type RoommateState = {
    errors?: {
      bio?: string[];
      budget?: string[];
      preferredgender?: string[];
      smokes?: string[];
      roommateid?: string[];

    };
    message?: string | null;
  };

export async function createRoommateForm( prevState: RoommateState, formData: FormData) {
    const roommateId = await GetUserId()

    const validatedFields = CreateRoommateForm.safeParse({
        bio: formData.get('bio'),
        budget: formData.get('budget'),
        preferredgender: formData.get('preferredgender'),
        smokes: formData.get('smokes'),
        roommateid: formData.get('roommateid')
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create roommate form.',
          };
    };

    const { bio, budget, preferredgender, smokes } = validatedFields.data;

    try {
        await sql`
        INSERT INTO roommateforms (bio, budget, preferredgender, smokes, roommateid)
        VALUES (${bio}, ${budget}, ${preferredgender}, ${smokes}, ${roommateId})
        `
    } catch (error) {
        console.log("error creating roommate form: ", error);
        
    }
    return {
        ...prevState,
        message: 'Form created successfully'
    }
    // revalidatePath('');
    // redirect('');
}

export async function updateRoommateForm(
    id: string,
    prevState: RoommateState,
    formData: FormData,
) {
    const roommateId = await GetUserId ();

    const validatedFields = UpdateRoommateForm.safeParse({
        bio: formData.get('bio'),
        budget: formData.get('budget'),
        preferredgender: formData.get('preferredgender'),
        smokes: formData.get('smoked'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create roommate form.',
          };
    };

    const { bio, budget, preferredgender, smokes } = validatedFields.data;

    try {
        await sql`
        UPDATE roommateforms
        SET bio = ${bio}, budget =${budget}, preferredgender = ${preferredgender}, smokes = ${smokes}, roommateid = ${roommateId}
        WHERE id = ${id}
        `
    } catch (error) {
        console.log("faild to update roommate form: ", error);
        
    }

    // revalidatePath('');
    // redirect('');

}

export async function deleteRoommateForm(id:string) {
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
