"use client"
// will put this component on the room card component and set a true or false boolean to display it
// going to need to pass in the room id 
// need the getRoom query 
// set default values to that rooms data 
// then need to use the updateRoom function on submit to update that room which would require the rooms Id
// revalidate the page

import { createRoomForm } from "@/app/lib/actions/RoomActions/actions";
import { useFormState } from 'react-dom';
import  updateRoom from '../Forms/UpdateForm';

export default function UpdateRoomModal({ title,
    about,
    amount,
    gender,
    smoking,
    id,
    credit,
    roomId,
}:{
    title: string;
    about: string;
    amount: number;
    gender: 'male' | 'female' | 'other' | 'no preference';
    smoking: 'allowed' | 'not allowed',
    id: string;
    credit: number;
    roomId: string;}) {

    const modalId = `modal_id_${id}`

    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* each modal should have its own id */}
            <button className="btn" onClick={()=>(document.getElementById(modalId) as HTMLDialogElement)?.showModal()}>open modal</button>
            <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                   <div>
                   {updateRoom({ idRoom: id, title: title, about: about, 
                gender: gender, amount: amount, smoking: smoking, credit: credit,
                roomId: roomId })}

                   </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}