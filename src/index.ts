// interface User{
//     id: string;
//     name: string;
//     age: number;
//     email: string;
//     password: string;
// }

// // Pick let you choose a subtype of User
// type UpdateProps = Pick<User, 'name' | 'age' | 'email'>


// //Partial makes each field optional
// function updatedUser(updatedProps: Partial<UpdateProps>){
//     return {...updatedProps};
// }

// const result = updatedUser({name: 'John', age:12});
// console.log(result);

//Readonly properties
// type User = {
//     readonly name: string;
//     email: string;
// }

// const user: User = { // you can write Readonly<User>
//     name: 'Adarsh',
//     email: 'old@email.com'
// }

// user.name = 'John'; //not allowed as it is mentioned Read-only
// user.email = 'new@email.com'; // this is allowed

// =========Records to generate key-value-pair=================
// type Users = Record<string, {age:number, name:string}>;

// const user:Users = {
//     '1': {age: 25, name: 'John'},
//     '2': {age: 30, name: 'Jane'},
//     '3': {age: 28, name: 'Mike'},
// }

// //========= Map to generate key-value pair===========
// type User = {
//     age: number,
//     name: string
// }

// type UserMap = Map<string, User>;
// // Both above and below are the same type.
// type UserMap2 = Map<string, {age:number, name:string}>;

// const userMap = new Map([
//     ['1', {age: 25, name: 'John'}],
//     ['2', {age: 30, name: 'Jane'}],
//     ['3', {age: 28, name: 'Mike'}],
// ])

// //==========another way to write 
// // ======Map gives you the access to get, set and delete. 
// const userMap2 = new Map();
// userMap2.set('1', {age: 25, name: 'John'});

// const getValueof1 = userMap2.get('2');

// userMap2.delete('1');

// ==========================  Exclude a bunch of literals  ================================

type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove' 

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`);
};

handleEvent('mousemove');