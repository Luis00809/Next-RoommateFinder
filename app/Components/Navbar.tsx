import Link from 'next/link';
import NavLinks from './NavLinks';


export default async function Navbar() {

    return (
        <div>
            <div className="flex-1">
                <Link href='/' className="btn btn-ghost text-xl">Find-A-Roomie</Link>
            </div>
            <div>
                <NavLinks />
            </div>
            {/* <div>
                { session !== null && <SignOut />}
            </div> */}

        </div>
    )
}