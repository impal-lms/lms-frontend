import service from "./index";
import Task from "./model/task";

export default class TaskService {
    private path = "/task";
    public async CreateTask(task: Task) {
        const resp = await service.withBody(task).post(`${this.path}`);

        return resp;
    }

    public async UpdateTaskById(id: number, task: Task) {
        const resp = await service.withBody(task).put(`${this.path}/${id}`);

        return resp;
    }

    public async DeleteTaskById(id: number) {
        const resp = await service.delete(`${this.path}/${id}`);

        return resp;
    }

    public async GetTaskById(id: number) {
        const resp = await service.get(`${this.path}/${id}`);

        return resp;
    }

    public async GetAllTask(classroomId: number) {
        const resp = await service.get(`${this.path}?classroom_id=${classroomId}`);

        return resp;
    }
}
