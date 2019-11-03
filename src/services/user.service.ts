import service from ".";
import User from "./model/user";

class UserService {
    private path = "/user";
    public async Login(email: string, password: string) {
        let resp = await service
            .withBody({
                email,
                password
            })
            .post(`${this.path}/login`);
        return resp
    }

    public async CreateUser(user: User) {
        let resp = await service
            .withAuth("")
            .withBody({
                ...user
            })
            .post(`${this.path}/create`);

        return resp
    }
}
