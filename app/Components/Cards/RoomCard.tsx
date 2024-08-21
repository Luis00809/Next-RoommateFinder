
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
            <div className="card w-1/3 shadow-xl ">
                
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