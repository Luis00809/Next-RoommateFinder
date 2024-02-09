'use client'
import { deleteRoomForm } from "@/app/lib/actions/RoomActions/actions";
import { deleteRoommateForm } from "@/app/lib/actions/RoommateActions/actions";

export default function DeleteCard({
    option,
    id,
}:{
    option: "room" | 'roommate',
    id: string
}){

    async function handleDelete(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault(); 
        try {
            if (option === "room") {
                await deleteRoomForm(id);
                console.log('deleted room')
            } else if (option === "roommate") {
                await deleteRoommateForm(id);
                console.log("deleted roommate form ")
            }
        } catch (error) {
            console.log("error deleting: ", error);
        }
    }

    return (
       
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}