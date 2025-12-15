import Image from "next/image"
import { notFound } from "next/navigation"

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
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params
  const product = getProductBySlug(resolvedParams.slug)

  if (!product) return {}

  const previewImage =
    product.media.find((m) => m.type === "image")?.src

  return {
    title: `${product.name} | Adventurous Fabwears`,
    description: product.shortDescription,

    openGraph: {
      title: product.name,
      description: product.shortDescription,
      url: `https://adventurousfabwears.co.in/products/${product.slug}`,
      siteName: "Adventurous Fabwears",
      type: "article",
      images: [
        {
          url: previewImage!,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.shortDescription,
      images: [previewImage!],
    },
  }
}



export default async function Page({ params }: PageProps) {
  const resolvedParams = await params
  const product = getProductBySlug(resolvedParams.slug)

  if (!product) notFound()

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        
        {/* Media Carousel */}
        <div className="space-y-4">
        <div className="relative">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {product.media.map((item, index) => (
                <CarouselItem key={index}>
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={700}
                      height={700}
                      className="h-[420px] w-full object-cover rounded-xl"
                      unoptimized
                    />
                  ) : (
                    <video
                      src={item.src}
                      controls
                      muted
                      autoPlay
                      className="h-[420px] w-full object-cover rounded-xl"
                    />
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* LEFT ARROW */}
            <CarouselPrevious
              className="
                absolute left-3 top-1/2 -translate-y-1/2
                z-20
                bg-black/60 text-white
                border-none
              "
            />

            {/* RIGHT ARROW */}
            <CarouselNext
              className="
                absolute right-3 top-1/2 -translate-y-1/2
                z-20
                bg-black/60 text-white
                border-none
              "
            />
          </Carousel>
        </div>
        </div>

        {/* Product Content */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold">
              {product.name}
            </h1>
            <p className="text-muted-foreground text-lg">
              {product.shortDescription}
            </p>
          </div>

          {/* CTA */}
          <Button asChild size="lg">
            <a
              href={getProductWhatsAppLink(product)}
              target="_blank"
            >
              Request Best Quote on WhatsApp
            </a>
          </Button>

          {/* Specifications */}
          <div className="border rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-semibold">
              Fabric Specifications
            </h3>

            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium w-1/3">
                    Fabric Type
                  </TableCell>
                  <TableCell>{product.fabricType}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    Composition
                  </TableCell>
                  <TableCell>{product.composition}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    GSM Range
                  </TableCell>
                  <TableCell>{product.gsm}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    Width
                  </TableCell>
                  <TableCell>{product.width}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    Stretch
                  </TableCell>
                  <TableCell>{product.stretch}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    Texture / Feel
                  </TableCell>
                  <TableCell>{product.texture}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    Available Colors
                  </TableCell>
                  <TableCell>{product.colors}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    MOQ
                  </TableCell>
                  <TableCell>{product.moq}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    Packaging
                  </TableCell>
                  <TableCell>{product.packaging}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium align-top">
                    Applications
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc list-inside space-y-1">
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
            <p className="text-muted-foreground leading-relaxed">
              {product.longDescription}
            </p>
          </div>
          
        </div>
      </div>
    </section>
  )
}
