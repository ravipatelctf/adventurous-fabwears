import Image from "next/image"
import Link from "next/link"

const industries = [
  {
    title: "Sportswear Fabric Manufacturer",
    description:
      "Manufacturer of high-performance fabrics for sportswear brands, gyms, and training apparel manufacturers.",
    href: "/industries/sportswear-fabric-manufacturer-india",
    image: "/industries/sportswear-fabric.png",
  },
  {
    title: "Activewear Fabric Exporter",
    description:
      "Export-quality activewear and stretch fabrics supplied to global athleisure and sportswear brands.",
    href: "/industries/activewear-fabric-exporter-india",
    image: "/industries/activewear-fabric.png",
  },
  {
    title: "Polyester Spandex Fabric Supplier",
    description:
      "Reliable bulk supplier of polyester spandex fabrics for leggings, gym wear, and performance apparel.",
    href: "/industries/polyester-spandex.jpg",
    image: "/products/interlock-spandex/interlock-spandex-fabric-image-1.png",
  },
  {
    title: "Rice Knit Fabric Manufacturer",
    description:
      "Specialized manufacturer of rice knit fabrics with textured finish for track pants and sports uniforms.",
    href: "/industries/rice-knit-fabric-manufacturer",
    image: "/products/rice-knit/rice-knit-fabric-image-1.jpg",
  },
  {
    title: "Fleece Fabric Manufacturer",
    description:
      "Manufacturer of fleece fabrics for winter wear, hoodies, sweatshirts, and institutional garments.",
    href: "/industries/fleece-fabric-manufacturer-india",
    image: "/products/fleece-fabric/fleece-fabric-image-1.png",
  },
]

export default function Page() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* PAGE HEADER */}
      <div className="mb-14 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Industries We Serve
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          We manufacture and supply knitted, stretch, and performance fabrics
          for sportswear, activewear, athleisure, and winter apparel brands
          across India and international markets.
        </p>
      </div>

      {/* INDUSTRY CARDS */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <Link
            key={industry.href}
            href={industry.href}
            className="group border rounded-xl overflow-hidden bg-background hover:shadow-xl transition"
          >
            {/* IMAGE */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
                {industry.title}
              </h2>
              <p className="text-sm text-muted-foreground">
                {industry.description}
              </p>

              <span className="inline-block mt-4 text-sm font-medium text-primary">
                Explore →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
