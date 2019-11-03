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
                request.session.token = res.data.token;
                request.session.userId = res.data.id;
                request.session.role = res.data.role;
                request.session.cookie.expires = new Date(Date.now() + 3600 * 24);

                const role = res.data.role;
                switch (role) {
                    case 0:
                        response.redirect("/admin");
                        break;
                    case 1:
                        response.redirect("/teacher");
                        break;
                    case 2:
                        response.redirect("/student");
                    default:
                        break;
                }
            })
            .catch((err) => {
                response.render("login", {
                    err
                });
            });
    }
}

export default AuthController;
