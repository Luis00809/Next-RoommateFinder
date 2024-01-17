const users = [
    {
        id: 'fa44ee1b-d48f-4f04-83e1-4aea6fe4d004',
        email: "john.doe@example.com",
        password: "password1",
        firstname: "John",
        lastname: "Doe",
        gender: "male",
        age: 23
      },
      {
        id: '7c7043bc-328c-45f9-8bba-8979b82da41f',
        email: "jane.doe@example.com",
        password: "password2",
        firstname: "Jane",
        lastname: "Doe",
        gender: 'female',
        age: 25
      },
      {
        id: '797e31a2-52a4-487f-b8a7-2967fd1d6a42',
        email: "alice.smith@example.com",
        password: "password3",
        firstname: "Alice",
        lastname: "Smith",
        gender: 'female',
        age: 58
      },
      {
        id: 'a39a19dc-ec97-4f85-8479-b09c14b2dc96',
        email: "bob.johnson@example.com",
        password: "password4",
        firstname: "Bob",
        lastname: "Johnson",
        gender: "male",
        age: 55
      },
      {
        id: 'e6c31ae4-92ba-4b83-88c8-db8d056bb8ff',
        email: "charlie.brown@example.com",
        password: "password5",
        firstname: "Charlie",
        lastname: "Brown",
        gender: "male",
        age: 58
      },
      {
        id: 'b5ab2ff6-004c-459c-991c-142d63382ead',
        email: "snoopy@example.com",
        password: "password6",
        firstname: "Snoopy",
        lastname: "The Dog",
        gender: "male",
        age: 44
      },
      {
        id: '41659d6f-2b66-40db-9234-6e8121177e26',
        email: "lucy@example.com",
        password: "password7",
        firstname: "Lucy",
        lastname: "Van Pelt",
        gender: 'female',
        age: 32
      },
      {
        id: '77d1dacc-e391-4fc9-af69-271939fe6ead',
        email: "linus.vanpelt@example.com",
        password: "password8",
        firstname: "Linus",
        lastname: "Van Pelt",
        gender: "male",
        age: 21
      },
      {
        id: 'b863428e-3616-4f91-8c0e-8aa31f07ed32',
        email: "peppermintpatty@example.com",
        password: "password9",
        firstname: "Peppermint Patty",
        lastname: "",
        gender: 'female',
        age: 20
      },
      {
        id: '10086f9b-a174-4892-b94d-5fab06e8338b',
        email: "marcie@example.com",
        password: "password10",
        firstname: "Marcie",
        lastname: "Rodd",
        gender: 'female',
        age: 18
      },
      {
        id: '98599198-737a-4512-ab7a-69235c978efa',
        email: "fred@example.com",
        password: "password11",
        firstname: "Fred",
        lastname: "Jones",
        gender: "male",
        age: 19

      },
      {
        id: 'b2506023-e322-4c3d-b54c-f300a03ee21d',
        email: "velma@example.com",
        password: "password12",
        firstname: "Velma",
        lastname: "Dinkley",
        gender: 'female',
        age: 19
      },
      {
        id: '7db2f04d-9d58-4010-b793-6b17ce5b5e47',
        email: "daphne@example.com",
        password: "password13",
        firstname: "Daphne",
        lastname: "Blake",
        gender: 'female',
        age: 60
      },
      {
        id: '5bd01f5b-0398-44f2-8509-23b77ed90c5e',
        email: "shaggy@example.com",
        password: "password14",
        firstname: "Shaggy",
        lastname: "Smith",
        gender: "male",
        age: 49
      },
      {
        id: '09b21bb1-c632-449c-b81a-40808370c6bf',
        email: "scooby@example.com",
        password: "password15",
        firstname: "Scooby",
        lastname: "Doo",
        gender: "male",
        age: 74
      }
]

