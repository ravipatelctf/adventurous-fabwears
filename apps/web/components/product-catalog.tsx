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

import { products } from "@/lib/products"

/**
 * Utility: chunk array into groups of 3
 */
function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }
  return chunks
}

/**
 * Landing page: show only first N products (featured)
 */
const FEATURED_COUNT = 6
const featuredProducts = products.slice(0, FEATURED_COUNT)
const slides = chunkArray(featuredProducts, 3)

export default function ProductCatalog() {
  return (
    <section id="products" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* ------------------------------------------------------------------ */}
        {/*                                Heading                               */}
        {/* ------------------------------------------------------------------ */}

        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Our Fabrics Collection
        </h2>

        <p className="mt-4 text-center text-lg text-muted-foreground">
          High quality fabrics crafted for garments, sportswear, and global brands.
        </p>

        {/* ------------------------------------------------------------------ */}
        {/*                                Carousel                              */}
        {/* ------------------------------------------------------------------ */}

        <div className="relative mt-12">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {slides.map((group, index) => (
                <CarouselItem key={index}>
                  {/* 1 × 3 Row */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {group.map((product) => {
                      const heroMedia = product.media?.[0]

                      return (
                        <Link
                          key={product.slug}
                          href={`/products/${product.slug}`}
                          className="group relative overflow-hidden rounded-xl border bg-background"
                        >
                          {/* Product Image */}
                          {heroMedia?.type === "image" && (
                            <Image
                              unoptimized
                              src={heroMedia.src}
                              alt={heroMedia.alt}
                              width={500}
                              height={500}
                              className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          )}

                          {/* Bottom Gradient */}
                          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />

                          {/* Product Name Badge */}
                          <div className="pointer-events-none absolute bottom-3 left-3 right-3">
                            <span className="inline-block rounded-full bg-black/40 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
                              {product.name}
                            </span>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel Controls */}
            <CarouselPrevious className="left-2 border bg-background shadow-lg" />
            <CarouselNext className="right-2 border bg-background shadow-lg" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
