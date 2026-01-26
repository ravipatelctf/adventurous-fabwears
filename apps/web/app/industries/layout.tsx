import FooterSection from "@/components/footer"
import { HeroHeader } from "@/components/header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Industries We Serve | Adventurous Fabwears",
    template: "%s | Adventurous Fabwears",
  },
  description:
    "Explore the industries we serve as a leading fabric manufacturer and exporter in India, supplying sportswear, activewear, performance, and technical fabrics.",
}

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
