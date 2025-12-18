import Image from "next/image"
import { notFound } from "next/navigation"
import { getTranslations } from "next-intl/server"

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
import type { Metadata } from "next"


type PageProps = {
  params: { slug: string, locale: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug)
  if (!product) return {}

  const imagePath =
    product.media.find((m) => m.type === "image")?.src ??
    "/og-af.png"

  const imageUrl = `https://adventurousfabwears.co.in${imagePath}`

  return {
    title: product.name,
    description: product.shortDescription,

    openGraph: {
      type: "website",
      title: product.name,
      description: product.shortDescription,
      url: `https://adventurousfabwears.co.in/${resolvedParams.locale}/products/${product.slug}`,
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




export default async function Page({ params }: PageProps) {
  const resolvedParams = await params

  const t = await getTranslations("products");
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
              {t("cta.quote")}
            </a>
          </Button>

          {/* Specifications */}
          <div className="border rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-semibold">
              {t("specifications.title")}
            </h3>

            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium w-1/3">
                    {t("specifications.fabricType")}
                  </TableCell>
                  <TableCell>{product.fabricType}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    {t("specifications.composition")}
                  </TableCell>
                  <TableCell>{product.composition}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    {t("specifications.gsm")}
                  </TableCell>
                  <TableCell>{product.gsm}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    {t("specifications.width")}
                  </TableCell>
                  <TableCell>{product.width}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    {t("specifications.stretch")}
                  </TableCell>
                  <TableCell>{product.stretch}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    {t("specifications.texture")}
                  </TableCell>
                  <TableCell>{product.texture}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    {t("specifications.colors")}
                  </TableCell>
                  <TableCell>{product.colors}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    {t("specifications.moq")}
                  </TableCell>
                  <TableCell>{product.moq}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">
                    {t("specifications.packaging")}
                  </TableCell>
                  <TableCell>{product.packaging}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium align-top">
                    {t("specifications.applications")}
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
              {t("description.title")}
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
