import type { Metadata } from "next"
import ProductCatalog from "@/components/product-catalog"

export const metadata: Metadata = {
  title: "Our Products | Adventurous Fabwears",
  description:
    "Explore our premium range of Lycra®, activewear, and performance fabrics designed for sportswear, athleisure, and high-stretch apparel manufacturing.",
}

export default function ProductsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h1 className="text-4xl font-bold mb-4">
        Performance Fabric Products
      </h1>

      <p className="text-muted-foreground max-w-3xl mb-10">
        Adventurous Fabwears offers a specialized range of Lycra® and
        performance-driven fabrics trusted by sportswear and activewear
        manufacturers across India and global markets.
      </p>

      <ProductCatalog />
    </section>
  )
}
