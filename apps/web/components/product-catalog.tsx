"use client"

import Image from "next/image"
import Link from "next/link"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel"

import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"

const products = [
  { name: "NS Lycra Fabric", image: "/product-images/ns-lycra-fabric/ns-lycra-fabric-500x500.webp", slug: "ns-lycra-fabric" },
  { name: "Dry Fit Fabric", image: "/product-images/dryfit/super-poly-fabric-500x500.webp", slug: "dryfit-fabric" },
  { name: "Polyester Interlock", image: "/product-images/interlock/polyester-interlock-fabric-500x500.webp", slug: "interlock-fabric" },
  { name: "Knitted Mesh Fabric", image: "/product-images/mesh/karera-plain-fabric-500x500.webp", slug: "knitted-mesh" },
  { name: "Micro Polyester", image: "/product-images/micro-poly/micro-polyester-fabric-500x500.webp", slug: "micro-polyester" },
]


export default function ProductCatalog() {
  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold">
          Our Fabrics Collection
        </h2>

        <p className="text-center mt-4 text-muted-foreground text-lg">
          High quality fabrics crafted for garments, sportswear, and global brands.
        </p>

        {/* CAROUSEL */}
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative overflow-visible"
          >
            <CarouselContent className="pl-4">
              {products.map((product, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-1/1 sm:basis-1/2 md:basis-1/3"
                >
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-lg text-center">{product.name}</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4 flex flex-col flex-1">
                      <Image
                        unoptimized
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={300}
                        className="rounded-lg object-cover w-full h-40"
                      />

                      {/* <Button asChild className="mt-auto w-full">
                        <Link href={`/products/${product.slug}`}>
                          View Details
                        </Link>
                      </Button> */}
                      <Button asChild className="w-full">
                          <Link href="https://wa.me/919988940158" target="_blank">
                              Request Best Quote
                          </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* ARROWS — FIXED & NOW VISIBLE */}
            <CarouselPrevious className="hidden sm:flex left-2 bg-background border shadow-lg" />
            <CarouselNext className="hidden sm:flex right-2 bg-background border shadow-lg" />
          </Carousel>
        </div>

      </div>
    </section>
  )
}
