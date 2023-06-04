"use strict";
// Example 1 
const user = (name, id) => {
    console.log(`${name}'s id is ${id}`);
};
const user1 = (name, id) => {
    console.log(`${name}'s id is ${id}`);
};
user1('Aksha', 'US125');
const user2 = (user) => {
    console.log(`${user.name}'s id is ${user.id}`);
};
user1('Amar', 'AD125');
