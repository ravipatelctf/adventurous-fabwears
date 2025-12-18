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
      {/* <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>

      <p className="text-muted-foreground max-w-3xl">
        Find answers to common questions about our Lycra® fabrics,
        manufacturing process, bulk orders, and exports.
      </p> */}

      <FAQs />
    </section>
  )
}
