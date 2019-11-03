import dotenv from "dotenv";
import App from "./app";
import AuthController from "./controller/auth.controller";
import HelloController from "./controller/hello.controller";
import TeacherController from "./controller/teacher.controller";

dotenv.config();

const PORT = +process.env.PORT || 3000;

const app = new App(
    [
        new HelloController(),
        new AuthController(),
        new TeacherController(),
    ],
    PORT
);

app.listen();
