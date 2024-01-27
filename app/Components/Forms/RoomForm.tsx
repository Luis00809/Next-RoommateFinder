'use client';

import { createRoomForm } from '../../lib/actions/RoomActions/actions'
import { useFormState } from 'react-dom';

export default function RoomForm(){
    const initialState = { message: null, errors: {}};
    const [state, dispatch] = useFormState(createRoomForm, initialState);
    console.log(state)

    return (
        <>
            <form action={dispatch} >
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        
                    <label htmlFor="address" className="form-control w-full max-w-xs">
                       address:
                    </label>
                    <input 
                        type="text" 
                        id="address"
                        name="address"
                        placeholder=" ex: 123 main St." 
                        className="input input-bordered w-full max-w-xs" />
                    <label htmlFor="description" className="form-control w-full max-w-xs">
                        Description of the room: 
                    </label>
                    <input 
                        type="text" 
                        id="description"
                        name="description"
                        placeholder="Type here" 
                        className="input input-bordered w-full max-w-xs" />
                    <label htmlFor="creditscore" className="form-control w-full max-w-xs">
                        Minimun Credit score:
                    </label>
                    <input 
                        type="number" 
                        id="creditscore"
                        name="creditscore"
                        placeholder="500" 
                        className="input input-bordered w-full max-w-xs" />
                    <label htmlFor="rent" className="form-control w-full max-w-xs">
                        rent:
                    </label>
                    <input 
                        type="number" 
                        id="rent"
                        name="rent"
                        placeholder="700" 
                        className="input input-bordered w-full max-w-xs" />
                    <label htmlFor="smoking" className="form-control w-full max-w-xs">
                    Is smoking allowed:
                    </label>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Yes</span> 
                            <input type="radio" name="smoking" value='allowed' className="radio checked:bg-red-500" defaultChecked />
                        </label>
                        </div>
                        <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">no</span> 
                            <input type="radio" name="smoking" value='not allowed' className="radio checked:bg-blue-500"  />
                        </label>
                    </div>

                        <label htmlFor="gender" className="form-control w-full max-w-xs">
                        Preferred Gender: 
                        </label>
                            <select 
                            className="select select-bordered"
                            id="gender"
                            name="gender"
                            defaultValue='male'
                            >
                                <option disabled>Pick one</option>
                                <option value="no preference">No Preferrence</option>
                                <option value='male'>Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                       
                        <button type="submit" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Create</button>

                        <div>

                        </div>

                    </div>
            </form>
        </>
    )
}