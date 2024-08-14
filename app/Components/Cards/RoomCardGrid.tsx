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
        <Link href={`/rooms/${id}`} className="hover:scale-125 transition-transform w-1/5 no-underline text-black">
            <div className="card  shadow-xl bg-red-50">
                <div className="w-full justify-center ">
                    <img className="rounded-lg w-full h-full" src="https://www.erfurt.com/fileadmin/user_upload/tipps-inspirationen/tipps-tricks/raumwirkung/Leerer-weisser-Raum_620x417px.jpg" alt="Shoes" />
                </div>
                <div className="flex flex-col p-4">
                    <h2 className="card-title font-bold">{title}</h2>
                    <p>{about}</p>
                    <p>Rent: {amount}</p>
                </div>
            </div>
        </Link>
    )
}