import RoomForm from "../Components/Forms/RoomForm"
import RoommateForm from "../Components/Forms/RoommateForm"

export default function Dashboard() {
    return (
        <>
            <div>
                <h2>Post a room: </h2>
                <RoomForm />
                <h2>create a roommate form</h2>
                <RoommateForm />
            </div>
        </>
    )
}