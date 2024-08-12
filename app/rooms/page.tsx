import RoomCard from '../Components/Cards/RoomCard';
import { getRooms } from '../lib/data';

export default async function Rooms() {

    const rooms = await getRooms();
         
    return (
        <>
            <h2>Rooms:</h2>
            <div className='flex w-full justify-center'>
                <div>
                    {rooms?.map(room => (
                        <RoomCard key={room.id}
                        title={room.address} about={room.description} 
                        amount={room.rent} gender={room.gender}
                        smoking={room.smoking} id={room.id}
                        credit={room.creditscore} roomId={room.roomid}  />
                    ))}
                </div> 
            </div>
        </>
    )
}