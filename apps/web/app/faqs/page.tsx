import type { Metadata } from "next"
import FAQs from "@/components/faqs-2"

export const metadata: Metadata = {
  title: "FAQs | Adventurous Fabwears",
  description:
    "Frequently asked questions about our fabrics, MOQ, exports, quality standards, and production process.",
}

export default function FAQsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-12 space-y-6">
      <FAQs />
    </section>
  )
}
