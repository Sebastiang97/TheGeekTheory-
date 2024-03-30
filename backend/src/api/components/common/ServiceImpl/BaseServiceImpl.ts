import { Base } from "../Model/Base";
import { BaseService } from "../Service/BaseService";




export class BaseServiceImpl<M extends Base> implements BaseService<M> {
    getById(id: string): M | null {
        throw new Error("Method not implemented.");
    }
    create(resource: M): M | null {
        throw new Error("Method not implemented.");
    }
    update(resource: M): M | null {
        throw new Error("Method not implemented.");
    }
    delete(id: string): boolean {
        throw new Error("Method not implemented.");
    }
    
}