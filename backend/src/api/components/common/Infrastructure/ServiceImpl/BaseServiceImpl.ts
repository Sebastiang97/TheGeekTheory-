
import { PrismaRepository } from "../../../../../store/prisma/PrismaRepository";
import { BaseService } from "../../Domain/BaseService";




export abstract class BaseServiceImpl<M> implements BaseService<M> {
    private repository: PrismaRepository<M>;

    constructor(prismaRepository: PrismaRepository<M>) {
        this.repository = prismaRepository
    }

    async findById(id: number): Promise<M | null> {
        return this.repository.findById(id);
    }

    async findAll(options:any): Promise<M[]> {
        return this.repository.findAll(options);
    }

    async create(data: Partial<M>): Promise<M> {
        return this.repository.create(data);
    }

    async update(id: number, data: Partial<M>): Promise<M | null> {
        return this.repository.update(id, data);
    }

    async delete(id: number): Promise<boolean> {
        return this.repository.delete(id);
    }

}