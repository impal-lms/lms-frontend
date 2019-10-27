import express from "express";
import * as pinoLogger from "express-pino-logger";
import pino from "pino";
import Controller from "./controller";

const logger = pino();

class App {
    private server: express.Application;

    constructor(
        private controllers: Controller[],
        private port: number
    ) {
        this.server = express();
        this.server.set("views", __dirname + "/views");
        this.server.set("view engine", "ejs");

        this.initMiddleware();
        this.initRoute();
    }

    public listen() {
        this.server.listen(this.port,
            () => logger.info(`listening on port ${this.port}`));
    }

    private initMiddleware() {
        this.server.use(pinoLogger.default());
    }

    private initRoute() {
        for (const controller of this.controllers) {
            logger.info(controller.path);
            this.server.use("/", controller.router);
        }
    }
}

export default App;
