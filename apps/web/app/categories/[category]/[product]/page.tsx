import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { Image, Video, ImageKitProvider } from "@imagekit/next"

import { getProductBySlug, products } from "@/lib/products"
import { getProductWhatsAppLink } from "@/lib/whatsapp"

import { Button } from "@workspace/ui/components/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@workspace/ui/components/table"

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

type Props = {
  params: {
    category: string
    product: string
  }
}

/* -------------------------------------------------------------------------- */
/*                                   SEO META                                 */
/* -------------------------------------------------------------------------- */

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.product)
  if (!product) return {}

  const imagePath =
    product.media.find(m => m.type === "image")?.src ?? "/og-af.png"

  const imageUrl = `https://adventurousfabwears.co.in${imagePath}`

  return {
    title: `${product.name} | Adventurous Fabwears`,
    description: product.shortDescription,
    alternates: {
      canonical: `/categories/${product.category}/${product.slug}`,
    },
    openGraph: {
      type: "website",
      siteName: "Adventurous Fabwears",
      title: product.name,
      description: product.shortDescription,
      url: `https://adventurousfabwears.co.in/categories/${product.category}/${product.slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.shortDescription,
      images: [imageUrl],
    },
  }
}

/* -------------------------------------------------------------------------- */
/*                              STATIC GENERATION                              */
/* -------------------------------------------------------------------------- */

export function generateStaticParams() {
  return products.map(p => ({
    category: p.category,
    product: p.slug,
  }))
}

/* -------------------------------------------------------------------------- */
/*                                   PAGE                                     */
/* -------------------------------------------------------------------------- */

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.product)

  if (!product || product.category !== resolvedParams.category) {
    notFound()
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-5">
        {/* ------------------------------------------------------------------ */}
        {/*                           MEDIA SECTION                              */}
        {/* ------------------------------------------------------------------ */}

        <div className="col-span-3 space-y-6">
          <ImageKitProvider
            urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!}
          >
            {/* Images */}
            <Carousel opts={{ loop: true }}>
              <CarouselContent>
                {product.media.map(
                  (item, index) =>
                    item.type === "image" && (
                      <CarouselItem key={index}>
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={700}
                          height={420}
                          className="h-[420px] w-full rounded-xl object-cover"
                          transformation={[
                            { width: 1400 },
                            { quality: 80 },
                          ]}
                        />
                      </CarouselItem>
                    )
                )}
              </CarouselContent>

              <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white" />
              <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white" />
            </Carousel>

            {/* Videos */}
            {product.media.some(m => m.type === "video") && (
              <Carousel opts={{ loop: true }}>
                <CarouselContent>
                  {product.media.map(
                    (item, index) =>
                      item.type === "video" && (
                        <CarouselItem key={index}>
                          <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
                            <Video
                              src={item.src}
                              controls
                              muted
                              preload="none"
                              poster={`${item.src}/ik-thumbnail.jpg`}
                              className="absolute inset-0 h-full w-full object-cover"
                              transformation={[
                                { width: 1920, height: 1080 },
                                { format: "mp4" },
                              ]}
                            />
                          </div>
                        </CarouselItem>
                      )
                  )}
                </CarouselContent>

                <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white" />
                <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white" />
              </Carousel>
            )}
          </ImageKitProvider>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/*                           PRODUCT CONTENT                            */}
        {/* ------------------------------------------------------------------ */}

        <div className="col-span-2 space-y-10">
          {/* Title */}
          <header>
            <h1 className="text-3xl font-bold md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              {product.shortDescription}
            </p>
          </header>

          {/* CTA */}
          <Button asChild size="lg">
            <a
              href={getProductWhatsAppLink(product)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Request Best Quote on WhatsApp
            </a>
          </Button>

          {/* Specifications */}
          <div className="rounded-xl border p-6 space-y-4">
            <h3 className="text-lg font-semibold">
              Fabric Specifications
            </h3>

            <Table>
              <TableBody>
                <SpecRow label="Fabric Type" value={product.fabricType} />
                <SpecRow label="Composition" value={product.composition} />
                <SpecRow label="GSM Range" value={product.gsm} />
                <SpecRow label="Width" value={product.width} />
                <SpecRow label="Stretch" value={product.stretch} />
                <SpecRow label="Texture / Feel" value={product.texture} />
                <SpecRow label="Available Colors" value={product.colors} />
                <SpecRow label="MOQ" value={product.moq} />
                <SpecRow label="Packaging" value={product.packaging} />

                <TableRow>
                  <TableCell className="w-1/3 font-medium">
                    Applications
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
                      {product.applications.map(app => (
                        <li key={app}>{app}</li>
                      ))}
                    </ul>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">
              Product Description
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              {product.longDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                               HELPERS                                      */
/* -------------------------------------------------------------------------- */

function SpecRow({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <TableRow>
      <TableCell className="w-1/3 font-medium">
        {label}
      </TableCell>
      <TableCell>{value}</TableCell>
    </TableRow>
  )
}
