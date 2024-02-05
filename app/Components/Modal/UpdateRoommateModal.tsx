"use client";

import UpdateRoommateForm from "../Forms/UpdateRoommateForm";
import React, { useState } from 'react';


export default function UpdateRoommateModal({
    roommateId,
    bio,
    budget,
    preferredGender,
    smoke,
    }:{
    roommateId: string,
    bio: string;
    budget: number;
    preferredGender: 'male' | 'female' | 'other' | 'no preference';
    smoke: 'no' | 'yes';  
}){
    const modalId = `modal_id_${roommateId}`
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        {/* each modal should have its own id */}
        <button className="btn" onClick={() => setIsOpen(true)}>open modal</button>
        <dialog id={modalId} className={`modal modal-bottom sm:modal-middle ${isOpen ? 'modal-open' : ''}`}>
            <div className="modal-box">
               <div>
               <UpdateRoommateForm 
                    roommateId={roommateId} 
                    bio={bio} 
                    budget={budget} 
                    preferredGender={preferredGender} 
                    smoke={smoke} 
                    onSubmit={() => setIsOpen(false)}
                />
               </div>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={()=> setIsOpen(false)} className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    </div>
    )
}