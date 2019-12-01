enum Role {
    Admin = 0,
    Teacher = 1,
    Student = 2
}

interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    role: Role;
}

export default IUser;
