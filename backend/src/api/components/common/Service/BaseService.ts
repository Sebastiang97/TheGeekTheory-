import { Base } from "../Model/Base";


export interface BaseService <T extends Base>{
    
    getById(id: string): T | null;
    create(resource: T): T | null;
    update(resource: T): T | null;
    delete(id: string): void;
}