import Image from "next/image"
import Link from "next/link"

import { products } from "@/lib/products"
import { createWhatsAppLink } from "@/lib/whatsapp"

export const metadata = {
  title: "Activewear Fabric Exporter from India",
  description: "Export-quality activewear and performance fabrics from India..."
}


export default function Page() {
  const featuredProducts = products.filter((p) =>
    [
      "polyester-spandex",
      "nylon-spandex",
      "interlock-spandex",
      "jacquard-spandex",
      "micro-peach-spandex",
    ].includes(p.slug)
  )

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* HERO */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Activewear Fabric Exporter from India
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          We are an Indian exporter of premium activewear and performance fabrics,
          supplying polyester spandex, nylon blends, and stretch knits to global
          sportswear and athleisure brands.
        </p>

        <div className="mt-8">
          <a
            href={createWhatsAppLink(
              "Hi, we are looking for activewear fabric for export. Please share GSM, MOQ, pricing & export details."
            )}
            className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-white font-semibold hover:bg-green-700 transition"
          >
            Get Export Prices on WhatsApp
          </a>
        </div>
      </div>

      {/* FABRIC TYPES */}
      <div className="mb-20">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Activewear Fabrics Available for Export
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
                    Ideal for leggings, sports bras, yoga wear & performance tops
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* EXPORT SPECIFICATIONS */}
      <div className="mb-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Export Specifications & Capabilities
        </h2>

        <ul className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
          <li>✔ GSM range: 180 - 300</li>
          <li>✔ Width: 58” - 72”</li>
          <li>✔ Polyester / Nylon Spandex blends</li>
          <li>✔ Consistent bulk production</li>
          <li>✔ Color fastness & shrinkage controlled</li>
          <li>✔ Roll & bale export packing</li>
        </ul>
      </div>

      {/* EXPORT MARKETS */}
      <div className="mb-20">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Global Buyers We Serve
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            "International Sportswear Brands",
            "Athleisure Manufacturers",
            "Private Label Exporters",
            "Buying Houses & Importers",
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
            "Hi, we want to import activewear fabric from India. Please share catalogue, MOQ & export pricing."
          )}
          className="inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 text-white font-semibold hover:bg-green-700 transition"
        >
          Connect with Export Team on WhatsApp
        </a>
      </div>
    </section>
  )
}
