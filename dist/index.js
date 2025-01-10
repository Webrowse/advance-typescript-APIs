"use strict";
function sumAge(user1, user2) {
    return user1.age + user2.age;
}
const sumofAge = sumAge({ name: 'adarsh', age: 23 }, { name: 'akshay', age: 27 });
console.log(sumofAge);
