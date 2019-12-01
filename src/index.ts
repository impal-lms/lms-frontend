import dotenv from "dotenv";
import App from "./app";
import AdminController from "./controller/admin.controller";
import AuthController from "./controller/auth.controller";
import HelloController from "./controller/hello.controller";
import TeacherController from "./controller/teacher.controller";

dotenv.config();

const PORT = +process.env.PORT || 4000;

const app = new App(
    [
        new HelloController(),
        new AuthController(),
        new TeacherController(),
        new AdminController(),
    ],
    PORT
);

app.listen();

const BASE_URL = process.env.BASE_URL || "localhost:3000";
export default BASE_URL;
