import type { Metadata } from "next"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Contact Us | Adventurous Fabwears",
  description:
    "Get in touch with Adventurous Fabwears for fabric inquiries, bulk orders, and export partnerships. Serving sportswear brands worldwide.",
}

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12 space-y-6">
      <h1 className="text-4xl font-bold">Contact Us</h1>

      <p className="text-muted-foreground max-w-3xl">
        Reach out to Adventurous Fabwears for product inquiries, bulk fabric
        pricing, or export-related discussions. Our team will respond promptly.
      </p>

      <ContactSection />
    </section>
  )
}
