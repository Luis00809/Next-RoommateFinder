'use client'
import { updateRoommateForm } from "@/app/lib/actions/RoommateActions/actions"
import { useFormState } from 'react-dom';


export default function UpdateRoommateForm({
    roommateId,
    bio,
    budget,
    preferredGender,
    smoke,
    onSubmit,
}:{
    roommateId: string,
    bio: string;
    budget: number;
    preferredGender: 'male' | 'female' | 'other' | 'no preference';
    smoke: 'no' | 'yes';
    onSubmit: ()=> void;
}){
    const initialState = { message: null, error: {} };
    const updateFormWithId = updateRoommateForm.bind(null, roommateId);
    const [state, dispatch ] = useFormState(updateFormWithId, initialState);

    return(
        <div>
            <form action={dispatch} onSubmit={onSubmit} >
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        
                    <label htmlFor="bio" className="form-control w-full max-w-xs">
                       bio:
                    </label>
                    <input 
                        type="text" 
                        id="bio"
                        name="bio"
                        defaultValue={bio}
                        className="input input-bordered w-full max-w-xs" />
                    <label htmlFor="budget" className="form-control w-full max-w-xs">
                        What is your budget?
                    </label>
                    <input 
                        type="number" 
                        id="budget"
                        name="budget"
                        defaultValue={budget}
                        className="input input-bordered w-full max-w-xs" />
        
                    <label htmlFor="smokes" className="form-control w-full max-w-xs">
                    Do you smoke?
                    </label>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Yes</span> 
                            <input type="radio" name="smokes" value='yes' className="radio checked:bg-red-500" defaultChecked={smoke === 'yes'} />
                        </label>
                        </div>
                        <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">no</span> 
                            <input type="radio" name="smokes" value='no' className="radio checked:bg-blue-500" defaultChecked={smoke === 'no'} />
                        </label>
                    </div>

                        <label htmlFor="preferredgender" className="form-control w-full max-w-xs">
                        Preferred Roommate Gender: 
                        </label>
                            <select 
                            className="select select-bordered"
                            id="preferredgender"
                            name="preferredgender"
                            defaultValue={preferredGender}
                            >
                                <option disabled>Pick one</option>
                                <option value="no preference">No Preferrence</option>
                                <option value='male'>Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        
                        <button type="submit" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Update</button>

                        <div>

                        </div>

                    </div>
            </form>
        </div>
    )
}