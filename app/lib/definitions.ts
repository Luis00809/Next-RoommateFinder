export type User = { 
    id: number;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    gender: 'male' | 'female' | 'other';
    age: number;

}

export type RoommateForm = {
    id: number;
    bio: string;
    budget: number;
    preferredgender: 'male' | 'female' | 'other' | 'no preference';
    smokes: 'no' | 'yes';
    roommateid: number;
}

export type Room = {
    id: number;
    address: string;
    description: string;
    creditscore: number;
    rent: number;
    smoking: 'allowed' | 'not allowed'
    gender: 'male' | 'female' | 'other' | 'no preference';
    roomid: number;
}

export type UserWithRoommateForm = User & RoommateForm;