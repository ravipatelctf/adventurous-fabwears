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
import { useLocale, useTranslations } from "next-intl"

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
 * Landing page: show only first N products
 * (curated / featured)
 */
const FEATURED_COUNT = 6
const featuredProducts = products.slice(0, FEATURED_COUNT)
const slides = chunkArray(featuredProducts, 3)

export default function ProductCatalog() {
  const t = useTranslations("catalog")
  const locale = useLocale()  
  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold">
          {t("title")}
        </h2>

        <p className="text-center mt-4 text-muted-foreground text-lg">
          {t("description")}
        </p>

        {/* Carousel */}
        <div className="mt-12 relative">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {slides.map((group, index) => (
                <CarouselItem key={index}>
                  {/* 1 × 3 Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {group.map((product) => {
                      const heroMedia = product.media?.[0]

                      return (
                        <Link
                          key={product.slug}
                          href={`${locale}/products/${product.slug}`}
                          className="group relative overflow-hidden rounded-xl border bg-background"
                        >
                          {/* Image */}
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
                            <span className="inline-block text-sm font-semibold text-white bg-black/40 backdrop-blur px-4 py-1.5 rounded-full">
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

            {/* Arrows */}
            <CarouselPrevious className="left-2 bg-background border shadow-lg" />
            <CarouselNext className="right-2 bg-background border shadow-lg" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
