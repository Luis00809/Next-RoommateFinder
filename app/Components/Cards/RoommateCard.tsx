export default function RoommateCard({
    id,
    bio,
    budget,
    preferredGender,
    smoke,
}:{
    id: string;
    bio: string;
    budget: number;
    preferredGender: 'male' | 'female' | 'other' | 'no preference';
    smoke: 'no' | 'yes';
}) {
    
    return (
        <>
            <div className="card w-15 m-3 bg-indigo-500 shadow-xl">
                {/* replace img element with built-in nextjs Image component */}
                <figure></figure>
                <div className="card-body">
                    <h2 className="card-title">Budget: {budget}</h2>
                    <p>Bio: {bio}</p>
                    <p>Preferred Gender: {preferredGender}</p>
                    <p>Smoking: {smoke}</p>
                    <p>{id}</p>
                </div>
            </div>
        </>
    )
}