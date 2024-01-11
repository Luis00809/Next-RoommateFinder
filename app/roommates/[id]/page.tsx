import UserCard from "@/app/Components/Cards/UserCard";
import RoommateCard from "@/app/Components/Cards/RoommateCard";

import { getOneRoommate } from "@/app/lib/data";

export default async function OneRoommate({params}: {params: { id: number}}) {
    const id = params.id
    const user = await getOneRoommate(id);
    

    return (
        <>
            <div>
            {user && <UserCard key={user.id} 
                    firstN={user.firstname} lastN={user.lastname}
                    gender={user.gender} age={user.age}
                    id={user.id} email={user.email} />}
            </div>
           { user && <RoommateCard id={user.formid} budget={user.budget} bio={user.bio} preferredGender={user.preferredgender} smoke={user.smokes} />}
        </>
    )
    
}