import RoomForm from "../Components/Forms/RoomForm"
import RoommateForm from "../Components/Forms/RoommateForm"
import {getUsersRooms} from "@/app/lib/data";
import GetUserId from '@/app/Components/testId';
import RoomCard from "../Components/Cards/RoomCard";
import {getOneRoommate} from "@/app/lib/data";
import RoommateCard from '../Components/Cards/RoommateCard';

export default async function Dashboard() {
    const userId = await GetUserId();
    const rooms = await getUsersRooms(userId as string);
    const userWithRoommateForm = await getOneRoommate(userId as string);

    
    return (
        <>
            <div>
                <h2>Post a room: </h2>
                <RoomForm />
                <h2>create a roommate form</h2>
                <RoommateForm />
            </div>
            <div>
                <h2>Your rooms: </h2>
                {rooms?.map(room => (
                    <RoomCard key={room.id}
                    title={room.address} about={room.description} 
                    amount={room.rent} gender={room.gender}
                    smoking={room.smoking} id={room.id}
                    credit={room.creditscore} roomId={room.roomid}  />
                ))}
            </div>
            <div>
                <h2>Your RoommateForm:</h2>
                
                { userWithRoommateForm && <RoommateCard key={userWithRoommateForm.roommateid} 
                id={userWithRoommateForm.roommateid} budget={userWithRoommateForm.budget} 
                bio={userWithRoommateForm.bio} preferredGender={userWithRoommateForm.preferredgender} 
                smoke={userWithRoommateForm.smokes} />}

            </div>
        </>
    )
}