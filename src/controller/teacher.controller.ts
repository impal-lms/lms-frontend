import express from "express";
import { Logger } from "pino";
import IController from "../controller";

class TeacherController implements IController {
    public router: express.Router;
    public logger: Logger;
    public path: string = "/teacher";

    constructor() {
        this.router = express.Router();

        this.router.use(`${this.path}`, (req, res, next) => {
            if (req.session.role === undefined || req.session.role !== 1) {
                res.redirect("/auth/login");
            }

            next();
        });

        this.router.get(`${this.path}/`, this.materi);
        this.router.get(`${this.path}/materi`, this.materi);
        this.router.get(`${this.path}/materi/upload`, this.uploadMateri);

        this.router.get(`${this.path}/task`, this.task);
    }

    public task = (request: express.Request, response: express.Response) => {
        response.render("teacher/tugas");
    }

    public materi = (request: express.Request, response: express.Response) => {
        response.render("teacher/materi");
    }

    public uploadMateri = (request: express.Request, response: express.Response) => {
        response.render("teacher/materi-upload");
    }
}

export default TeacherController;
