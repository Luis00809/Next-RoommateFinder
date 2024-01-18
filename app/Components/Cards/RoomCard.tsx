// would need to make smoking an if statement as it is different between forms and rooms
// same for gender as form and room are preffered genders while users is their gender

import Link from "next/link";

export default function RoomCard ({
    title,
    about,
    amount,
    gender,
    smoking,
    id,
    credit,
    roomId,
}:{
    title: string;
    about: string;
    amount: number;
    gender: 'male' | 'female' | 'other' | 'no preference';
    smoking: 'allowed' | 'not allowed',
    id: string;
    credit: number;
    roomId: string;
}) {
    return (
        <>
            <div className="card w-15 m-3 bg-indigo-500 shadow-xl">
                {/* replace img element with built-in nextjs Image component */}
                <figure></figure>
                <div className="card-body">
                    <h2 className="card-title">Address: {title}</h2>
                    <p>Description: {about}</p>
                    <p>Rent: {amount}</p>
                    <p>Preferred Gender: {gender}</p>
                    <p>Smoking: {smoking}</p>
                    <p>{id}</p>
                    <p>Minimum Credit Score: {credit}</p>
                    <p>room: {roomId}</p>

                    <div className="card-actions justify-end">
                    <Link href={`/rooms/${id}`}><button className="btn btn-primary">Visit Room</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}