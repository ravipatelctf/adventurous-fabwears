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
  /* ===================== LYCRA & PERFORMANCE ===================== */

  {
    slug: "single-jersey-lycra",
    name: "Single Jersey Lycra Fabric",
    fabricType: "Knitted",
    media: [
      {
        type: "image",
        src: "https://ik.imagekit.io/l4zqjdpiax/public/products/single-jersey-lycra/single-jersey-lycra-fabric-image-1.jpeg",
        alt: "Single Jersey Lycra fabric with smooth knit structure and high stretch",
      },
      {
        type: "video",
        src: "https://ik.imagekit.io/l4zqjdpiax/public/videos/hero-video-1.mp4",
        alt: "Single Jersey Lycra fabric stretch and drape video",
      },
    ],
    shortDescription:
      "Lightweight Single Jersey Lycra fabric offering superior stretch, breathability, and comfort for modern activewear.",
    longDescription:
      "Single Jersey Lycra Fabric is a versatile knitted fabric widely used in T-shirts, sportswear, and activewear. Known for its smooth surface, lightweight feel, and excellent 4-way stretch, it provides outstanding comfort, shape retention, and durability. Ideal for high-movement garments that require flexibility and long-lasting performance.",
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
    slug: "interlock-lycra",
    name: "Interlock Lycra Fabric",
    fabricType: "Knitted",
    media: [
      {
        type: "image",
        src: "https://ik.imagekit.io/l4zqjdpiax/public/products/interlock-lycra/interlock-lycra-fabric-image-1.jpeg",
        alt: "Interlock Lycra fabric with dense knit and premium finish",
      },
      {
        type: "video",
        src: "https://ik.imagekit.io/l4zqjdpiax/public/videos/hero-video-1.mp4",
        alt: "Interlock Lycra fabric thickness and stretch demonstration",
      },
    ],
    shortDescription:
      "Dense Interlock Lycra fabric with excellent opacity, durability, and stretch recovery.",
    longDescription:
      "Interlock Lycra Fabric features a double-knit construction that provides enhanced thickness, opacity, and strength. It offers consistent stretch recovery and a premium hand feel, making it suitable for leggings, sportswear, and performance apparel where structure and durability are essential.",
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
    slug: "jacquard-lycra",
    name: "Jacquard Lycra Fabric",
    fabricType: "Knitted",
    media: [
      {
        type: "image",
        src: "https://ik.imagekit.io/l4zqjdpiax/public/products/jacquard-lycra/jacquard-lycra-fabric-image-1.jpeg",
        alt: "Jacquard Lycra fabric with textured patterned knit",
      },
      {
        type: "video",
        src: "https://ik.imagekit.io/l4zqjdpiax/public/videos/hero-video-1.mp4",
        alt: "Jacquard Lycra fabric pattern and elasticity video",
      },
    ],
    shortDescription:
      "Premium Jacquard Lycra fabric featuring textured patterns and high stretch performance.",
    longDescription:
      "Jacquard Lycra Fabric combines decorative knitted patterns with functional stretch and durability. Designed for premium activewear and fashion sportswear, it delivers visual appeal along with comfort, flexibility, and long-lasting shape retention.",
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
    slug: "micro-peach-lycra",
    name: "Micro Peach Lycra Fabric",
    fabricType: "Knitted",
    media: [
      {
        type: "image",
        src: "https://ik.imagekit.io/l4zqjdpiax/public/products/micro-peach-lycra/micro-peach-lycra-fabric-image-1.jpeg",
        alt: "Micro Peach Lycra fabric with ultra-soft peach finish",
      },
      {
        type: "video",
        src: "https://ik.imagekit.io/l4zqjdpiax/public/videos/hero-video-1.mp4",
        alt: "Micro Peach Lycra fabric softness and stretch video",
      },
    ],
    shortDescription:
      "Ultra-soft Micro Peach Lycra fabric with a smooth, skin-friendly finish.",
    longDescription:
      "Micro Peach Lycra Fabric is engineered with a peach-skin surface that delivers exceptional softness and comfort. Its 4-way stretch and breathable structure make it ideal for yoga wear, loungewear, and comfort-focused activewear.",
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
    slug: "nylon-lycra",
    name: "Nylon Lycra Fabric",
    fabricType: "Knitted",
    media: [
      {
        type: "image",
        src: "https://ik.imagekit.io/l4zqjdpiax/public/products/nylon-lycra/nylon-lycra-fabric-image-1.jpeg",
        alt: "Nylon Lycra fabric with smooth finish and high elasticity",
      },
      {
        type: "video",
        src: "https://ik.imagekit.io/l4zqjdpiax/public/videos/hero-video-1.mp4",
        alt: "Nylon Lycra fabric performance and stretch video",
      },
    ],
    shortDescription:
      "High-performance Nylon Lycra fabric known for strength, elasticity, and a cool touch.",
    longDescription:
      "Nylon Lycra Fabric offers superior strength, smoothness, and moisture resistance. With excellent 4-way stretch and recovery, it is widely used in swimwear, compression garments, and performance apparel requiring durability and flexibility.",
    gsm: "180-250 GSM",
    width: "58 inches",
    stretch: "4-way stretch",
    composition: "Nylon + Spandex",
    texture: "Cool touch",
    colors: "Black, Neon",
    moq: "300 kg",
    packaging: "Roll packing",
    applications: ["Swimwear"],
  },

  /* ===================== KNITS & BASICS ===================== */

  {
    slug: "dot-knit",
    name: "Dot Knit Fabric",
    fabricType: "Knitted",
    media: [
      {
        type: "image",
        src: "https://ik.imagekit.io/l4zqjdpiax/public/products/dot-knit/dot-knit-fabric-image-1.jpeg",
        alt: "Dot knit fabric with breathable perforated knit structure",
      },
      {
        type: "video",
        src: "https://ik.imagekit.io/l4zqjdpiax/public/videos/hero-video-1.mp4",
        alt: "Dot knit fabric breathability and airflow video",
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
    applications: ["Sports Tees"],
  },

  {
    slug: "rice-knit",
    name: "Rice Knit Fabric",
    fabricType: "Knitted",
    media: [
      {
        type: "image",
        src: "https://ik.imagekit.io/l4zqjdpiax/public/products/rice-knit/rice-knit-fabric-image-1.jpeg",
        alt: "Rice knit fabric with textured grain knit pattern",
      },
      {
        type: "video",
        src: "https://ik.imagekit.io/l4zqjdpiax/public/videos/hero-video-1.mp4",
        alt: "Rice knit fabric texture and durability video",
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
    applications: ["Track Wear"],
  },

  {
    slug: "cotton-sinker",
    name: "Cotton Sinker Fabric",
    fabricType: "Knitted",
    media: [
      {
        type: "image",
        src: "https://ik.imagekit.io/l4zqjdpiax/public/products/cotton-sinker/cotton-sinker-fabric-image-1.jpeg",
        alt: "Cotton sinker fabric with soft breathable cotton knit",
      },
      {
        type: "video",
        src: "https://ik.imagekit.io/l4zqjdpiax/public/videos/hero-video-1.mp4",
        alt: "Cotton sinker fabric softness and drape video",
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
    applications: ["T-shirts"],
  },

  /* ===================== WOVEN & WINTER ===================== */

  {
    slug: "fleece-fabric",
    name: "Fleece Fabric",
    fabricType: "Knitted",
    media: [
      {
        type: "image",
        src: "https://ik.imagekit.io/l4zqjdpiax/public/products/fleece-fabric/fleece-fabric-image-1.jpeg",
        alt: "Warm fleece fabric with brushed inner surface",
      },
      {
        type: "video",
        src: "https://ik.imagekit.io/l4zqjdpiax/public/videos/hero-video-1.mp4",
        alt: "Fleece fabric thickness and insulation video",
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
    applications: ["Hoodies"],
  },
]

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}
