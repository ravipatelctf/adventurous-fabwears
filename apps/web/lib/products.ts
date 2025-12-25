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
      { type: "image", src: "https://ik.imagekit.io/l4zqjdpiax/public/products/single-jersey-lycra/single-jersey-lycra-fabric-image-1.jpeg", alt: "Single Jersey Lycra Fabric Image 1" },
      { type: "video", src: "https://ik.imagekit.io/l4zqjdpiax/public/videos/hero-video-1.mp4", alt: "placeholder video" }
    ],
    shortDescription: "Lightweight Lycra fabric with excellent stretch.",
    longDescription: "Single Jersey Lycra is widely used for T-shirts and activewear.",
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
      { type: "image", src: "https://ik.imagekit.io/l4zqjdpiax/public/products/interlock-lycra/interlock-lycra-fabric-image-1.jpeg", alt: "Interlock Lycra Fabric Image 1" },
      { type: "video", src: "https://ik.imagekit.io/l4zqjdpiax/public/videos/hero-video-1.mp4", alt: "placeholder video" },
    ],
    shortDescription: "Dense interlock Lycra with structure.",
    longDescription: "Interlock Lycra provides opacity and stretch recovery.",
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
      { type: "image", src: "https://ik.imagekit.io/l4zqjdpiax/public/products/jacquard-lycra/jacquard-lycra-fabric-image-1.jpeg", alt: "Jacquard Lycra Fabric Image 1" },
      { type: "video", src: "https://ik.imagekit.io/l4zqjdpiax/public/videos/hero-video-1.mp4", alt: "placeholder video" },
    ],
    shortDescription: "Premium patterned Lycra fabric.",
    longDescription: "Jacquard Lycra combines texture with stretch.",
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
      { type: "image", src: "https://ik.imagekit.io/l4zqjdpiax/public/products/micro-peach-lycra/micro-peach-lycra-fabric-image-1.jpeg", alt: "Micro Peach Lycra Fabric Image 1" },
      { type: "video", src: "https://ik.imagekit.io/l4zqjdpiax/public/videos/hero-video-1.mp4", alt: "placeholder video" },

    ],
    shortDescription: "Ultra-soft Lycra with peach finish.",
    longDescription: "Ideal for yoga and comfort wear.",
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
      { type: "image", src: "https://ik.imagekit.io/l4zqjdpiax/public/products/nylon-lycra/nylon-lycra-fabric-image-1.jpeg", alt: "Nylon Lycra Fabric Image 1" },
      { type: "video", src: "https://ik.imagekit.io/l4zqjdpiax/public/videos/hero-video-1.mp4", alt: "placeholder video" },
    ],
    shortDescription: "High-performance Nylon Lycra.",
    longDescription: "Used for swimwear and compression garments.",
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
      { type: "image", src: "https://ik.imagekit.io/l4zqjdpiax/public/products/dot-knit/dot-knit-fabric-image-1.jpeg", alt: "Dot Knit Fabric Image 1" },
      { type: "video", src: "https://ik.imagekit.io/l4zqjdpiax/public/videos/hero-video-1.mp4", alt: "placeholder video" },
    ],
    shortDescription: "Breathable dot knit fabric.",
    longDescription: "Used for sports T-shirts.",
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
      { type: "image", src: "https://ik.imagekit.io/l4zqjdpiax/public/products/rice-knit/rice-knit-fabric-image-1.jpeg", alt: "Rice Knit Fabric Image 1" },
      { type: "video", src: "https://ik.imagekit.io/l4zqjdpiax/public/videos/hero-video-1.mp4", alt: "placeholder video" },
    ],
    shortDescription: "Textured rice knit fabric.",
    longDescription: "Durable knit for sportswear.",
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
      { type: "image", src: "https://ik.imagekit.io/l4zqjdpiax/public/products/cotton-sinker/cotton-sinker-fabric-image-1.jpeg", alt: "Cotton Sinker Fabric Image 1" },
      { type: "video", src: "https://ik.imagekit.io/l4zqjdpiax/public/videos/hero-video-1.mp4", alt: "placeholder video" },
    ],
    shortDescription: "Soft breathable cotton knit.",
    longDescription: "Used for everyday T-shirts.",
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
      { type: "image", src: "https://ik.imagekit.io/l4zqjdpiax/public/products/fleece-fabric/fleece-fabric-image-1.jpeg", alt: "Fleece Fabric Image 1" },
      { type: "video", src: "https://ik.imagekit.io/l4zqjdpiax/public/videos/hero-video-1.mp4", alt: "placeholder video" },
    ],
    shortDescription: "Warm fleece fabric.",
    longDescription: "Used for winter garments.",
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
