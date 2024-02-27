import { Client, client } from "@/libs/fetch/client"

export const baseService = (url:string) =>{

    let http: Client = client

    let list = <T>(): Promise<T[]> =>{
        return http(url).get()
            .then(res => res.json() as Promise<T[]>)
            .catch(error=> {
                throw error
            })
    }

    let getById = <T>(id:string): Promise<T> =>{
        return http(url+id).get()
            .then(res => res.json() as Promise<T>)
            .catch(error=> {
                throw error
            })
    }

    let update = <T>(id:string): Promise<T> =>{
        return http(url+id).put()
            .then(res => res.json() as Promise<T>)
            .catch(error=> {
                throw error
            })
    }

    let remove = <T>(id:string): Promise<T> =>{
        return http(url+id).remove()
            .then(res => res.json() as Promise<T>)
            .catch(error=> {
                throw error
            })
    }

    return {
        list,
        getById,
        update,
        remove,
    }
}