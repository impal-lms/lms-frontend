import service from "./index";
import Material from "./model/material";

export default class MaterialService {
    private path = "/material";
    public async CreateMaterial(material: Material) {
        const resp = await service.withBody(material).post(`${this.path}`);

        return resp;
    }

    public async UpdateMaterialById(id: number, material: Material) {
        const resp = await service.withBody(material).put(`${this.path}/${id}`);

        return resp;
    }

    public async DeleteMaterialById(id: number) {
        const resp = await service.delete(`${this.path}/${id}`);

        return resp;
    }

    public async GetMaterialById(id: number) {
        const resp = await service.get(`${this.path}/${id}`);

        return resp;
    }

    public async GetAllMaterial(classroomId: number) {
        const resp = await service.get(`${this.path}classroom_id=${classroomId}`);

        return resp;
    }
}
