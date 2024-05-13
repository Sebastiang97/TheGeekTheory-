import { CategoryProduct } from "@prisma/client";
import { BaseServiceImpl } from "./ServiceImpl/BaseServiceImpl";
import { CategoryProductService } from "../Domain/CategoryProductService";

export class CategoryProductServiceImpl extends BaseServiceImpl<CategoryProduct> implements CategoryProductService{
}