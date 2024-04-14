import { z } from "zod";

export const imageSchema = z.object({
    id: z.string(),
    url: z.string(),
    categoryId: z.number()
})

export const productDTOSchema = z.object({
    
    name: z.string(),
    price: z.number().refine(value => Number.isFinite(value) && !Number.isInteger(value)),
    categoryId: z.number(),
    // urlImage: z.array(imageSchema)
})