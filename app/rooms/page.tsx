import RoomCard from '../Components/Cards/RoomCard';
import { getRooms } from '../lib/data';
import RoomCardGrid from '../Components/Cards/RoomCardGrid';

export default async function Rooms() {

    const rooms = await getRooms();
        //   className='flex flex-wrap gap-4 justify-center '
    return (
        <>
            <h2>Rooms:</h2>
            <div className='container'>
                <div className='flex flex-wrap justify-center gap-4 '>
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