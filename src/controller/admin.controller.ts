import express from "express";
import { Logger } from "pino";
import IController from "../controller";
import UserService from "../services/user.service";

class AdminController implements IController {
    public router: express.Router;
    public logger: Logger;
    public path: string = "/admin";

    public users: UserService;

    constructor() {
        this.router = express.Router();

        this.users = new UserService();

        this.router.use("/", (req, res, next) => {
            if (req.session.role === undefined || req.session.role !== 0) {
                res.redirect("/auth/login");
            }

            next();
        });
        this.router.use(
            "/assets",
            express.static(__dirname + "/views/teacher/assets")
        );

        this.router.get("/", this.ManageUser);
        this.router.get("/users", this.ManageUser);
    }

    public ManageUser = (
        request: express.Request,
        response: express.Response
    ) => {
        this.users.GetAllUser()
            .then((res) => {
                this.logger.info(res.data.data);
                const admin = [];
                const student = [];
                const teacher = [];
                this.logger.info(res);
                for (const entry of res.data.data) {
                    this.logger.info(entry);
                    switch (entry.role) {
                        case 0:
                            admin.push(entry);
                            break;
                        case 1:
                            teacher.push(entry);
                            break;
                        case 2:
                            student.push(entry);
                            break;

                        default:
                            break;
                    }
                }
                this.logger.info(admin);
                response.render("admin/manage_user", {
                    admin,
                    err: undefined,
                    student,
                    teacher,
                });

            })
            .catch((err) => {
                response.render("admin/manage_user", {
                    admin: [],
                    err,
                    student: [],
                    teacher: []
                });
            });
    }

    public createUser = (
        request: express.Request,
        response: express.Response
    ) => {
        response.render("teacher/tugas");
    }
}

export default AdminController;