const userForm = [
    {
        bio: "I am a software engineer looking for a room to share. I enjoy hiking and reading in my free time.",
        budget: 1000,
        preferredgender: "male",
        smokes: 'no',
        roommateid: 'fa44ee1b-d48f-4f04-83e1-4aea6fe4d004'
      },
      {
        
        bio: "I am a medical student who is looking for a room to share. I enjoy cooking and watching movies in my free time.",
        budget: 1200,
        preferredgender: 'female',
        smokes: "yes",
        roommateid: '7c7043bc-328c-45f9-8bba-8979b82da41f'
      },
      {
        bio: "I am an art student who is looking for a room to share. I enjoy painting and traveling in my free time.",
        budget: 800,
        preferredgender: "male",
        smokes: "no",
        roommateid: '797e31a2-52a4-487f-b8a7-2967fd1d6a42'
      },
      {
        bio: "I am a law student who is looking for a room to share. I enjoy reading law books and playing chess in my free time.",
        budget: 1500,
        preferredgender: 'female',
        smokes: "yes",
        roommateid: 'a39a19dc-ec97-4f85-8479-b09c14b2dc96'
      },
      {
        bio: "I am a university teacher who is looking for a room to share. I enjoy teaching and playing the piano in my free time.",
        budget: 1100,
        preferredgender: "male",
        smokes: "no",
        roommateid: 'e6c31ae4-92ba-4b83-88c8-db8d056bb8ff'
      },
      {
        bio: "I am a professor who is looking for a room to share. I enjoy researching and gardening in my free time.",
        budget: 1300,
        preferredgender: 'female',
        smokes: "yes",
        roommateid: 'b5ab2ff6-004c-459c-991c-142d63382ead'
      },
      {
        bio: "I am a university librarian who is looking for a room to share. I enjoy reading and doing yoga in my free time.",
        budget: 900,
        preferredgender: "male",
        smokes: "no",
        roommateid: '41659d6f-2b66-40db-9234-6e8121177e26'
      },
      {
        bio: "I am a university janitor who is looking for a room to share. I enjoy gardening and playing the guitar in my free time.",
        budget: 1400,
        preferredgender: 'female',
        smokes: "yes",
        roommateid: '77d1dacc-e391-4fc9-af69-271939fe6ead'
      },
      {
        bio: "I am a university receptionist who is looking for a room to share. I enjoy painting and dancing in my free time.",
        budget: 1200,
        preferredgender: "male",
        smokes: "no",
        roommateid: 'b863428e-3616-4f91-8c0e-8aa31f07ed32'
      },
      {
        bio: "I am a university counselor who is looking for a room to share. I enjoy traveling and playing the violin in my free time.",
        budget: 800,
        preferredgender: 'female',
        smokes: "yes",
        roommateid: '10086f9b-a174-4892-b94d-5fab06e8338b'
      },
      {
        bio: "I am a university registrar who is looking for a room to share. I enjoy reading and playing the flute in my free time.",
        budget: 1500,
        preferredgender: "male",
        smokes: "no",
        roommateid: '98599198-737a-4512-ab7a-69235c978efa'
      },
      {
        bio: "I am a university advisor who is looking for a room to share. I enjoy teaching and playing the cello in my free time.",
        budget: 1100,
        preferredgender: 'female',
        smokes: "yes",
        roommateid: 'b2506023-e322-4c3d-b54c-f300a03ee21d'
      }
]

const roomForm = [
    {
        address: "123 Main St, Anytown, USA",
        description: "A spacious room with a queen bed and a private bathroom.",
        creditscore: 750,
        rent: 1000,
        smoking: "not allowed",
        gender: "male",
        roomid: 'fa44ee1b-d48f-4f04-83e1-4aea6fe4d004'
      },
      {
        address: "456 Oak St, Anytown, USA",
        description: "A cozy room with a double bed and a shared bathroom.",
        creditscore: 600,
        rent: 1200,
        smoking: 'allowed',
        gender: 'female',
        roomid: 'fa44ee1b-d48f-4f04-83e1-4aea6fe4d004'
      },
      {
        address: "789 Pine St, Anytown, USA",
        description: "A room with a single bed and a shared bathroom.",
        creditscore: 500,
        rent: 800,
        smoking: "not allowed",
        gender: "male",
        roomid: '797e31a2-52a4-487f-b8a7-2967fd1d6a42'
      },
      {
        address: "321 Maple St, Anytown, USA",
        description: "A luxurious room with a king bed and a private bathroom.",
        creditscore: 800,
        rent: 1500,
        smoking: 'allowed',
        gender: 'female',
        roomid: 'a39a19dc-ec97-4f85-8479-b09c14b2dc96'
      },
      {
        address: "654 Willow St, Anytown, USA",
        description: "A room with a double bed and a shared bathroom.",
        creditscore: 700,
        rent: 1100,
        smoking: "not allowed",
        gender: "male",
        roomid: 'e6c31ae4-92ba-4b83-88c8-db8d056bb8ff'
      },
      {
        address: "987 Birch St, Anytown, USA",
        description: "A spacious room with a queen bed and a private bathroom.",
        creditscore: 650,
        rent: 1300,
        smoking: 'allowed',
        gender: 'female',
        roomid: 'b5ab2ff6-004c-459c-991c-142d63382ead'
      },
      {
        address: "147 Poplar St, Anytown, USA",
        description: "A room with a single bed and a shared bathroom.",
        creditscore: 550,
        rent: 900,
        smoking: "not allowed",
        gender: "male",
        roomid: '41659d6f-2b66-40db-9234-6e8121177e26'
      },
      {
        address: "258 Cedar St, Anytown, USA",
        description: "A luxurious room with a king bed and a private bathroom.",
       creditscore: 750,
        rent: 1400,
        smoking: 'allowed',
        gender: 'female',
        roomid: '77d1dacc-e391-4fc9-af69-271939fe6ead'
      },
      {
        address: "369 Aspen St, Anytown, USA",
        description: "A room with a double bed and a shared bathroom.",
       creditscore: 600,
        rent: 1200,
        smoking: "not allowed",
        gender: "male",
        roomid: 'b863428e-3616-4f91-8c0e-8aa31f07ed32'
      },
      {
        address: "581 Chestnut St, Anytown, USA",
        description: "A spacious room with a queen bed and a private bathroom.",
       creditscore: 500,
        rent: 800,
        smoking: 'allowed',
        gender: 'female',
        roomid: '10086f9b-a174-4892-b94d-5fab06e8338b'
      },
      {
        address: "702 Hemlock St, Anytown, USA",
        description: "A room with a single bed and a shared bathroom.",
       creditscore: 700,
        rent: 1100,
        smoking: "not allowed",
        gender: "male",
        roomid: '98599198-737a-4512-ab7a-69235c978efa'
      }
]

module.exports = { users, userForm, roomForm };