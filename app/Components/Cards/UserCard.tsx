
import Link from "next/link";

export default function UserCard({
    firstN, 
    lastN,
    gender,
    age,
    id,
    email,

}:{
    firstN: string;
    lastN: string;
    gender: 'male' | 'female' | 'other';
    age: number;
    id: string;
    email: string;
}){
    return (
        <>
           <div className="card w-15 m-3 bg-indigo-500 shadow-xl">
                {/* replace img element with built-in nextjs Image component */}
                <figure></figure>
                <div className="card-body">
                    <h2 className="card-title">{firstN} {lastN}</h2>
                    <p>Gender: {gender}</p>
                    <p>Age: {age}</p>
                    <p>email: {email}</p>

                    <p>{id}</p>

                    <div className="card-actions justify-end">
                    <Link href={`/roommates/${id}`}><button className="btn btn-primary">View Roomie</button></Link>
                    </div>
                </div>
            </div> 
        </>
    )
}