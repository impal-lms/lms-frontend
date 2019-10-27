import * as express from "express";
import IController from "../controller";

class HelloController implements IController {
    public router: express.Router;
    public path: string = "/hello";

    constructor() {
        this.router = express.Router();

        this.router.get(`${this.path}/:name`, this.sayHello);
    }

    public sayHello(request: express.Request, response: express.Response) {
        const name = request.params.name;
        response.render("hello", {
            name
        });
    }
}

export default HelloController;
