import express from "express";
import { Logger } from "pino";
import IController from "../controller";

class AdminController implements IController {
    public router: express.Router;
    public logger: Logger;
    public path: string = "/admin";

    constructor() {
        this.router = express.Router();

        this.router.use("/", (req, res, next) => {
            if (req.session.role === undefined || req.session.role !== 0) {
                res.redirect("/auth/login");
            }

            next();
        });

        this.router.get("/", this.home);
    }

    public home = (request: express.Request, response: express.Response) => {
        this.logger.info("masuk");
        response.send(`
            <h1>Hello World</h1>
        `);
    }

    public createUser = (request: express.Request, response: express.Response) => {
        response.render("teacher/tugas");
    }

}

export default AdminController;
