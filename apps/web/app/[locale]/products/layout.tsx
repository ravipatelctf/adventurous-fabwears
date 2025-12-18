import FooterSection from "@/components/footer"
import { HeroHeader } from "@/components/header"
import type { ReactNode } from "react"
import type { Metadata } from "next"

type ProductsLayoutProps = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Fabric Products",
    description:
      "Explore Lycra®, knitted, and performance fabrics for sportswear and activewear.",

    openGraph: {
      title: "Fabric Products | Adventurous Fabwears",
      description: "Export-quality performance fabrics from India.",
      url: `https://adventurousfabwears.co.in/${locale}/products`,
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
}

export default async function Layout({
  children,
  params,
}: ProductsLayoutProps) {
  // Required in Next 16 — even if unused
  await params

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
