import FooterSection from "@/components/footer"
import { HeroHeader } from "@/components/header"
import type { ReactNode } from "react"

type FAQsLayoutProps = {
  children: ReactNode
}

export default function FAQsLayout({ children }: FAQsLayoutProps) {
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
