import RoomCard from '../Components/Cards/RoomCard';
import { getRooms } from '../lib/data';
import RoomCardGrid from '../Components/Cards/RoomCardGrid';

export default async function Rooms() {
    // flex flex-wrap justify-center gap-4
    const rooms = await getRooms();
    return (
        <>
            <h2>Rooms:</h2>
            <div className='container'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4 x'>
                    {rooms?.map(room => (
                        <RoomCardGrid key={room.id}
                        title={room.address} about={room.description} 
                        amount={room.rent} id={room.id}
                        />
                    ))}
                </div> 
            </div>
        </>
    )
}