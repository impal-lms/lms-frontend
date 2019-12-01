import service from "./index";
import User from "./model/user";

export default class UserService {
    private path = "/user";
    public async Login(email: string, password: string) {
        const resp = await service
            .withBody({
                email,
                password
            })
            .post(`/login`);
        return resp;
    }

    public async CreateUser(user: User, token: string) {
        const resp = await service
            .withAuth(token)
            .withBody({
                ...user
            })
            .post(`${this.path}/create`);

        return resp;
    }

    public async GetUserByID(id: number) {
        const resp = await service.get(`${this.path}/${id}`);
        return resp;
    }
}
