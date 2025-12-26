import Image from "next/image"
import Link from "next/link"

const CATEGORIES = [
  {
    slug: "knitted",
    label: "Knitted Fabrics",
    headline: "Engineered Knitted Fabrics for Performance Wear",
    description:
      "Our knitted fabrics are designed for stretch, breathability, and all-day comfort. Ideal for activewear, sportswear, and training apparel that demands flexibility and durability.",
  },
  {
    slug: "woven",
    label: "Woven Fabrics",
    headline: "Durable Woven Fabrics with Premium Structure",
    description:
      "Crafted for strength and form, our woven fabrics deliver stability, longevity, and a refined finish — perfect for uniforms, outerwear, and structured garments.",
  },
]

export default function Page() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 space-y-20">
      {/* ------------------------------- HEADER ---------------------------- */}
      <header className="max-w-3xl mx-auto text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold">
          Our Fabric Categories
        </h1>
        <p className="text-base text-muted-foreground">
          Discover fabric categories engineered for performance, durability,
          and modern apparel manufacturing.
        </p>
      </header>

      {/* --------------------------- CATEGORY CARDS ------------------------ */}
      {CATEGORIES.map((category, index) => {
        const reverse = index % 2 !== 0

        return (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="group block"
          >
            <article
              className={`
                grid grid-cols-1 overflow-hidden rounded-xl border bg-background
                transition hover:shadow-lg
                md:grid-cols-2
                ${reverse ? "md:[&>*:first-child]:order-2" : ""}
              `}
            >
              {/* --------------------------- IMAGE --------------------------- */}
              <div className="relative aspect-square w-full">
                <Image
                  src="https://placehold.co/1080x1080/png"
                  alt={category.label}
                  width={1080}
                  height={1080}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />

                {/* Badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="rounded-full bg-black/50 backdrop-blur px-4 py-1.5 text-xs font-semibold text-white">
                    {category.label}
                  </span>
                </div>
              </div>

              {/* ---------------------------- TEXT ---------------------------- */}
              <div className="flex flex-col p-8">
                {/* Top-aligned content */}
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
                    {category.headline}
                  </h2>

                  <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                    {category.description}
                  </p>
                </div>

                {/* CTA pinned to bottom */}
                <span className="mt-auto pt-6 text-sm font-semibold text-primary">
                  Explore {category.label} →
                </span>
              </div>
            </article>
          </Link>
        )
      })}
    </section>
  )
}
