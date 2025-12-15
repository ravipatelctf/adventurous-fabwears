import Image from "next/image"
import Link from "next/link"

import { products } from "@/lib/products"

export const metadata = {
  title: "Fabric Products | Adventurous Fabwears",
  description: "Explore premium knitted, woven, and performance fabrics.",
  openGraph: {
    title: "Fabric Products | Adventurous Fabwears",
    description: "Explore premium knitted, woven, and performance fabrics.",
    url: "https://adventurousfabwears.co.in/products",
    siteName: "Adventurous Fabwears",
    images: [
      {
        url: "https://adventurousfabwears.co.in/og/products-preview.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
}


export default function Page() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Page Header */}
      <div className="mb-14 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Fabric Range
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Explore our complete range of knitted, woven, and performance fabrics.
          Designed for sportswear, activewear, uniforms, and fashion garments —
          trusted by apparel manufacturers across India and overseas.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          const heroMedia = product.media[0]

          return (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group border rounded-xl overflow-hidden bg-background hover:shadow-xl transition"
            >
              {/* Media Wrapper */}
              <div className="relative overflow-hidden">
                {heroMedia?.type === "image" ? (
                  <Image
                    src={heroMedia.src}
                    alt={heroMedia.alt}
                    width={500}
                    height={500}
                    className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                ) : (
                  <video
                    src={heroMedia?.src}
                    muted
                    loop
                    playsInline
                    className="object-cover w-full h-64"
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
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
