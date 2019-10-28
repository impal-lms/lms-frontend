import service from ".";
import User from "./model/user";

class UserService {
    private path = "/user";
    public Login(email: string, password: string) {
        service
            .withBody({
                email,
                password
            })
            .post(`${this.path}/login`);
    }

    public CreateUser(user: User) {
        service
            .withAuth("")
            .withBody({
                ...user
            })
            .post(`${this.path}/create`);
    }
}
