
import { getServerSession } from "next-auth/next";
import {authOptions} from "../api/auth/[...nextauth]/nextauth";


export default async function getUserid() {
    const session = await getServerSession(authOptions);
    console.log('User ID: ', session?.user?.id);

    const userId = session?.user?.id;
   
}



