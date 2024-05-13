export type Client = {
    (url:string, opt?: any):{
        get        : ()=> Promise<Response>
        put        : ()=> Promise<Response>
        postFile       : (obj:FormData)=> Promise<Response>
        remove     : ()=> Promise<Response>
    }
}

export const client: Client = (url:string, opt?: any) => {
    let get = (): Promise<Response> =>{
        return fetch(url, {
            credentials: "include",
            headers: {
                Accept: "application/json",
                "content-Type": "application/json",
                "Acces-Control-Allow-Credentials": true,
            },
            ...opt
        })
    }

    let put = (): Promise<Response> =>{
        return fetch(url, opt)
    }

    let postFile = (obj:FormData): Promise<Response> =>{
        return fetch(url,{
            method: 'POST',
            body: obj,
        })
    }

    let remove = (): Promise<Response> =>{
        return fetch(url, opt)
    }

    return {
        get,
        postFile,
        put,
        remove
    }
}