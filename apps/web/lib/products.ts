// apps/web/lib/products.ts

export type ProductMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string }

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

const placeholder = (text: string) =>
  `https://placehold.co/800x800?text=${encodeURIComponent(text)}`

export const products: Product[] = [
  /* ===================== LYCRA & PERFORMANCE ===================== */

  {
    slug: "single-jersey-lycra",
    name: "Single Jersey Lycra Fabric",
    fabricType: "Knitted",
    media: [
      { type: "image", src: placeholder("Single Jersey Lycra Fabric"), alt: "Single Jersey Lycra fabric sample" },
      { type: "image", src: placeholder("Single Jersey Lycra Close View"), alt: "Single Jersey Lycra close-up" },
      { type: "video", src: "/videos/hero-video-1.mp4" },
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
      { type: "image", src: "/products/interlock-lycra/interlock-lycra-image-01.png", alt: "Interlock Lycra fabric image sample 1" },
      { type: "image", src: "/products/interlock-lycra/interlock-lycra-video-1.gif", alt: "Interlock Lycra fabric gif sample 1" },
      { type: "image", src: "/products/interlock-lycra/interlock-lycra-image-02.png", alt: "Interlock Lycra fabric image sample 2" },
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
      { type: "image", src: placeholder("Jacquard Lycra Fabric"), alt: "Jacquard Lycra fabric sample" },
      { type: "image", src: placeholder("Jacquard Lycra Pattern"), alt: "Jacquard Lycra pattern detail" },
      { type: "video", src: "/videos/hero-video-1.mp4" },
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
      { type: "image", src: placeholder("Micro Peach Lycra Fabric"), alt: "Micro Peach Lycra fabric" },
      { type: "image", src: placeholder("Micro Peach Soft Texture"), alt: "Micro Peach Lycra close-up" },
      { type: "video", src: "/videos/hero-video-1.mp4" },
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
      { type: "image", src: placeholder("Nylon Lycra Fabric"), alt: "Nylon Lycra fabric" },
      { type: "image", src: placeholder("Nylon Lycra Close View"), alt: "Nylon Lycra close-up" },
      { type: "video", src: "/videos/hero-video-1.mp4" },
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
      { type: "image", src: placeholder("Dot Knit Fabric"), alt: "Dot Knit fabric" },
      { type: "image", src: placeholder("Dot Knit Texture"), alt: "Dot Knit texture" },
      { type: "video", src: "/videos/hero-video-1.mp4" },
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
      { type: "image", src: placeholder("Rice Knit Fabric"), alt: "Rice Knit fabric" },
      { type: "image", src: placeholder("Rice Knit Texture"), alt: "Rice Knit texture" },
      { type: "video", src: "/videos/hero-video-1.mp4" },
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
      { type: "image", src: placeholder("Cotton Sinker Fabric"), alt: "Cotton Sinker fabric" },
      { type: "image", src: placeholder("Cotton Sinker Texture"), alt: "Cotton Sinker texture" },
      { type: "video", src: "/videos/hero-video-1.mp4" },
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
    slug: "taffeta-fabric",
    name: "Taffeta Fabric",
    fabricType: "Woven",
    media: [
      { type: "image", src: placeholder("Taffeta Fabric"), alt: "Taffeta fabric" },
      { type: "image", src: placeholder("Taffeta Texture"), alt: "Taffeta texture" },
      { type: "video", src: "/videos/hero-video-1.mp4" },
    ],
    shortDescription: "Lightweight crisp woven fabric.",
    longDescription:
      "Taffeta fabric is widely used in jackets and outerwear due to its firmness and durability.",
    gsm: "60–90 GSM",
    width: "58 inches",
    stretch: "No stretch",
    composition: "Polyester",
    texture: "Crisp",
    colors: "Bright",
    moq: "800 kg",
    packaging: "Roll packing",
    applications: ["Jackets"],
  },

  {
    slug: "fleece-fabric",
    name: "Fleece Fabric",
    fabricType: "Knitted",
    media: [
      { type: "image", src: placeholder("Fleece Fabric"), alt: "Fleece fabric" },
      { type: "image", src: placeholder("Fleece Inner Brushed"), alt: "Fleece brushed texture" },
      { type: "video", src: "/videos/hero-video-1.mp4" },
    ],
    shortDescription: "Warm fleece with brushed interior.",
    longDescription:
      "Fleece fabric provides insulation and comfort for winter garments.",
    gsm: "280–350 GSM",
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
