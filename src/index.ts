interface User{
    name: string;
    age: number;
}

function sumAge(user1: User, user2: User){
    return user1.age+user2.age;
}

const sumofAge = sumAge({name: 'adarsh', age: 23},{name: 'akshay', age: 27});
console.log(sumofAge);