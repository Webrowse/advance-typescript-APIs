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

// =========Records =================
type Users = Record<string, {age:number, name:string}>;

const user:Users = {
    '1': {age: 25, name: 'John'},
    '2': {age: 30, name: 'Jane'},
    '3': {age: 28, name: 'Mike'},
}