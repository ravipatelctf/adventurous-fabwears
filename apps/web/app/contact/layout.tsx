import FooterSection from "@/components/footer"
import { HeroHeader } from "@/components/header"
import type { ReactNode } from "react"

type ContactLayoutProps = {
  children: ReactNode
}

export default function ContactLayout({ children }: ContactLayoutProps) {
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
