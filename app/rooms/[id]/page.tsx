import RoomCard from "@/app/Components/Cards/RoomCard"
import { getOneRoom } from "@/app/lib/data";


export default async function OneRoom({params}: {params: { id: number}}) {
    const id = params.id
    const room = await getOneRoom(id);
    console.log(room);
    
    return (
        <>
            <h4>One Page!</h4>
            <div>
               {room && <RoomCard key={room.id} 
               title={room.address} about={room.description} 
               amount={room.rent} gender={room.gender}
               smoking={room.smoking} id={room.id}
               credit={room.creditscore} roomId={room.roomid} />}
           </div>
           <div>
                {/* insert user card here */}
           </div>
        </>
    )
}