import { db } from "../../../store/prisma/prismaSql.js"


const list = async (table) => {
    try {
        return db.get(table)
    } catch (error) {
        return error
    }
}

const getById = async (table, id) => {

    try {
        return db.getById(table, parseInt(id))
    } catch (error) {
        return error
    }
}

const create = async (table, object) => {
    try {
        return db.create(table, object)
    } catch (error) {
        return error
    }
}

const updateById = async (table, id, object) => {
    try {
        return db.updateById(table, id, {
            ...object,
            id: parseInt(id),
        })
    } catch (error) {
        return error
    }

}

const deleteById = async (table, id) => {
    try {
        return db.deleteById(table, parseInt(id))
    } catch (error) {
        return error
    }
}

export const baseService = {
    list,
    getById,
    create,
    updateById,
    deleteById
}