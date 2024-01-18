import UserCard from "@/app/Components/Cards/UserCard";
import RoommateCard from "@/app/Components/Cards/RoommateCard";

import { getOneRoommate } from "@/app/lib/data";

export default async function OneRoommate({params}: {params: { id: string}}) {
    const id = params.id
    const userWithRoommateForm = await getOneRoommate(id);
    

    return (
        <>
             <div>
               {userWithRoommateForm && <UserCard key={userWithRoommateForm.id} 
                  firstN={userWithRoommateForm.firstname} lastN={userWithRoommateForm.lastname}
                  gender={userWithRoommateForm.gender} age={userWithRoommateForm.age}
                  id={userWithRoommateForm.id} email={userWithRoommateForm.email} />}
           </div>
           <div>
           { userWithRoommateForm && <RoommateCard key={userWithRoommateForm.roommateid} id={userWithRoommateForm.roommateid} budget={userWithRoommateForm.budget} bio={userWithRoommateForm.bio} preferredGender={userWithRoommateForm.preferredgender} smoke={userWithRoommateForm.smokes} />}
           </div>
       </>
   )
    
}