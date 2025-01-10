"use strict";
// interface User{
//     id: string;
//     name: string;
//     age: number;
//     email: string;
//     password: string;
// }
const userMap = new Map([
    ['1', { age: 25, name: 'John' }],
    ['2', { age: 30, name: 'Jane' }],
    ['3', { age: 28, name: 'Mike' }],
]);
//==========another way to write 
// ======Map gives you the access to get, set and delete. 
const userMap2 = new Map();
userMap2.set('1', { age: 25, name: 'John' });
const getValueof1 = userMap2.get('2');
userMap2.delete('1');
