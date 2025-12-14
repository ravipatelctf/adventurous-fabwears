import FooterSection from "@/components/footer"
import { HeroHeader } from "@/components/header"
import type { ReactNode } from "react"



type ProductsLayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: ProductsLayoutProps) {
  return (
    <>
      {/* Global Header */}
      <HeroHeader />

      {/* Page Content */}
      <main className="pt-10 min-h-screen">
        {children}
      </main>

      {/* Global Footer */}
      <FooterSection />
    </>
  )
}
