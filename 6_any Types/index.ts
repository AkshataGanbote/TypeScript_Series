let age: any = 25;

age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'luigi' };
console.log(age);

let mixed: any[] = [];

mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);

let user: { name: any, age: any };

user = { name: 'yoshi', age: 25 };
console.log(user);

user = { name: 25, age: 'yoshi' };
console.log(user);
