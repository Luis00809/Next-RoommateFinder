import RoomCard from "@/app/Components/Cards/RoomCard"
import { getOneRoom } from "@/app/lib/data";


export default async function OneRoom({params}: {params: { id: string}}) {
    const roomId = params.id
    console.log(typeof(roomId));
    
    const room = await getOneRoom(roomId);
    
    return (
        <>
               {room && 

               <>
                <div className="flex gap-4  ml-4 mr-4">
                    <div className="w-2/3 ">
                        <img className="rounded-lg w-full h-full" src="https://www.erfurt.com/fileadmin/user_upload/tipps-inspirationen/tipps-tricks/raumwirkung/Leerer-weisser-Raum_620x417px.jpg" alt="Shoes" />
                    </div>
                    <div className="w-1/3 rounded-xl bg-slate-100">
                        <h3>{room.address}</h3>
                        <p>Preferred Gender: {room.gender}</p>
                        <p>Smoking: {room.smoking}</p>
                        <p>Minimum Credit Score: {room.creditscore}</p> 
                        <h3>${room.rent} <span>/month</span></h3>
                        <button className="btn bg-gray-400 w-96">Contact</button>
                        <p>Hosted by</p>
                        <p>User</p>
                    </div>
                </div>
                <div>
                    <h2>About This Room</h2>
                    <p>{room.description}</p>
                </div>
                <RoomCard 
               title={room.address} about={room.description} 
               amount={room.rent} gender={room.gender}
               smoking={room.smoking} id={room.id}
               credit={room.creditscore} roomId={room.roomid} />
               
               </>
                
               }
        </>
    )
}