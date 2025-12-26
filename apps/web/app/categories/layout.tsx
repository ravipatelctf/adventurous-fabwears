import FooterSection from "@/components/footer"
import { HeroHeader } from "@/components/header"
import type { ReactNode } from "react"

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <HeroHeader />

      <main className="pt-10 min-h-screen">
        {children}
      </main>

      <FooterSection />
    </>
  )
}
