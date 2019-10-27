import dotenv from "dotenv";
import App from "./App";
import HelloController from "./controller/hello.controller";

dotenv.config();

const PORT = +process.env.PORT || 3000;

const app = new App(
    [
        new HelloController()
    ],
    PORT
);

app.listen();
