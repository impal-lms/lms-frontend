import service from "./index";
import Classroom from "./model/classroom";

export default class ClassroomService {
    private path = "/classroom";
    public async CreateClassroom(
        label: string,
        teacherId: number,
        token: string
    ) {
        const resp = await service
            .withBody({
                label,
                teacher_id: teacherId
            })
            .post(`${this.path}`);

        return resp;
    }

    public async GetClassroomByID(id: number) {
        const resp = await service.get(`${this.path}/${id}`);
        return resp;
    }

    public async GetAllClassroom() {
        const resp = await service.get(`${this.path}`);
        return resp;
    }

    public async UpdateClassroomByID(id: number, data: Classroom) {
        const resp = await service
            .withBody({
                ...data
            })
            .put(`${this.path}/${id}`);
        return resp;
    }

    public async DeleteClassroomByID(id: number) {
        const resp = await service.delete(`${this.path}/${id}`);
        return resp;
    }

    public async AddStudentToClassroomByID(id: number, studentId: number) {
        const resp = await service
            .withBody({
                student_id: studentId
            })
            .put(`${this.path}/${id}/add-student`);
        return resp;
    }

    public async DeleteStudentFromClassroomByID(id: number, studentId: number) {
        const resp = await service
            .withBody({
                student_id: studentId
            })
            .put(`${this.path}/${id}/delete-student`);
        return resp;
    }

    public async GetAllClassroomByUserId(userId: number) {
        const resp = await service.put(`${this.path}/user/${userId}`);
        return resp;
    }
}
