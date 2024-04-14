

export interface BaseService <M>{
    
    findById(id: number): Promise<M | null>
    findAll(options?: any): Promise<M[]>
    create(resource: M): Promise<M>
    update(id: number, data: Partial<M>): Promise<M | null> 
    delete(id: number): void
}