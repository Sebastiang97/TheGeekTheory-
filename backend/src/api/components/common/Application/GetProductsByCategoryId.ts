import { SubCategoryProductService } from "../Domain/SubCategoryProductService";

export class GetProductsByCategoryId {
    constructor(private SubCategoryProductService: SubCategoryProductService){

    }

    execute(categoryId: string){
      return this.SubCategoryProductService.findAll({
        where: {
          categoryId: categoryId,
        },
        select: {
          product: {
            select: {
              id: true,
              name: true,
              price: true,
              categoryId: true,
              urlImage: true,
            },
          },
        },
      })
    }
}