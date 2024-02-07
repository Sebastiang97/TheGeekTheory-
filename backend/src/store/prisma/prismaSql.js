import { database } from "./db.js"


const create = async (table, object) => {
    return database[table].create({
        data: object
    })
}

const get = async (table) => {
    return database[table].findMany()
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
    get,
    getById,
    update,
    deleteById,
    updateById
}



