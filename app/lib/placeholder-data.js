const users = [
    {
        email: "john.doe@example.com",
        password: "password1",
        firstname: "John",
        lastname: "Doe",
        gender: "male",
        age: 23
      },
      {
        email: "jane.doe@example.com",
        password: "password2",
        firstname: "Jane",
        lastname: "Doe",
        gender: 'female',
        age: 25
      },
      {
        email: "alice.smith@example.com",
        password: "password3",
        firstname: "Alice",
        lastname: "Smith",
        gender: 'female',
        age: 58
      },
      {
        email: "bob.johnson@example.com",
        password: "password4",
        firstname: "Bob",
        lastname: "Johnson",
        gender: "male",
        age: 55
      },
      {
        email: "charlie.brown@example.com",
        password: "password5",
        firstname: "Charlie",
        lastname: "Brown",
        gender: "male",
        age: 58
      },
      {
        email: "snoopy@example.com",
        password: "password6",
        firstname: "Snoopy",
        lastname: "The Dog",
        gender: "male",
        age: 44
      },
      {
        email: "lucy@example.com",
        password: "password7",
        firstname: "Lucy",
        lastname: "Van Pelt",
        gender: 'female',
        age: 32
      },
      {
        email: "linus.vanpelt@example.com",
        password: "password8",
        firstname: "Linus",
        lastname: "Van Pelt",
        gender: "male",
        age: 21
      },
      {
        email: "peppermintpatty@example.com",
        password: "password9",
        firstname: "Peppermint Patty",
        lastname: "",
        gender: 'female',
        age: 20
      },
      {
        email: "marcie@example.com",
        password: "password10",
        firstname: "Marcie",
        lastname: "Rodd",
        gender: 'female',
        age: 18
      },
      {
        email: "fred@example.com",
        password: "password11",
        firstname: "Fred",
        lastname: "Jones",
        gender: "male",
        age: 19

      },
      {
        email: "velma@example.com",
        password: "password12",
        firstname: "Velma",
        lastname: "Dinkley",
        gender: 'female',
        age: 19
      },
      {
        email: "daphne@example.com",
        password: "password13",
        firstname: "Daphne",
        lastname: "Blake",
        gender: 'female',
        age: 60
      },
      {
        email: "shaggy@example.com",
        password: "password14",
        firstname: "Shaggy",
        lastname: "Smith",
        gender: "male",
        age: 49
      },
      {
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
        roommateid: 1
      },
      {
        bio: "I am a medical student who is looking for a room to share. I enjoy cooking and watching movies in my free time.",
        budget: 1200,
        preferredgender: 'female',
        smokes: "yes",
        roommateid: 2
      },
      {
        bio: "I am an art student who is looking for a room to share. I enjoy painting and traveling in my free time.",
        budget: 800,
        preferredgender: "male",
        smokes: "no",
        roommateid: 3
      },
      {
        bio: "I am a law student who is looking for a room to share. I enjoy reading law books and playing chess in my free time.",
        budget: 1500,
        preferredgender: 'female',
        smokes: "yes",
        roommateid: 4
      },
      {
        bio: "I am a university teacher who is looking for a room to share. I enjoy teaching and playing the piano in my free time.",
        budget: 1100,
        preferredgender: "male",
        smokes: "no",
        roommateid: 5
      },
      {
        bio: "I am a professor who is looking for a room to share. I enjoy researching and gardening in my free time.",
        budget: 1300,
        preferredgender: 'female',
        smokes: "yes",
        roommateid: 6
      },
      {
        bio: "I am a university librarian who is looking for a room to share. I enjoy reading and doing yoga in my free time.",
        budget: 900,
        preferredgender: "male",
        smokes: "no",
        roommateid: 7
      },
      {
        bio: "I am a university janitor who is looking for a room to share. I enjoy gardening and playing the guitar in my free time.",
        budget: 1400,
        preferredgender: 'female',
        smokes: "yes",
        roommateid: 8
      },
      {
        bio: "I am a university receptionist who is looking for a room to share. I enjoy painting and dancing in my free time.",
        budget: 1200,
        preferredgender: "male",
        smokes: "no",
        roommateid: 9
      },
      {
        bio: "I am a university counselor who is looking for a room to share. I enjoy traveling and playing the violin in my free time.",
        budget: 800,
        preferredgender: 'female',
        smokes: "yes",
        roommateid: 10
      },
      {
        bio: "I am a university registrar who is looking for a room to share. I enjoy reading and playing the flute in my free time.",
        budget: 1500,
        preferredgender: "male",
        smokes: "no",
        roommateid: 11
      },
      {
        bio: "I am a university advisor who is looking for a room to share. I enjoy teaching and playing the cello in my free time.",
        budget: 1100,
        preferredgender: 'female',
        smokes: "yes",
        roommateid: 12
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
        roomid: 1
      },
      {
        address: "456 Oak St, Anytown, USA",
        description: "A cozy room with a double bed and a shared bathroom.",
        creditscore: 600,
        rent: 1200,
        smoking: 'allowed',
        gender: 'female',
        roomid: 1
      },
      {
        address: "789 Pine St, Anytown, USA",
        description: "A room with a single bed and a shared bathroom.",
        creditscore: 500,
        rent: 800,
        smoking: "not allowed",
        gender: "male",
        roomid: 3
      },
      {
        address: "321 Maple St, Anytown, USA",
        description: "A luxurious room with a king bed and a private bathroom.",
        creditscore: 800,
        rent: 1500,
        smoking: 'allowed',
        gender: 'female',
        roomid: 4
      },
      {
        address: "654 Willow St, Anytown, USA",
        description: "A room with a double bed and a shared bathroom.",
        creditscore: 700,
        rent: 1100,
        smoking: "not allowed",
        gender: "male",
        roomid: 5
      },
      {
        address: "987 Birch St, Anytown, USA",
        description: "A spacious room with a queen bed and a private bathroom.",
        creditscore: 650,
        rent: 1300,
        smoking: 'allowed',
        gender: 'female',
        roomid: 6
      },
      {
        address: "147 Poplar St, Anytown, USA",
        description: "A room with a single bed and a shared bathroom.",
        creditscore: 550,
        rent: 900,
        smoking: "not allowed",
        gender: "male",
        roomid: 7
      },
      {
        address: "258 Cedar St, Anytown, USA",
        description: "A luxurious room with a king bed and a private bathroom.",
       creditscore: 750,
        rent: 1400,
        smoking: 'allowed',
        gender: 'female',
        roomid: 8
      },
      {
        address: "369 Aspen St, Anytown, USA",
        description: "A room with a double bed and a shared bathroom.",
       creditscore: 600,
        rent: 1200,
        smoking: "not allowed",
        gender: "male",
        roomid: 9
      },
      {
        address: "581 Chestnut St, Anytown, USA",
        description: "A spacious room with a queen bed and a private bathroom.",
       creditscore: 500,
        rent: 800,
        smoking: 'allowed',
        gender: 'female',
        roomid: 10
      },
      {
        address: "702 Hemlock St, Anytown, USA",
        description: "A room with a single bed and a shared bathroom.",
       creditscore: 700,
        rent: 1100,
        smoking: "not allowed",
        gender: "male",
        roomid: 11
      }
]

module.exports = { users, userForm, roomForm };