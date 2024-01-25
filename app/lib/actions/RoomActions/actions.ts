'use server'
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
// import { getUserId } from "@/app/api/auth/[...nextauth]/nextauth";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";


// room type validation
const RoomSchema = z.object({
    id: z.string(),
    address: z.string({
        invalid_type_error: 'Please Provide an address.'
    }),
    description: z.string({
        invalid_type_error: 'Please provide a description for the room.'
    }),
    creditscore: z.coerce.number({
        invalid_type_error: 'Please give a minimum credit score'
    }),
    rent: z.coerce.number({
        invalid_type_error: 'Please determine the rent amount for the room'
    }),
    smoking: z.enum(['allowed', 'not allowed'],{
        invalid_type_error: 'Please select an option'
    }),
    gender: z.enum(['male', 'female', 'other', 'no preference'], {
        invalid_type_error: 'please select an option'
    }),
    roomid: z.string()
});

const CreateRoom = RoomSchema.omit({ id: true });
const UpdateRoom = RoomSchema.omit({ id: true });

export type RoomState = {
    errors?: {
        address?: string[];
        description?: string[];
        creditscore?: string[];
        rent?: string[];
        smoking?: string[];
        gender?: string[];
        roomid?: string[]
    };
    message?: string | null;
}

export async function createRoomForm(prevState: RoomState, formData: FormData) {
    // const session = await getServerSession();
    // const userId = session?.user?.id;
    // console.log(userId);
    // if (!userId) {
    //     return new NextResponse("Unauthorized", { status: 401 });
    // }
    
    const validatedFields = CreateRoom.safeParse({
        address: formData.get('address'),
        description: formData.get('description'),
        creditscore: formData.get('creditscore'),
        rent: formData.get('rent'),
        smoking: formData.get('smoking'),
        gender: formData.get('gender'),
        roomid: formData.get('roomid')
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create room form.',
          };
    }

    const { address, description, creditscore, rent, smoking, gender, roomid } = validatedFields.data;

    try {
        await sql`
        INSERT INTO rooms (address, description, creditscore, rent, smoking, gender, roomid )
        VALUES (${address}, ${description}, ${creditscore}, ${rent}, ${smoking}, ${gender}, ${roomid})
        `
    } catch (error) {
        console.log('error creating room form: ', error);
        
    }
    return {
        ...prevState,
        message: 'Room created successfully'
    }
    // revalidatePath('');
    // redirect('');
}

export async function updateRoomForm(
    id: string,
    prevState: RoomState,
    formData: FormData,
) {
    const validatedFields = UpdateRoom.safeParse({
        address: formData.get('address'),
        description: formData.get('description'),
        creditscore: formData.get('creditscore'),
        rent: formData.get('rent'),
        smoking: formData.get('smoking'),
        gender: formData.get('gender'),
        roomid: formData.get('roomid')
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update room form.',
        }
    }

    const { address, description, creditscore, rent, smoking, gender, roomid } = validatedFields.data;

    try {
        await sql`
        UPDATE rooms
        SET address = ${address}, description = ${description}, creditscore = ${creditscore}, rent = ${rent}, smoking = ${smoking}, gender = ${gender}, roomid = ${roomid}
        WHERE id = ${id}
        `
    } catch (error) {
        console.log("failed to update room: ", error);
        
    }
}

export async function deleteRoomForm(id: string) {
    try {
        await sql`DELETE FROM room WHERE id = ${id}`;
        // revalidatePath('')
        return { message: 'Deletes room'};

    } catch (error) {
        console.log('failed to delete room: ', error
        );
        
    }
}