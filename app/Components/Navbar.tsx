import Link from 'next/link';
import NavLinks from './NavLinks';
import { FaUserCircle } from 'react-icons/fa';

export default async function Navbar() {

    return (
        <div className='flex justify-between items-center '>
            <div>
                <Link href='/' className="no-underline text-xl">Find-A-Roomie</Link>
            </div>
            <div >
                <NavLinks />
            </div>
            <div>
                <Link href='/dashboard'><FaUserCircle size="30"/></Link>
            </div>
            
        </div>
    )
}