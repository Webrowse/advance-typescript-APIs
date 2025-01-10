"use strict";
function updatedUser(updatedProps) {
    return Object.assign({}, updatedProps);
}
const result = updatedUser({ name: 'John', age: 12 });
console.log(result);
