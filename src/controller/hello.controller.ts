import * as express from "express";
import { Logger } from "pino";
import IController from "../controller";

class HelloController implements IController {
    public router: express.Router;
    public path: string = "/hello";
    public logger: Logger;

    constructor() {
        this.router = express.Router();

        this.router.get("/:name", this.sayHello);
    }

    public sayHello(request: express.Request, response: express.Response) {
        const name = request.params.name;
        response.render("hello_view", {
            name
        });
    }
}

export default HelloController;
