

export interface BaseService <M extends { id: string }>{
    
    findById(id: string, options?: any): Promise<M | null>
    findByProp(options?: any): Promise<M | null>
    findAll(options?: any): Promise<M[]>
    create(resource: M): Promise<M>
    update(id: string, data: Partial<M>): Promise<M | null>
    updateMany(data: Array<Partial<M & { id: string }>>): Promise<M[] | null> 
    delete(id: string): void
}