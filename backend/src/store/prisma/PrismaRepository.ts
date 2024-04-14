import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Repository<T> {
  findById(id: number): Promise<T | null>;
  findAll(options?:any): Promise<T[]>;
  create(data: Partial<T>): Promise<T>;
  update(id: number, data: Partial<T>): Promise<T | null>;
  delete(id: number): Promise<boolean>;
}

export class PrismaRepository<T> implements Repository<T> {
  private model: string;

  constructor(model: string) {
    this.model = model;
  }

  async findById(id: number): Promise<T | null> {
    const model = prisma[this.model as keyof typeof prisma] as any;
    return model.findUnique({ where: { id } });
  }

  async findAll(options:any): Promise<T[]> {
    const model = prisma[this.model as keyof typeof prisma] as any;
    return model.findMany(options);
  }

  async create(data: Partial<T>): Promise<T> {
    const model = prisma[this.model as keyof typeof prisma] as any;
    return model.create({ data });
  }

  async update(id: number, data: Partial<T>): Promise<T | null> {
    const model = prisma[this.model as keyof typeof prisma] as any;
    await model.update({ where: { id }, data });
    return this.findById(id);
  }

  async delete(id: number): Promise<boolean> {
    const model = prisma[this.model as keyof typeof prisma] as any;
    await model.delete({ where: { id } });
    return true;
  }
}