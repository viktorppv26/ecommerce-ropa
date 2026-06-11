"use client"

import { useRouter } from "next/navigation"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export const dataCarouselTop = [
  {
    id: 1,
    title: "Envíos en 24/48 h",
    description: "Como cliente VIP, tus envíos son gratuitos.",
    link: "#"
  },
  {
    id: 2,
    title: "Consigue hasta un 25% en compras superiores a $1,500",
    description: "20% al gastar $1,500 o 25% al gastar $2,500. Usa el código: VRSTILE",
    link: "#"
  },
  {
    id: 3,
    title: "Devoluciones y entregas gratuitas",
    description: "Como cliente, tienes envíos y devoluciones gratis en compras mayores a $800.",
    link: "#"
  },
  {
    id: 4,
    title: "Comprar novedades",
    description: "Todas las novedades de nuestra colección de verano con un 50% de descuento.",
    link: "#"
  }
]

const CarouselTextBanner = () => {
  const router = useRouter()

  return (
    <div className="bg-gray-200 dark:bg-primary">
      <Carousel
        className="w-full max-w-4xl mx-auto"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {dataCarouselTop.map(({ id, title, description, link }) => (
            <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
              <Card className="shadow-none border-none bg-transparent">
                <CardContent className="flex flex-col justify-center items-center text-center p-2">
                  <p className="sm:text-lg text-wrap dark:text-secondary font-bold">{title}</p>
                  <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default CarouselTextBanner