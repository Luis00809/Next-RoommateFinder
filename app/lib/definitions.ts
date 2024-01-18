export type User = { 
    id: string;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    gender: 'male' | 'female' | 'other';
    age: number;

}

export type RoommateForm = {
    id: string;
    bio: string;
    budget: number;
    preferredgender: 'male' | 'female' | 'other' | 'no preference';
    smokes: 'no' | 'yes';
    roommateid: string;
}

export type Room = {
    id: string;
    address: string;
    description: string;
    creditscore: number;
    rent: number;
    smoking: 'allowed' | 'not allowed'
    gender: 'male' | 'female' | 'other' | 'no preference';
    roomid: string;
}

export type UserWithRoommateForm = User & RoommateForm;