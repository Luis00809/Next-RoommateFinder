
import { getServerSession } from "next-auth/next";
import {authOptions} from "../api/auth/[...nextauth]/nextauth";
// dont think i can pass this in as a function so have to do this each time
// i want to use the id

export default async function GetUserId() {
    const session = await getServerSession(authOptions);
    console.log('User ID: ', session?.user?.id);

    const userId = session?.user?.id;
   
}



