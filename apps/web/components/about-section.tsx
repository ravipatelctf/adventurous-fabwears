import Link from "next/link"
import { Button } from "@workspace/ui/components/button"

export default function AboutSection() {
    return (
        <section id="about" className="py-16 md:py-24 bg-background">
            <div className="mx-auto max-w-3xl px-6 text-center">

                {/* Heading */}
                <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
                    About Us
                </h2>

                {/* Text Content */}
                <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
                    Adventurous Fabwears is a leading manufacturer and supplier of premium fabrics
                    based in Ludhiana, Punjab, India. Since 2016, we have specialized in garments fabric,
                    knitted fabric, and performance sportswear materials trusted by apparel brands across India.
                </p>

                <ul className="mt-6 text-muted-foreground space-y-3 leading-relaxed text-left max-w-md mx-auto">
                    <li><strong>Garments Fabric:</strong> Men's T-shirts, lowers, jackets</li>
                    <li><strong>Knitted Fabric:</strong> Lycra®, polyester, knitted mesh</li>
                    <li><strong>Sportswear Fabric:</strong> Moisture-wicking, breathable, quick-dry</li>
                </ul>

                <p className="mt-6 text-muted-foreground leading-relaxed">
                    Under the guidance of <strong>Mr. Mahinder Singh</strong>, Adventurous Fabwears continues
                    to uphold strong standards of quality, reliability, and customer satisfaction—serving
                    garment manufacturers, exporters, and private-label brands nationwide.
                </p>

                {/* CTA BUTTON */}
                <div className="mt-10">
                    <Button asChild size="lg" className="px-8">
                        <Link href="/#link">
                            Know More
                        </Link>
                    </Button>
                </div>

            </div>
        </section>
    )
}
