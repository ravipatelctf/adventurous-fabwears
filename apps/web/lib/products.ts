// apps/web/lib/products.ts

type mediaProps = "image" | "video";

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
      { type: "image", src: "/products/single-jersey-lycra/WhatsApp Image 2025-12-23 at 3.30.47 PM.jpeg", alt: "Single Jersey Lycra WhatsApp image" },
      { type: "image", src: "/products/single-jersey-lycra/WhatsApp Image 2025-12-23 at 3.30.44 PM.jpeg", alt: "Single Jersey Lycra WhatsApp image" },
      { type: "image", src: "/products/single-jersey-lycra/single-jersey-lycra-img1.jpg", alt: "Single Jersey Lycra fabric" },
      { type: "image", src: "/products/single-jersey-lycra/single-jersey-lycra-img2.webp", alt: "Single Jersey Lycra texture" },
    ],
    shortDescription: "Lightweight Lycra fabric with excellent stretch.",
    longDescription: "Single Jersey Lycra is widely used for T-shirts and activewear.",
    gsm: "160–220 GSM",
    width: "58–60 inches",
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
      { type: "image", src: "/products/interlock-lycra/WhatsApp Image 2025-12-23 at 3.30.46 PM (2).jpeg", alt: "Interlock Lycra WhatsApp image" },
      { type: "image", src: "/products/interlock-lycra/WhatsApp Image 2025-12-23 at 3.30.46 PM (1).jpeg", alt: "Interlock Lycra WhatsApp image" },
      { type: "image", src: "/products/interlock-lycra/interlock-lycra-img1.jpg", alt: "Interlock Lycra fabric" },
      { type: "image", src: "/products/interlock-lycra/interlock-lycra-img2.jpg", alt: "Interlock Lycra texture" },
    ],
    shortDescription: "Dense interlock Lycra with structure.",
    longDescription: "Interlock Lycra provides opacity and stretch recovery.",
    gsm: "200–260 GSM",
    width: "58–60 inches",
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
      { type: "image", src: "/products/jacquard-lycra/WhatsApp Image 2025-12-23 at 3.30.48 PM.jpeg", alt: "Jacquard Lycra WhatsApp image" },
      { type: "image", src: "/products/jacquard-lycra/WhatsApp Image 2025-12-23 at 3.30.47 PM (2).jpeg", alt: "Jacquard Lycra WhatsApp image" },
      { type: "image", src: "/products/jacquard-lycra/jacquard-lycra-img1.jpg", alt: "Jacquard Lycra pattern" },
      { type: "image", src: "/products/jacquard-lycra/jacquard-lycra-img2.jpg", alt: "Jacquard Lycra texture" },
      { type: "video", src: "/products/jacquard-lycra/jacquard-lycra-video1.mp4", alt: "jacquard-lycra-video1" },
      { type: "video", src: "/products/jacquard-lycra/jacquard-lycra-video2.mp4", alt: "jacquard-lycra-video2" },
    ],
    shortDescription: "Premium patterned Lycra fabric.",
    longDescription: "Jacquard Lycra combines texture with stretch.",
    gsm: "220–280 GSM",
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
      { type: "image", src: "/products/micro-peach-lycra/WhatsApp Image 2025-12-23 at 2.14.39 PM.jpeg", alt: "Micro Peach Lycra WhatsApp image" },
      { type: "image", src: "/products/micro-peach-lycra/WhatsApp Image 2025-12-23 at 3.30.47 PM (1).jpeg", alt: "Micro Peach Lycra WhatsApp image" },
      { type: "image", src: "/products/micro-peach-lycra/micro-peach-lycra-img1.jpg", alt: "Micro Peach Lycra fabric" },
      { type: "image", src: "/products/micro-peach-lycra/micro-peach-lycra-img2.avif", alt: "Micro Peach Lycra texture" },
    ],
    shortDescription: "Ultra-soft Lycra with peach finish.",
    longDescription: "Ideal for yoga and comfort wear.",
    gsm: "180–240 GSM",
    width: "58–60 inches",
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
      { type: "image", src: "/products/nylon-lycra/WhatsApp Image 2025-12-23 at 3.30.45 PM.jpeg", alt: "Nylon Lycra WhatsApp image" },
      { type: "image", src: "/products/nylon-lycra/nylon-lycra-img1.webp", alt: "Nylon Lycra fabric" },
      { type: "image", src: "/products/nylon-lycra/nylon-lycra-img2.jpg", alt: "Nylon Lycra texture" },
    ],
    shortDescription: "High-performance Nylon Lycra.",
    longDescription: "Used for swimwear and compression garments.",
    gsm: "180–250 GSM",
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
      { type: "image", src: "/products/dot-knit/WhatsApp Image 2025-12-23 at 11.32.23 AM.jpeg", alt: "Dot Knit fabric" },
      { type: "image", src: "/products/dot-knit/dot-knit-img2.jpg", alt: "Dot Knit texture" },
    ],
    shortDescription: "Breathable dot knit fabric.",
    longDescription: "Used for sports T-shirts.",
    gsm: "160–200 GSM",
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
      { type: "image", src: "/products/rice-knit/WhatsApp Image 2025-12-23 at 3.30.48 PM (1).jpeg", alt: "Rice Knit WhatsApp image" },
      { type: "image", src: "/products/rice-knit/rice-knit-img1.jpg", alt: "Rice Knit fabric" },
      { type: "image", src: "/products/rice-knit/rice-knit-img2.jpg", alt: "Rice Knit texture" },
    ],
    shortDescription: "Textured rice knit fabric.",
    longDescription: "Durable knit for sportswear.",
    gsm: "180–220 GSM",
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
      { type: "image", src: "/products/cotton-sinker/WhatsApp Image 2025-12-23 at 3.30.46 PM.jpeg", alt: "Cotton Sinker WhatsApp image" },
      { type: "image", src: "/products/cotton-sinker/cotton-sinker-img1.jpg", alt: "Cotton Sinker fabric" },
      { type: "image", src: "/products/cotton-sinker/cotton-sinker-img2.jpg", alt: "Cotton Sinker texture" },
    ],
    shortDescription: "Soft breathable cotton knit.",
    longDescription: "Used for everyday T-shirts.",
    gsm: "160–200 GSM",
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
      { type: "image", src: "/products/fleece-fabric/WhatsApp Image 2025-12-23 at 2.10.14 PM.jpeg", alt: "Fleece WhatsApp image" },
      { type: "image", src: "/products/fleece-fabric/fleece-fabric-img1.jpg", alt: "Fleece fabric outer" },
      { type: "image", src: "/products/fleece-fabric/fleece-fabric-img2.avif", alt: "Fleece fabric inner" },
    ],
    shortDescription: "Warm fleece fabric.",
    longDescription: "Used for winter garments.",
    gsm: "280–400 GSM",
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
