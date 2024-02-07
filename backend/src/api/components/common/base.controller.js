import { baseService } from "./base.service.js"

const list = async (req, res, next, table) => {
    try {
        const obj = await baseService.list(table)
        return res.status(200).json(obj)
    } catch (error) {
        return res.status(400).json({ error })
    }
}

const get = async (req, res, next, table) => {

    try {
        const id = req.params.id;
        const obj = await baseService.getById(table, parseInt(id))
        if (!obj) {
            return res.status(400).json({ error: "that id isn't exists" })
        }
        return res.status(200).json(obj)
    } catch (error) {
        return res.status(400).json({ error })
    }
}

const create = async (req, res, next, table) => {
    try {
        const obj = req.body
        const print = await baseService.create(table, {
            ...obj
        })
        return res.status(200).json(print)
    } catch (error) {
        return res.status(400).json({ error })
    }
}

const update = async (req, res, next, table) => {

    try {
        let obj = req.body
        const id = req.params.id
        await baseService.updateById(table, parseInt(id), obj)
        return res.status(200).json(obj)
    } catch (error) {
        console.log({ error })
        return res.status(400).json({ error })
    }

}

const deletebyId = async (req, res, next, table) => {
    try {
        const id = req.params.id;
        const obj = await baseService.deleteById(table, parseInt(id))
        return res.status(200).json(obj)
    } catch (error) {
        console.log(error)
        return res.status(400).json({ error })
    }
}

export const baseController = {
    list,
    get,
    create,
    update,
    deletebyId
}