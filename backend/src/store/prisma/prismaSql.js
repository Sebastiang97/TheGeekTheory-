import { database } from "./db.js"


const create = async (table, object) => {
    return database[table].create({
        data: object
    })
}

const createMany = async (table, objectArray) => {
    try {
        console.log({table,objectArray })
        return database[table].createMany({
            data: objectArray
        })
    }catch(error){
        console.log({error})
    }
}

const get = async (table) => {
    return database[table].findMany({
        include: {urlImage: true}
    })
}

const getUnique = (table, query) =>{
    console.log({table, query})
    return database[table].findMany(query)

}

const getById = async (table, id) => {
    return database[table].findFirst({
        where: {
            id: +id
        }
    })
}

const update = async (table, object) => {
    await database[table].update({
        where: {
            id: object.id
        },
        data: object
    })
}

const updateById = async (table, id, object) => {
    await database[table].update({
        where: {
            id: id
        },
        data: object
    })
}

const deleteById = async (table, id) => {
    return database[table].delete({
        where: {
            id: +id
        }
    })
}

export const db = {
    create,
    createMany,
    get,
    getById,
    update,
    deleteById,
    getUnique,
    updateById
}



