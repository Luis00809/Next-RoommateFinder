'use client';

import { createRoommateForm } from '../../lib/actions/RoommateActions/actions'
import { useFormState } from 'react-dom';

export default function RoommateForm(){
    const initialState = { message: null, errors: {}};
    const [state, dispatch] = useFormState(createRoommateForm, initialState);
    console.log(state)

    return (
        <>
            <form action={dispatch} >
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        
                    <label htmlFor="bio" className="form-control w-full max-w-xs">
                       bio:
                    </label>
                    <input 
                        type="text" 
                        id="bio"
                        name="bio"
                        className="input input-bordered w-full max-w-xs" />
                    <label htmlFor="budget" className="form-control w-full max-w-xs">
                        What is your budget?
                    </label>
                    <input 
                        type="number" 
                        id="budget"
                        name="budget"
                        placeholder="$800" 
                        className="input input-bordered w-full max-w-xs" />
        
                    <label htmlFor="smokes" className="form-control w-full max-w-xs">
                    Do you smoke?
                    </label>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Yes</span> 
                            <input type="radio" name="smokes" value='yes' className="radio checked:bg-red-500" checked />
                        </label>
                        </div>
                        <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">no</span> 
                            <input type="radio" name="smokes" value='no' className="radio checked:bg-blue-500" checked />
                        </label>
                    </div>

                        <label htmlFor="preferredgender" className="form-control w-full max-w-xs">
                        Preferred Roommate Gender: 
                        </label>
                            <select 
                            className="select select-bordered"
                            id="preferredgender"
                            name="preferredgender"
                            defaultValue='no preference'
                            >
                                <option disabled>Pick one</option>
                                <option value="no preference">No Preferrence</option>
                                <option value='male'>Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        <label htmlFor="roommateid" className="form-control w-full max-w-xs">
                        roommateID: 
                        </label>
                        <input type='number' id='roommateid' name='roommateid' className="input input-bordered w-full max-w-xs" />
                        <button type="submit" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Create</button>

                        <div>

                        </div>

                    </div>
            </form>
        </>
    )
}