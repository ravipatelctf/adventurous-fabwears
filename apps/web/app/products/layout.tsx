import FooterSection from "@/components/footer"
import { HeroHeader } from "@/components/header"
import type { ReactNode } from "react"

type ProductsLayoutProps = {
  children: ReactNode
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
