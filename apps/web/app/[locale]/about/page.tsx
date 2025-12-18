import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Adventurous Fabwears",
  description:
    "Learn about Adventurous Fabwears – a trusted manufacturer and exporter of Lycra® and performance fabrics for sportswear, athleisure, and activewear brands.",
}

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12 space-y-6">
      <h1 className="text-4xl font-bold">About Adventurous Fabwears</h1>

      <p className="text-muted-foreground">
        Adventurous Fabwears is a leading manufacturer and exporter of
        premium Lycra® and performance fabrics engineered for sportswear,
        activewear, and athleisure applications.
      </p>

      <p>
        Based in Ludhiana, India’s textile hub, we specialize in supplying
        high-stretch, breathable, and durable fabrics that meet the evolving
        demands of global apparel brands.
      </p>

      <p>
        Our focus on quality control, consistent GSM, color fastness, and
        bulk-ready production makes us a reliable sourcing partner for
        manufacturers worldwide.
      </p>

      <h2 className="text-2xl font-semibold pt-6">Why Choose Us?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Lycra® and stretch-specialized fabric expertise</li>
        <li>Export-ready quality standards</li>
        <li>Reliable bulk supply & competitive pricing</li>
        <li>Trusted by sportswear & athleisure brands</li>
      </ul>
    </section>
  )
}
