import { Router } from "express";
import { Logger } from "pino";

interface IController {
    path: string;
    router: Router;
    logger: Logger;
}

export default IController;
