import { CategoryProductService } from "../Domain/CategoryProductService";

export class GetProductsByCategoryId {
    constructor(private categoryProductService: CategoryProductService){

    }

    execute(categoryId: string){
      return this.categoryProductService.findAll({
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