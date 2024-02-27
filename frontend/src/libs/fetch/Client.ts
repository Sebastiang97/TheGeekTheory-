export type Client = {
    (url:string):{
        get        : ()=> Promise<Response>
        put        : ()=> Promise<Response>
        remove     : ()=> Promise<Response>
    }
}

export const client: Client = (url:string) => {
    let get = (): Promise<Response> =>{
        return fetch(url)
    }

    let put = (): Promise<Response> =>{
        return fetch(url)
    }

    let remove = (): Promise<Response> =>{
        return fetch(url)
    }

    return {
        get,
        put,
        remove
    }
}