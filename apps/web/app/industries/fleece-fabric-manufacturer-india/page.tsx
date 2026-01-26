import Image from "next/image"
import Link from "next/link"

import { products } from "@/lib/products"
import { createWhatsAppLink } from "@/lib/whatsapp"

export default function Page() {
  const featuredProducts = products.filter((p) =>
    [
      "fleece-fabric",
      "cotton-sinker",
      "polyester-spandex",
      "dot-knit",
    ].includes(p.slug)
  )

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* HERO */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Fleece Fabric Manufacturer in India
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          We are a trusted manufacturer of fleece fabric in India, supplying
          warm, soft, and durable fabrics for winter wear, hoodies, sweatshirts,
          sportswear, and institutional garments.
        </p>

        <div className="mt-8">
          <a
            href={createWhatsAppLink(
              "Hi, I'm looking for fleece fabric. Please share GSM, MOQ & price."
            )}
            className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-white font-semibold hover:bg-green-700 transition"
          >
            Get Fleece Fabric Price on WhatsApp
          </a>
        </div>
      </div>

      {/* FABRIC TYPES */}
      <div className="mb-20">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Fleece & Winter Fabrics We Manufacture
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => {
            const heroMedia = product.media[0]

            return (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group border rounded-xl overflow-hidden bg-background hover:shadow-xl transition"
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  {heroMedia?.type === "image" && (
                    <Image
                      src={heroMedia.src}
                      alt={heroMedia.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Warm, insulating & winter-ready fabric construction
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* TECHNICAL SPECIFICATIONS */}
      <div className="mb-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Fleece Fabric Specifications
        </h2>

        <ul className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
          <li>✔ GSM range: 220 - 350</li>
          <li>✔ Width: 58” - 72”</li>
          <li>✔ Composition: Polyester / Cotton blends</li>
          <li>✔ Brushed & anti-pilling finishes</li>
          <li>✔ Soft hand-feel with thermal insulation</li>
          <li>✔ Bulk manufacturing & export-ready MOQ</li>
        </ul>
      </div>

      {/* APPLICATIONS */}
      <div className="mb-20">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Applications of Fleece Fabric
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            "Hoodies & Sweatshirts",
            "Winter Sportswear",
            "Track Suits & Jackets",
            "Institutional & Corporate Wear",
          ].map((item) => (
            <div
              key={item}
              className="border rounded-xl p-6 text-sm font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="text-center">
        <a
          href={createWhatsAppLink(
            "Hi, I want fleece fabric in bulk. Please share catalogue, GSM & pricing."
          )}
          className="inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 text-white font-semibold hover:bg-green-700 transition"
        >
          Contact Fleece Fabric Manufacturer
        </a>
      </div>
    </section>
  )
}
