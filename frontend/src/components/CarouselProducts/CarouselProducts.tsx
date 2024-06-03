 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Props {
  imgs: string[]
  getCurrentImage: (imgs:string)=> void
}
 
export function CarouselProducts({imgs, getCurrentImage}:Props) {
  return (
    <Carousel
      
      className="w-full "
    >
      <CarouselContent>
        {imgs.map((img, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3" onClick={() => getCurrentImage(img)}>
            <div className="p-1">
                <div className="flex aspect-square items-center justify-center p-2">
                  {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                  <img src={img} alt="asd" />
                </div>
              {/* <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-orange-600 text-white"/>
      <CarouselNext className="bg-orange-600 text-white"/>
    </Carousel>
  )
}