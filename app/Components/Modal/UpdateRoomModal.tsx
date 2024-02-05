"use client"

import  UpdateRoom from '../Forms/UpdateForm';
import React, { useState } from 'react';


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
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* each modal should have its own id */}
            <button className="btn" onClick={()=> setIsOpen(true)}>open modal</button>
            <dialog id={modalId} className={`modal modal-bottom sm:modal-middle ${isOpen ? 'modal-open' : ''}`}>
                <div className="modal-box">
                   <div>
                    <UpdateRoom 
                        idRoom={id}
                        title={title}
                        about = {about}
                        gender = {gender}
                        amount = {amount}
                        smoking = {smoking}
                        credit = {credit}
                        roomId = {roomId}
                        onSubmit = {() => setIsOpen(false)}
                    />
                   

                   </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={() => setIsOpen(false)} className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}