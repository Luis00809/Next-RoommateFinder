import Link from 'next/link';
import NavLinks from './NavLinks';
import { signOut } from '@/auth';


export default function Navbar() {
    return (
        <div>
            <div className="flex-1">
                <Link href='/' className="btn btn-ghost text-xl">Find-A-Roomie</Link>
            </div>
            <div>
                <NavLinks />
            </div>
            <div>
                <form
                    action={async () => {
                        'use server';
                        await signOut();
                    }}
                    >
                    <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                        <div className="hidden md:block">Sign Out</div>
                    </button>
                </form>
            </div>

        </div>
    )
}