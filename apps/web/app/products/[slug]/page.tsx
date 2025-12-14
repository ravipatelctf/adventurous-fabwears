import Image from "next/image"
import { notFound } from "next/navigation"

import { getProductBySlug } from "@/lib/products"
import { Button } from "@workspace/ui/components/button"
import { getProductWhatsAppLink } from "@/lib/whatsapp"

type PageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug)

  if (!product) return {}

  return {
    title: `${product.name} | Adventurous Fabwears`,
    description: product.shortDescription,
  }
}

export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound()
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Product Image */}
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="rounded-xl object-cover w-full"
          unoptimized
        />

        {/* Product Content */}
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            {product.name}
          </h1>

          {/* CTA */}
          <Button asChild size="lg">
            <a
              href={getProductWhatsAppLink(product)}
              target="_blank"
            >
              Request Best Quote on WhatsApp
            </a>
          </Button>

          <p className="text-muted-foreground text-lg">
            {product.shortDescription}
          </p>

          {/* Specifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div><strong>GSM:</strong> {product.gsm}</div>
            <div><strong>Width:</strong> {product.width}</div>
            <div><strong>MOQ:</strong> {product.moq}</div>
            <div><strong>Composition:</strong> {product.composition}</div>
            {product.stretch && (
              <div><strong>Stretch:</strong> {product.stretch}</div>
            )}
          </div>

          {/* Long Description */}
          {product.longDescription && (
            <p className="text-muted-foreground leading-relaxed">
              {product.longDescription}
            </p>
          )}

          {/* Applications */}
          <div>
            <h3 className="font-semibold mb-2">Applications</h3>
            <ul className="list-disc list-inside text-muted-foreground">
              {product.applications.map((app) => (
                <li key={app}>{app}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
