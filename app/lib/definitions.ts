export type User = { 
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    gender: 'male' | 'female' | 'other';
    age: number;

}

export type RoommateForm = {
    id: number;
    bio: string;
    budget: number;
    preferredGender: 'male' | 'female' | 'other' | 'no preference';
    smokes: 'no' | 'yes';
    roommateId: number;
}

export type Room = {
    id: number;
    address: string;
    description: string;
    creditScore: number;
    rent: number;
    smoking: 'allowed' | 'not allowed'
    gender: 'male' | 'female' | 'other' | 'no preference';
    roomId: number;
}