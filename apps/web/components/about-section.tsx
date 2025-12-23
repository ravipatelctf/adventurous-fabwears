"use client"

import Link from "next/link"
import { Button } from "@workspace/ui/components/button"

export default function AboutSection() {
  return (
    <section id="about" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        {/* ------------------------------------------------------------------ */}
        {/*                               Heading                               */}
        {/* ------------------------------------------------------------------ */}

        <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
          About Us
        </h2>

        {/* ------------------------------------------------------------------ */}
        {/*                              Intro Text                             */}
        {/* ------------------------------------------------------------------ */}

        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          Adventurous Fabwears is a leading manufacturer and supplier of premium
          fabrics based in Ludhiana, Punjab, India. Since 2016, we have specialized
          in garments fabric, knitted fabric, and performance sportswear materials
          trusted by apparel brands across India.
        </p>

        {/* ------------------------------------------------------------------ */}
        {/*                               Bullet List                           */}
        {/* ------------------------------------------------------------------ */}

        <ul className="mx-auto mt-6 max-w-md space-y-3 text-left leading-relaxed text-muted-foreground">
          <li>
            <strong>Garments Fabric:</strong> Men&apos;s T-shirts, lowers, jackets
          </li>
          <li>
            <strong>Knitted Fabric:</strong> Polyester, spandex, knitted mesh
          </li>
          <li>
            <strong>Sportswear Fabric:</strong> Moisture-wicking, breathable,
            quick-dry
          </li>
        </ul>

        {/* ------------------------------------------------------------------ */}
        {/*                            Leadership Text                          */}
        {/* ------------------------------------------------------------------ */}

        <p className="mt-6 leading-relaxed text-muted-foreground">
          Under the guidance of <strong>Mr. Mahinder Singh</strong>, Adventurous
          Fabwears continues to uphold strong standards of quality, reliability,
          and customer satisfaction—serving garment manufacturers, exporters, and
          private-label brands nationwide.
        </p>

        {/* ------------------------------------------------------------------ */}
        {/*                                 CTA                                 */}
        {/* ------------------------------------------------------------------ */}

        <div className="mt-10">
          <Button asChild size="lg" className="px-8">
            <Link href="/about">Know More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
