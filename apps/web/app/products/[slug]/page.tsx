// import Image from "next/image"
import { Image, Video, ImageKitProvider } from "@imagekit/next"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { getProductBySlug } from "@/lib/products"
import { Button } from "@workspace/ui/components/button"
import { getProductWhatsAppLink } from "@/lib/whatsapp"

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

type PageProps = {
  params: { slug: string }
}

/* -------------------------------------------------------------------------- */
/*                                   METADATA                                 */
/* -------------------------------------------------------------------------- */

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug)
  if (!product) return {}

  const imagePath =
    product.media.find((m) => m.type === "image")?.src ?? "/og-af.png"

  const imageUrl = `https://adventurousfabwears.co.in${imagePath}`

  return {
    title: product.name,
    description: product.shortDescription,

    openGraph: {
      type: "website",
      siteName: "Adventurous Fabwears",
      title: product.name,
      description: product.shortDescription,
      url: `https://adventurousfabwears.co.in/products/${product.slug}`,
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
/*                                   PAGE                                     */
/* -------------------------------------------------------------------------- */

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug)

  if (!product) notFound()

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-5">
        {/* ------------------------------------------------------------------ */}
        {/*                           MEDIA CAROUSEL                            */}
        {/* ------------------------------------------------------------------ */}

        <div className="space-y-4 col-span-3">
          <ImageKitProvider
            urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!}
          >
            {/* Images */}
            <Carousel opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {product.media.map(
                  (item, index) =>
                    item.type === "image" && (
                      <CarouselItem key={index}>
                        <Image
                          src={item.src} // relative path works perfectly
                          alt={item.alt}
                          width={700}
                          height={420}
                          className="h-[420px] w-full rounded-xl object-cover"
                          transformation={[
                            { width: 1400 }, // retina-quality
                            { quality: 80 },
                          ]}
                        />
                      </CarouselItem>
                    )
                )}
              </CarouselContent>

              <CarouselPrevious className="absolute left-3 top-1/2 z-20 -translate-y-1/2 border-none bg-black/60 text-white" />
              <CarouselNext className="absolute right-3 top-1/2 z-20 -translate-y-1/2 border-none bg-black/60 text-white" />
            </Carousel>

            {/* Videos */}
            <Carousel opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {product.media.map(
                  (item, index) =>
                    item.type === "video" && (
                      <CarouselItem key={index}>
                        <Video
                          src={item.src}
                          controls
                          preload="true"
                          muted
                          autoPlay
                          className="w-full rounded-xl object-cover"
                          transformation={[
                            { width: 1280 },
                            { format: "mp4" },
                          ]}
                        />
                      </CarouselItem>
                    )
                )}
              </CarouselContent>

              <CarouselPrevious className="absolute left-3 top-1/2 z-20 -translate-y-1/2 border-none bg-black/60 text-white" />
              <CarouselNext className="absolute right-3 top-1/2 z-20 -translate-y-1/2 border-none bg-black/60 text-white" />
            </Carousel>
          </ImageKitProvider>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/*                           PRODUCT CONTENT                           */}
        {/* ------------------------------------------------------------------ */}

        <div className="space-y-8 col-span-2">
          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold md:text-4xl">
              {product.name}
            </h1>
            <p className="text-lg text-muted-foreground">
              {product.shortDescription}
            </p>
          </div>

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
          <div className="space-y-4 rounded-xl border p-6">
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
                  <TableCell className="w-1/3 align-top font-medium">
                    Applications
                  </TableCell>
                  <TableCell>
                    <ul className="list-inside list-disc space-y-1">
                      {product.applications.map((app) => (
                        <li key={app}>{app}</li>
                      ))}
                    </ul>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Description */}
          <div className="space-y-4">
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
/*                               HELPER ROW                                   */
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
