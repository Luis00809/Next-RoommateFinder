import { fetchRoommates } from "../lib/data";
import UserCard from "../Components/Cards/UserCard";

export default async function RoommatesPage() {
    const users = await fetchRoommates();
    return (
        <>
            <h4>Roommates:</h4> 
            { users?.map(user => (
                <UserCard key={user.id} 
                    firstN={user.firstname} lastN={user.lastname}
                    gender={user.gender} age={user.age}
                    id={user.id} email={user.email}
                />
            ))} 
        </>
    )
}