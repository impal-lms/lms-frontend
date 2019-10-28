enum Role {
    Admin = 0,
    Teacher = 1,
    Student = 2
}

interface IUser {
    name: string;
    email: string;
    password: string;
    role: Role;
}

export default IUser;
