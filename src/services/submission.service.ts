import service from "./index";
import Submission from "./model/submission";

export default class SubmissionService {
    private path = "/submission";
    public async CreateSubmission(submission: Submission) {
        const resp = await service.withBody(submission).post(`${this.path}`);

        return resp;
    }

    public async UpdateSubmissionById(id: number, submission: Submission) {
        const resp = await service.withBody(submission).put(`${this.path}/${id}`);

        return resp;
    }

    public async DeleteSubmissionById(id: number) {
        const resp = await service.delete(`${this.path}/${id}`);

        return resp;
    }

    public async GetSubmissionById(id: number) {
        const resp = await service.get(`${this.path}/${id}`);

        return resp;
    }

    public async GetAllSubmission(classroomId: number) {
        const resp = await service.get(`${this.path}?classroom_id=${classroomId}`);

        return resp;
    }
}
