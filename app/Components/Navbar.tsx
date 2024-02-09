import Link from 'next/link';
import NavLinks from './NavLinks';
import SignOut from '../Components/Buttons/SignOutBtn';
import { authOptions } from "@/app/api/auth/[...nextauth]/nextauth";
import { getServerSession } from "next-auth";


export default async function Navbar() {
    const session = await getServerSession(authOptions);

    return (
        <div>
            <div className="flex-1">
                <Link href='/' className="btn btn-ghost text-xl">Find-A-Roomie</Link>
            </div>
            <div>
                <NavLinks />
            </div>
            <div>
                { session !== null && <SignOut />}
            </div>

        </div>
    )
}