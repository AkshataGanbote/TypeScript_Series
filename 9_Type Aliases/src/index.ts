
// Example 1 

const user = (name : string, id: number|string) =>{
    console.log(`${name}'s id is ${id}`);
}

// The above whole function can be simply written by using type as follows

type StringOrNum = string | number;

const user1 = (name : string, id: StringOrNum) =>{
    console.log(`${name}'s id is ${id}`);
}
 
user1('Aksha', 'US125');


// Example 2

type UserObject = {name: string, id: StringOrNum}

const user2 = (user : UserObject) =>{
    console.log(`${user.name}'s id is ${user.id}`);
}
user1('Amar', 'AD125');

