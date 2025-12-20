import type { Metadata } from "next"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Contact Us | Adventurous Fabwears",
  description:
    "Get in touch with Adventurous Fabwears for fabric inquiries, bulk orders, and export partnerships. Serving sportswear brands worldwide.",
}

export default function Page() {
  return (
    <section className="mx-auto max-w-5xl px-6 space-y-6 pb-10">
      <ContactSection />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeQefVTkKtF4D1l7m4iJ_yy9TQmk7o0lWYbR-ZfrF50ogw93Q/viewform?embedded=true"
        width="100%"
        height="900"
      >
        Loading…
      </iframe>
    </section>
  )
}
