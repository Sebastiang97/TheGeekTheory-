import { ResourceImage } from "../Domain/ResourceImage"
import { ResourceImageService } from "../Domain/ResourceImageService"

export class CreateResourceImage {

    constructor(private resourceImageService: ResourceImageService){}

    execute(imagesUpload: string[], conectId:{[x:string]:string}): Promise<ResourceImage[]>{
        const imgs = imagesUpload.map(async img=> {
            let resourceImage: ResourceImage = {} as ResourceImage
            resourceImage.url = img 
            resourceImage = {
                ...conectId,
                ...resourceImage
            }
            const objImages = await this.resourceImageService.create(resourceImage)
            return objImages
        })
        return Promise.all(imgs)
    }
}