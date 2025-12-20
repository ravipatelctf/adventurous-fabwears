import type { Metadata } from "next"
import TestimonialsSection from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Testimonials | Adventurous Fabwears",
  description:
    "See what our clients say about Adventurous Fabwears and our premium Lycra® and performance fabrics.",
}

export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-12 space-y-6">
      {/* <h1 className="text-4xl font-bold">What Our Clients Say</h1>

      <p className="text-muted-foreground max-w-3xl">
        Trusted by manufacturers and brands for quality, consistency, and
        performance-driven fabrics.
      </p> */}

      <TestimonialsSection />
    </section>
  )
}
