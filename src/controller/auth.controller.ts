import express from "express";
import { Logger } from "pino";
import IController from "../controller";
import UserService from "../services/user.service";

class AuthController implements IController {
    public router: express.Router;
    public logger: Logger;
    public path: string = "/auth";
    private service: UserService;

    constructor() {
        this.router = express.Router();

        this.router.get(`${this.path}/login`, this.login);
        this.router.post(`${this.path}/login`, this.auth);

        this.service = new UserService();
    }

    public login = (_: express.Request, response: express.Response) => {
        response.render("login", {
            err: undefined
        });
    }

    public auth = (request: express.Request, response: express.Response) => {
        const email = request.body.email;
        const password = request.body.password;
        this.service.Login(
            email,
            password
        )
            .then((res) => {
                response.send(res.data)

                this.service.GetUserByID(res.data.id)
                    .then(res => {

                    })
            })
            .catch((err) => {
                response.render("login", {
                    err
                });
            });
    }
}

export default AuthController;
