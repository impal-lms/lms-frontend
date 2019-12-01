import bodyParser from "body-parser";
import express from "express";
import * as pinoLogger from "express-pino-logger";
import session from "express-session";
import pino from "pino";

import Controller from "./controller";

const logger = pino();

class App {
    private server: express.Application;

    constructor(private controllers: Controller[], private port: number) {
        this.server = express();

        this.initMiddleware();
        this.initRoute();
    }

    public listen() {
        this.server.listen(this.port, () =>
            logger.info(`listening on port ${this.port}`)
        );
    }

    private initMiddleware() {
        this.server.use(pinoLogger.default());
        this.server.use(bodyParser.urlencoded({ extended: true }));
        this.server.set("views", __dirname + "/views");
        this.server.set("view engine", "ejs");
        this.server.use("/assets", express.static(__dirname + "/assets"));
        this.server.use(
            session({
                secret: "pokoknya rahasia"
            })
        );
    }

    private initRoute() {
        logger.info("hello world");
        for (const controller of this.controllers) {
            logger.info(controller.path);
            this.server.use(controller.path, controller.router);
            controller.logger = logger;
        }

        this.server.get("/", (req, res) => {
            res.redirect("/auth/login");
        });
    }
}

export default App;
