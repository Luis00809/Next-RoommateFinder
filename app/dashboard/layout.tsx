import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/nextauth";
import { ReactNode } from "react";
import { redirect } from "next/navigation";


export default async function Layout({ children }: {children: ReactNode}){
    const session = await getServerSession(authOptions);

    if(session === null) {
        redirect('/login')
    } else {
        return <>{children}</>
    }
}