import FooterSection from "@/components/footer"
import { HeroHeader } from "@/components/header"
import type { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fabric Products",
  description:
    "Explore Sportswear, knitted, and performance fabrics for sportswear and activewear.",

  openGraph: {
    title: "Fabric Products | Adventurous Fabwears",
    description: "Export-quality performance fabrics from India.",
    url: "https://adventurousfabwears.co.in/products",
    images: [
      {
        url: "https://adventurousfabwears.co.in/og-af.png",
        width: 1200,
        height: 630,
        alt: "Fabric Products - Adventurous Fabwears",
      },
    ],
  },
}

type ProductsLayoutProps = {
  children: ReactNode
}

export default function ProductsLayout({
  children,
}: ProductsLayoutProps) {
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
