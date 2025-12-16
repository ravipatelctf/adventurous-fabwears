import FooterSection from "@/components/footer"
import { HeroHeader } from "@/components/header"
import type { ReactNode } from "react"
import type { Metadata } from "next"


type ProductsLayoutProps = {
  children: ReactNode
}

export const metadata: Metadata = {
  title: "Fabric Products",
  description:
    "Explore Lycra®, knitted, and performance fabrics for sportswear and activewear.",

  openGraph: {
    title: "Fabric Products | Adventurous Fabwears",
    description:
      "Export-quality performance fabrics from India.",
    url: "https://adventurousfabwears.co.in/products",
    images: [
      {
        url: "https://adventurousfabwears.co.in/adventurous-fabwears-collage.png",
        width: 1200,
        height: 630,
        alt: "Fabric Products – Adventurous Fabwears",
      },
    ],
  },
}


export default function Layout({ children }: ProductsLayoutProps) {
  return (
    <>
      <HeroHeader />

      <main className="pt-4 min-h-screen">
        {children}
      </main>

      <FooterSection />
    </>
  )
}
