'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx'
import SignOut from '../Components/Buttons/SignOutBtn';

import { useSession } from 'next-auth/react';



const links = [
    {name: 'Dasboard', href: '/dashboard'},
    {name: 'Rooms', href: '/rooms'},
    {name: 'Roommates', href: '/roommates'},
]

export default function NavLinks() {
    const pathname = usePathname();
    const { data: session, status } = useSession();

    const signOutButton = session ? <SignOut /> : null;

    return (
        <>
            <div className="navbar container bg-slate-400">            
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                                    {
                                        'bg-sky-100 text-blue-600': pathname === link.href,
                                    },
                                )}
                            >
                                <p className="hidden md:block">{link.name}</p>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div>
                    {signOutButton}
                </div>
            </div>
        </>
    );
}