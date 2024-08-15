import Link from "next/link";


export default function RoomCardGrid ({
    title,
    about,
    amount,
    id,
}:{
    title: string;
    about: string;
    amount: number;
    id: string;
}) {
    return (
        <Link href={`/rooms/${id}`} className="w-full h-4/5 no-underline text-black ">
            <div className="card  shadow-xl bg-red-50">
                <div className="w-full justify-center ">
                    <img className="rounded-lg w-full h-full" src="https://www.erfurt.com/fileadmin/user_upload/tipps-inspirationen/tipps-tricks/raumwirkung/Leerer-weisser-Raum_620x417px.jpg" alt="Shoes" />
                </div>
                <div className="flex flex-col ml-3">
                    <h2 className="card-title font-bold">{title}</h2>
                    <p className="multi-line-ellipsis">{about}</p>                    
                    <p className="bg-blue-200 w-12 text-center rounded-xl p-1">${amount}</p>
                </div>
            </div>
        </Link>
        
    )
}