// apps/web/lib/products.ts

type mediaProps = "image" | "video"

export type ProductMedia =
  | { type: mediaProps; src: string; alt: string }

export type Product = {
  slug: string
  name: string
  fabricType: string
  media: ProductMedia[]

  shortDescription: string
  longDescription: string

  gsm: string
  width: string
  stretch: string
  composition: string
  texture: string
  colors: string

  moq: string
  packaging: string

  applications: string[]
}

export const products: Product[] = [
  /* ===================== SPANDEX & PERFORMANCE ===================== */

  {
    slug: "single-jersey-spandex",
    name: "Single Jersey Spandex Fabric",
    fabricType: "Knitted",
    media: [
      {
        type: "image",
        src: "/products/single-jersey-spandex/single-jersey-spandex-fabric-image-1.png",
        alt: "Polyester Cotton Spandex Single Jersey Fabric | 160-220 GSM | 58-60 Inch Width | 4-Way Stretch Activewear & T-Shirt Fabric",
      },
    ],
    shortDescription:
      "Lightweight Single Jersey spandex fabric offering superior stretch, breathability, and comfort for modern activewear.",
    longDescription:
      "Single Jersey spandex Fabric is a versatile knitted fabric widely used in T-shirts, sportswear, and activewear. Known for its smooth surface, lightweight feel, and excellent 4-way stretch, it provides outstanding comfort, shape retention, and durability. Ideal for high-movement garments that require flexibility and long-lasting performance.",
    gsm: "160-220 GSM",
    width: "58-60 inches",
    stretch: "4-way stretch",
    composition: "Polyester / Cotton + Spandex",
    texture: "Smooth",
    colors: "Black, Navy",
    moq: "300 kg",
    packaging: "Roll packing",
    applications: ["T-shirts", "Activewear"],
  },

  {
    slug: "interlock-spandex",
    name: "Interlock Spandex Fabric",
    fabricType: "Knitted",
    media: [
      {
        type: "image",
        src: "/products/interlock-spandex/interlock-spandex-fabric-image-1.png",
        alt: "Polyester Spandex Interlock Fabric | 200-260 GSM | 58-60 Inch Width | Dense 4-Way Stretch Sportswear & Leggings Fabric",
      },
    ],
    shortDescription:
      "Dense Interlock spandex fabric with excellent opacity, durability, and stretch recovery.",
    longDescription:
      "Interlock spandex Fabric features a double-knit construction that provides enhanced thickness, opacity, and strength. It offers consistent stretch recovery and a premium hand feel, making it suitable for leggings, sportswear, and performance apparel where structure and durability are essential.",
    gsm: "200-260 GSM",
    width: "58-60 inches",
    stretch: "4-way stretch",
    composition: "Polyester + Spandex",
    texture: "Dense",
    colors: "Black, Grey",
    moq: "300 kg",
    packaging: "Roll packing",
    applications: ["Sportswear", "Leggings"],
  },

  {
    slug: "jacquard-spandex",
    name: "Jacquard Spandex Fabric",
    fabricType: "Knitted",
    media: [
      {
        type: "image",
        src: "/products/jacquard-spandex/jacquard-spandex-fabric-image-1.png",
        alt: "Polyester Spandex Jacquard Fabric | 220-280 GSM | 58 Inch Width | Patterned 4-Way Stretch Premium Activewear Fabric",
      },
    ],
    shortDescription:
      "Premium Jacquard spandex fabric featuring textured patterns and high stretch performance.",
    longDescription:
      "Jacquard spandex Fabric combines decorative knitted patterns with functional stretch and durability. Designed for premium activewear and fashion sportswear, it delivers visual appeal along with comfort, flexibility, and long-lasting shape retention.",
    gsm: "220-280 GSM",
    width: "58 inches",
    stretch: "4-way stretch",
    composition: "Polyester + Spandex",
    texture: "Patterned",
    colors: "Custom dyed",
    moq: "500 kg",
    packaging: "Roll packing",
    applications: ["Premium Activewear"],
  },

  {
    slug: "micro-peach-spandex",
    name: "Micro Peach Spandex Fabric",
    fabricType: "Knitted",
    media: [
      {
        type: "image",
        src: "/products/micro-peach-spandex/micro-peach-spandex-fabric-image-1.png",
        alt: "Polyester Spandex Micro Peach Fabric | 180-240 GSM | 58-60 Inch Width | Ultra Soft 4-Way Stretch Yoga & Loungewear Fabric",
      },
    ],
    shortDescription:
      "Ultra-soft Micro Peach spandex fabric with a smooth, skin-friendly finish.",
    longDescription:
      "Micro Peach spandex Fabric is engineered with a peach-skin surface that delivers exceptional softness and comfort. Its 4-way stretch and breathable structure make it ideal for yoga wear, loungewear, and comfort-focused activewear.",
    gsm: "180-240 GSM",
    width: "58-60 inches",
    stretch: "4-way stretch",
    composition: "Polyester + Spandex",
    texture: "Peach-skin",
    colors: "Pastels",
    moq: "300 kg",
    packaging: "Roll packing",
    applications: ["Yoga Wear"],
  },

  {
    slug: "nylon-spandex",
    name: "Nylon Spandex Fabric",
    fabricType: "Knitted",
    media: [
      {
        type: "image",
        src: "/products/nylon-spandex/nylon-spandex-fabric-image-1.png",
        alt: "Nylon Spandex Fabric | 180-250 GSM | 58 Inch Width | Cool Touch 4-Way Stretch Swimwear & Performance Fabric",
      },
    ],
    shortDescription:
      "High-performance Nylon Spandex fabric offering excellent stretch, smooth finish, and durability for demanding applications.",
    longDescription:
      "Nylon spandex Fabric offers superior strength, smoothness, and moisture resistance. With excellent 4-way stretch and recovery, it is widely used in swimwear, compression garments, and performance apparel requiring durability and flexibility.",
    gsm: "180-250 GSM",
    width: "58 inches",
    stretch: "4-way stretch",
    composition: "Nylon + Spandex",
    texture: "Cool touch",
    colors: "Black, Neon",
    moq: "300 kg",
    packaging: "Roll packing",
    applications: ["Swimwear", "Compression Wear"],
  },

  /* ===================== KNITS & BASICS ===================== */

  {
    slug: "dot-knit",
    name: "Dot Knit Fabric",
    fabricType: "Knitted",
    media: [
      {
        type: "image",
        src: "/products/dot-knit/dot-knit-fabric-image-1.jpeg",
        alt: "Polyester Dot Knit Fabric | 160-200 GSM | 60 Inch Width | Breathable Sports T-Shirt & Activewear Fabric",
      },
    ],
    shortDescription:
      "Breathable Dot Knit fabric designed for airflow and comfort in sportswear.",
    longDescription:
      "Dot Knit Fabric features a perforated knit structure that enhances ventilation and moisture management. Lightweight and durable, it is ideal for sports T-shirts and activewear that require breathability and comfort during intense activity.",
    gsm: "160-200 GSM",
    width: "60 inches",
    stretch: "2-way stretch",
    composition: "Polyester",
    texture: "Breathable",
    colors: "Light shades",
    moq: "500 kg",
    packaging: "Roll packing",
    applications: ["Sports Tees", "Training Wear"],
  },

  {
    slug: "rice-knit",
    name: "Rice Knit Fabric",
    fabricType: "Knitted",
    media: [
      {
        type: "image",
        src: "/products/rice-knit/rice-knit-fabric-image-1.jpg",
        alt: "Polyester Rice Knit Fabric | 180-220 GSM | 60 Inch Width | Textured Track Wear & Sportswear Fabric",
      },
    ],
    shortDescription:
      "Durable Rice Knit fabric with a distinctive textured surface.",
    longDescription:
      "Rice Knit Fabric is known for its grain-like texture, strength, and durability. Commonly used in track wear and sports apparel, it offers reliable performance, breathability, and a structured feel suitable for daily athletic use.",
    gsm: "180-220 GSM",
    width: "60 inches",
    stretch: "2-way stretch",
    composition: "Polyester",
    texture: "Grain",
    colors: "Dark shades",
    moq: "500 kg",
    packaging: "Roll packing",
    applications: ["Track Wear", "Team Wear"],
  },

  {
    slug: "cotton-sinker",
    name: "Cotton Sinker Fabric",
    fabricType: "Knitted",
    media: [
      {
        type: "image",
        src: "/products/cotton-sinker/cotton-sinker-fabric-image-1.jpeg",
        alt: "100% Cotton Sinker Fabric | 160-200 GSM | 60 Inch Width | Soft Breathable T-Shirt & Casual Wear Fabric",
      },
    ],
    shortDescription:
      "Soft and breathable Cotton Sinker fabric for everyday comfort.",
    longDescription:
      "Cotton Sinker Fabric is made from 100% cotton, offering excellent breathability, softness, and comfort. Widely used for casual and everyday T-shirts, it provides a natural feel and reliable wear performance.",
    gsm: "160-200 GSM",
    width: "60 inches",
    stretch: "Low stretch",
    composition: "100% Cotton",
    texture: "Soft",
    colors: "White, Melange",
    moq: "300 kg",
    packaging: "Roll packing",
    applications: ["T-shirts", "Casual Wear"],
  },

  /* ===================== WOVEN & WINTER ===================== */

  {
    slug: "fleece-fabric",
    name: "Fleece Fabric",
    fabricType: "Knitted",
    media: [
      {
        type: "image",
        src: "/products/fleece-fabric/fleece-fabric-image-1.png",
        alt: "Poly Cotton Fleece Fabric | 280-400 GSM | 60 Inch Width | Warm Brushed Hoodie & Winterwear Fabric",
      },
    ],
    shortDescription:
      "Warm and insulating Fleece fabric with a soft brushed interior.",
    longDescription:
      "Fleece Fabric is a winter-essential textile offering excellent insulation, warmth, and comfort. Its brushed inner surface provides a cozy feel, making it ideal for hoodies, sweatshirts, and cold-weather garments.",
    gsm: "280-400 GSM",
    width: "60 inches",
    stretch: "Medium stretch",
    composition: "Poly / Cotton",
    texture: "Brushed",
    colors: "Dark shades",
    moq: "300 kg",
    packaging: "Roll packing",
    applications: ["Hoodies", "Winter Wear"],
  },
]

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}
