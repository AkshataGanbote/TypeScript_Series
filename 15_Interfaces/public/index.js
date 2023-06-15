const xyz = {
    name: 'Gauri',
    age: 45,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent ' + amount);
        return amount;
    }
};
console.log(xyz);
const greet = (person) => {
    console.log(`Hello ${person.name}`);
    console.log(`Your age is ${person.age}`);
    person.speak('Hello! Nice to meet you!'); // As speak already returning console statement - string type
    person.spend(5000); // As spend already returning console statement - number type 
};
// greet({name: 'Gaju'}); // Error as it is not IPerson type
greet(xyz);
export {};
