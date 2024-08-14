
export default function RoomCard (
    {
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
            <div className="card w-1/5 shadow-xl ">
                <div className="w-full justify-center ">
                    {/* replace img element with built-in nextjs Image component */}
                        <img className="rounded-lg w-full h-full" src="https://www.erfurt.com/fileadmin/user_upload/tipps-inspirationen/tipps-tricks/raumwirkung/Leerer-weisser-Raum_620x417px.jpg" alt="Shoes" />
                    </div>
                <div className="flex">
                    <div className="w-full ml-6">
                        <h2 className="card-title">Address: {title}</h2>
                        <p>Description: {about}</p>
                        <p>Rent: {amount}</p>
                        <p>Preferred Gender: {gender}</p>
                        <p>Smoking: {smoking}</p>
                        <p>Minimum Credit Score: {credit}</p>
                    </div>
                   
                </div>
               
            </div>
        </>
    )
}