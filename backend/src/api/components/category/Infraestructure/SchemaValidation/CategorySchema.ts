import { z } from "zod";

export const imageSchema = z.object({
    id: z.string(),
    url: z.string(),
    categoryId: z.number()
})

export const categorySchema = z.object({
    categoryName: z.string(),
})