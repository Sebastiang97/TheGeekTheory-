import { ResourceImage } from "../Domain/ResourceImage"
import { ResourceImageService } from "../Domain/ResourceImageService"

export class CreateResourceImage {

    constructor(private resourceImageService: ResourceImageService){}

    execute(imagesUpload: string[], conectId:{[x:string]:string}): Promise<ResourceImage[]>{
        const imgs = imagesUpload.map(async img=> {
            let productImage: ResourceImage ={
                id:"",
                url: img,
                ...conectId,
            }
            const objImages = await this.resourceImageService.create(productImage)
            return objImages
        })
        return Promise.all(imgs)
    }
}