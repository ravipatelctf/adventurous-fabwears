export type Product = {
  slug: string
  name: string
  image: string

  shortDescription: string
  longDescription?: string

  gsm: string
  moq: string
  width: string
  composition: string
  stretch?: string

  applications: string[]
}

export const products: Product[] = [
  {
    slug: "ns-lycra-fabric",
    name: "NS Lycra Fabric",
    image: "/product-images/ns-lycra-fabric/ns-lycra-fabric-500x500.webp",

    shortDescription:
      "High-performance NS Lycra fabric engineered for superior stretch, durability, and comfort.",

    longDescription:
      "NS Lycra fabric is a premium knitted fabric widely used in sportswear, activewear, and performance apparel. It provides excellent 4-way stretch with strong recovery, ensuring long-lasting shape retention even after repeated use. The fabric is breathable, smooth to touch, and ideal for garments that demand flexibility, strength, and comfort during intense physical activity.",

    gsm: "160 – 220 GSM",
    moq: "300 kg per color",
    width: "58 – 60 inches",
    composition: "Polyester + Spandex (Lycra®)",
    stretch: "4-way stretch",

    applications: ["Sportswear", "Activewear", "Athleisure"],
  },

  {
    slug: "dryfit-fabric",
    name: "Dry Fit Fabric",
    image: "/product-images/dryfit/super-poly-fabric-500x500.webp",

    shortDescription:
      "Lightweight dry-fit fabric designed for excellent moisture management and breathability.",

    longDescription:
      "Dry Fit fabric is specially engineered to wick moisture away from the body, keeping athletes dry and comfortable during workouts. The fabric dries quickly, remains lightweight, and allows airflow, making it suitable for high-performance sports and fitness apparel.",

    gsm: "140 – 180 GSM",
    moq: "300 kg per color",
    width: "58 inches",
    composition: "100% Polyester",

    applications: ["Gym Wear", "Running Wear", "Training Apparel"],
  },

  {
    slug: "interlock-fabric",
    name: "Polyester Interlock Fabric",
    image: "/product-images/interlock/polyester-interlock-fabric-500x500.webp",

    shortDescription:
      "Smooth and durable interlock fabric with excellent structure and comfort.",

    longDescription:
      "Polyester Interlock fabric is a double-knit fabric known for its smooth surface on both sides and enhanced durability. It offers good stretch, excellent opacity, and a premium finish, making it suitable for structured sportswear and casual apparel.",

    gsm: "180 – 240 GSM",
    moq: "300 kg per color",
    width: "60 inches",
    composition: "100% Polyester",

    applications: ["Tracksuits", "T-shirts", "Sports Tops"],
  },

  {
    slug: "knitted-mesh",
    name: "Knitted Mesh Fabric",
    image: "/product-images/mesh/karera-plain-fabric-500x500.webp",

    shortDescription:
      "Breathable knitted mesh fabric ideal for ventilation and airflow.",

    longDescription:
      "Knitted Mesh fabric is designed to provide maximum airflow and ventilation. Its open-knit structure makes it ideal for performance sportswear where breathability is critical. Commonly used as panels or full garments in jerseys and training apparel.",

    gsm: "120 – 160 GSM",
    moq: "300 kg per color",
    width: "58 inches",
    composition: "100% Polyester",

    applications: ["Jerseys", "Ventilation Panels", "Training Wear"],
  },

  {
    slug: "micro-polyester",
    name: "Micro Polyester Fabric",
    image: "/product-images/micro-poly/micro-polyester-fabric-500x500.webp",

    shortDescription:
      "Fine micro polyester fabric with a soft hand-feel and high durability.",

    longDescription:
      "Micro Polyester fabric features finely woven fibers that provide a smooth, soft texture along with excellent durability. It is lightweight, comfortable, and maintains color vibrancy even after multiple washes, making it ideal for premium sports and activewear.",

    gsm: "150 – 190 GSM",
    moq: "300 kg per color",
    width: "58 inches",
    composition: "100% Micro Polyester",

    applications: ["Sports T-shirts", "Activewear", "Casual Wear"],
  },
]

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}
