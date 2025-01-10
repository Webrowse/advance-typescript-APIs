interface User{
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

function updatedUser(updatedProps: UpdateProps){
    return {...updatedProps};
}


