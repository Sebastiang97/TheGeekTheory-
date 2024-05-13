import { Client, client } from "@/libs/fetch/Client"

export const baseService = (url:string, opt?: any) =>{

    let http: Client = client

    let list = <T>(): Promise<T[]> =>{
        return http(url, opt).get()
            .then(res => res.json() as Promise<T[]>)
            .catch(error=> {
                throw error
            })
    }

    let get = <T>(): Promise<T> =>{
        return http(url, opt).get()
            .then(res => res.json() as Promise<T>)
            .catch(error=> {
                throw error
            })
    }
    

    let getById = <T>(id:string): Promise<T> =>{
        return http(url+id, opt).get()
            .then(res => res.json() as Promise<T>)
            .catch(error=> {
                throw error
            })
    }

    let createFile = <T>(object:FormData): Promise<T> =>{
        return http(url, opt).postFile(object)
            .then(res => res.json() as Promise<T>)
            .catch(error=> {
                console.log({error})
                throw error
            })
    }

    let update = <T>(id:string): Promise<T> =>{
        return http(url+id, opt).put()
            .then(res => res.json() as Promise<T>)
            .catch(error=> {
                throw error
            })
    }

    let remove = <T>(id:string): Promise<T> =>{
        return http(url+id, opt).remove()
            .then(res => res.json() as Promise<T>)
            .catch(error=> {
                throw error
            })
    }

    return {
        list,
        get,
        createFile,
        getById,
        update,
        remove,
    }
}