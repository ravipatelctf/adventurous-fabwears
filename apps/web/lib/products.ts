// apps/web/lib/products.ts

export type ProductMedia =
  | { type: "image"; src: string; alt: string }

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
        src: "/products/products/single-jersey-lycra/single-jersey-lycra-img1.jpg",
        alt: "Single Jersey Lycra fabric flat view",
      },
      {
        type: "image",
        src: "/products/products/single-jersey-lycra/single-jersey-lycra-img2.webp",
        alt: "Single Jersey Lycra fabric texture close-up",
      },
    ],
    shortDescription: "Lightweight Lycra fabric with excellent stretch and breathability.",
    longDescription:
      "Single Jersey Lycra is widely used for T-shirts and activewear. It offers smooth surface finish, 4-way stretch, and breathable comfort.",
    gsm: "160–220 GSM",
    width: "58–60 inches",
    stretch: "4-way stretch",
    composition: "Polyester / Cotton + Spandex",
    texture: "Smooth, breathable",
    colors: "Black, Navy, Melange",
    moq: "300 kg",
    packaging: "Roll packing with poly wrap",
    applications: ["T-shirts", "Activewear"],
  },

  {
    slug: "interlock-lycra",
    name: "Interlock Lycra Fabric",
    fabricType: "Knitted",
    media: [
      {
        type: "image",
        src: "/products/products/interlock-lycra/interlock-lycra-img1.jpg",
        alt: "Interlock Lycra fabric sample",
      },
      {
        type: "image",
        src: "/products/products/interlock-lycra/interlock-lycra-img2.jpg",
        alt: "Interlock Lycra fabric close-up",
      },
    ],
    shortDescription: "Dense interlock Lycra with superior structure and elasticity.",
    longDescription:
      "Interlock Lycra is a double-knit fabric providing excellent opacity, durability, and stretch recovery.",
    gsm: "200–260 GSM",
    width: "58–60 inches",
    stretch: "4-way stretch",
    composition: "Polyester + Spandex",
    texture: "Dense, smooth",
    colors: "Black, Grey, White",
    moq: "300 kg",
    packaging: "Roll packing with poly wrap",
    applications: ["Sportswear", "Leggings"],
  },

  {
    slug: "jacquard-lycra",
    name: "Jacquard Lycra Fabric",
    fabricType: "Knitted",
    media: [
      {
        type: "image",
        src: "/products/products/jacquard-lycra/jacquard-lycra-img1.jpg",
        alt: "Jacquard Lycra fabric pattern",
      },
      {
        type: "image",
        src: "/products/products/jacquard-lycra/jacquard-lycra-img2.jpg",
        alt: "Jacquard Lycra fabric texture",
      },
    ],
    shortDescription: "Premium patterned Lycra fabric for high-end activewear.",
    longDescription:
      "Jacquard Lycra features textured knit patterns while maintaining stretch and comfort.",
    gsm: "220–280 GSM",
    width: "58 inches",
    stretch: "4-way stretch",
    composition: "Polyester + Spandex",
    texture: "Patterned texture",
    colors: "Custom dyed",
    moq: "500 kg",
    packaging: "Roll packing with inner poly",
    applications: ["Premium Activewear"],
  },

  {
    slug: "micro-peach-lycra",
    name: "Micro Peach Lycra Fabric",
    fabricType: "Knitted",
    media: [
      {
        type: "image",
        src: "/products/products/micro-peach-lycra/micro-peach-lycra-img1.jpg",
        alt: "Micro Peach Lycra fabric sample",
      },
      {
        type: "image",
        src: "/products/products/micro-peach-lycra/micro-peach-lycra-img2.avif",
        alt: "Micro Peach Lycra soft texture",
      },
    ],
    shortDescription: "Ultra-soft Lycra with peach-skin finish.",
    longDescription:
      "Micro Peach Lycra combines softness with stretch, making it ideal for yoga and comfort wear.",
    gsm: "180–240 GSM",
    width: "58–60 inches",
    stretch: "4-way stretch",
    composition: "Polyester + Spandex",
    texture: "Peach-skin soft",
    colors: "Pastels, Dark solids",
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
        src: "/products/products/nylon-lycra/nylon-lycra-img1.webp",
        alt: "Nylon Lycra fabric sample",
      },
      {
        type: "image",
        src: "/products/products/nylon-lycra/nylon-lycra-img2.jpg",
        alt: "Nylon Lycra fabric close view",
      },
    ],
    shortDescription: "High-performance Lycra with cool touch and strength.",
    longDescription:
      "Nylon Lycra is widely used in swimwear and compression garments due to its elasticity and moisture resistance.",
    gsm: "180–250 GSM",
    width: "58 inches",
    stretch: "4-way stretch",
    composition: "Nylon + Spandex",
    texture: "Cool touch",
    colors: "Black, Neon",
    moq: "300 kg",
    packaging: "Roll packing with moisture barrier",
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
        src: "/products/products/dot-knit/dot-knit-img1.jpg",
        alt: "Dot Knit fabric texture",
      },
      {
        type: "image",
        src: "/products/products/dot-knit/dot-knit-img2.jpg",
        alt: "Dot Knit fabric texture",
      },
    ],
    shortDescription: "Breathable knit fabric with dot structure.",
    longDescription:
      "Dot Knit fabric allows airflow and comfort, commonly used in sports T-shirts.",
    gsm: "160–200 GSM",
    width: "60 inches",
    stretch: "2-way stretch",
    composition: "Polyester",
    texture: "Breathable dots",
    colors: "Light colors",
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
        src: "/products/products/rice-knit/rice-knit-img1.jpg",
        alt: "Rice Knit fabric sample",
      },
    ],
    shortDescription: "Textured knit fabric with grain-like appearance.",
    longDescription:
      "Rice Knit fabric offers durability and style for track and sportswear.",
    gsm: "180–220 GSM",
    width: "60 inches",
    stretch: "2-way stretch",
    composition: "Polyester",
    texture: "Grain texture",
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
        src: "/products/products/cotton-sinker/cotton-sinker-img2.jpg",
        alt: "Cotton Sinker fabric texture",
      },
    ],
    shortDescription: "Soft breathable cotton knit fabric.",
    longDescription:
      "Cotton Sinker fabric is widely used for comfortable everyday T-shirts.",
    gsm: "160–200 GSM",
    width: "60 inches",
    stretch: "Low stretch",
    composition: "100% Cotton",
    texture: "Soft, breathable",
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
        src: "/products/products/fleece-fabric/fleece-fabric-img1.jpg",
        alt: "Fleece fabric outer view",
      },
      {
        type: "image",
        src: "/products/products/fleece-fabric/fleece-fabric-img2.avif",
        alt: "Fleece fabric brushed inner texture",
      },
    ],
    shortDescription: "Warm fleece with brushed interior.",
    longDescription:
      "Fleece fabric provides insulation and comfort for winter garments.",
    gsm: "280-400 GSM",
    width: "60 inches",
    stretch: "Medium stretch",
    composition: "Poly / Cotton",
    texture: "Warm, brushed",
    colors: "Dark shades",
    moq: "300 kg",
    packaging: "Roll packing",
    applications: ["Hoodies"],
  },
]

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}
