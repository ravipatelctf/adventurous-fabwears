import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { products } from "@/lib/products"

type Props = {
  params: {
    category: string
  }
}

export default async function CategoryPage({ params }: Props) {
  const resolvedParams = await params

  const categoryProducts = products.filter(
    p => p.category === resolvedParams.category
  )

  if (!categoryProducts.length) {
    notFound()
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* ------------------------------------------------------------------ */}
      {/*                              HEADER                                */}
      {/* ------------------------------------------------------------------ */}

      <header className="mb-14 text-center">
        <h1 className="text-4xl md:text-5xl font-bold capitalize mb-4">
          {resolvedParams.category} Fabrics
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Explore our premium range of {resolvedParams.category} fabrics,
          engineered for performance wear, activewear, and modern apparel
          manufacturing.
        </p>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/*                           PRODUCT GRID                              */}
      {/* ------------------------------------------------------------------ */}

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categoryProducts.map(product => {
          const heroMedia = product.media[0]

          return (
            <Link
              key={product.slug}
              href={`/categories/${product.category}/${product.slug}`}
              className="group border rounded-xl overflow-hidden bg-background transition hover:shadow-xl"
            >
              {/* Media */}
              <div className="relative overflow-hidden">
                {heroMedia?.type === "image" ? (
                  <Image
                    src={heroMedia.src}
                    alt={heroMedia.alt}
                    width={500}
                    height={500}
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                ) : (
                  <video
                    src={heroMedia?.src}
                    muted
                    loop
                    playsInline
                    className="h-64 w-full object-cover"
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
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm text-muted-foreground">
                  {product.shortDescription}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
