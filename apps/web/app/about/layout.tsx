import FooterSection from "@/components/footer"
import { HeroHeader } from "@/components/header"
import type { ReactNode } from "react"

type AboutLayoutProps = {
  children: ReactNode
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <>
      <HeroHeader />

      <main className="pt-24 min-h-screen">
        {children}
      </main>

      <FooterSection />
    </>
  )
}
