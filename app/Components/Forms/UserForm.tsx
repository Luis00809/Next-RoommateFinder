'use client';
import { User } from "@/app/lib/definitions";
import Link from "next/link";
import { createUserForm } from '../../lib/actions/UserActions/actions'
import { useFormState } from 'react-dom';

export default function UserForm(){
    const initialState = { message: null, errors: {} }
    const [state, dispatch] = useFormState(createUserForm, initialState);
    console.log(state);
    


    return (
       <form action={dispatch} >
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                
            <label htmlFor="firstname" className="form-control w-full max-w-xs">
                What is your first name:
            </label>
            <input 
                type="text" 
                id="firstname"
                name="firstname"
                placeholder="Type here" 
                className="input input-bordered w-full max-w-xs" />
            <label htmlFor="lastname" className="form-control w-full max-w-xs">
                What is your last name:
            </label>
            <input 
                type="text" 
                id="lastname"
                name="lastname"
                placeholder="Type here" 
                className="input input-bordered w-full max-w-xs" />
            <label htmlFor="email" className="form-control w-full max-w-xs">
            email:
            </label>
            <input 
                type="email" 
                id="email"
                name="email"
                placeholder="@email.com" 
                className="input input-bordered w-full max-w-xs" />
            <label htmlFor="password" className="form-control w-full max-w-xs">
                create a password:
            </label>
            <input 
                type="password" 
                id="password"
                name="password"
                placeholder="****" 
                className="input input-bordered w-full max-w-xs" />
            <label htmlFor="age" className="form-control w-full max-w-xs">
            How old are you:
            </label>
            <input 
                type="number" 
                id="age"
                name="age"
                className="input input-bordered w-full max-w-xs" />

                <label htmlFor="gender" className="form-control w-full max-w-xs">
                    Gender: 
                </label>
                    <select 
                    className="select select-bordered"
                    id="gender"
                    name="gender"
                    defaultValue='male'
                    >
                        <option disabled>Pick one</option>
                        <option value='male'>Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                <button type="submit" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Create</button>

                <div>

                </div>

            </div>
       </form>
    )
}