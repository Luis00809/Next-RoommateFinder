'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx'
import SignOut from '../Components/Buttons/SignOutBtn';

import { useSession } from 'next-auth/react';



const links = [
    {name: 'Dashboard', href: '/dashboard'},
    {name: 'Rooms', href: '/rooms'},
    {name: 'Roommates', href: '/roommates'},
]

export default function NavLinks() {
    const pathname = usePathname();
    const { data: session, status } = useSession();

    const signOutButton = session ? <SignOut /> : null;

    return (
        <>
            <div className="flex justify-between items-center">            
                <div className="flex">
                    <ul className="flex list-none">
                        {links.map((link) => (
                            <li key={link.name} className="mr-20">
                                <Link href={link.href} className="no-underline">
                                    <p className="hidden md:block">{link.name}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* <div>
                    {signOutButton}
                </div> */}
            </div>
        </>
    );
}