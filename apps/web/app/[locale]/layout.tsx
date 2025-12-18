import Script from "next/script"
import { Suspense } from "react"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
import { GAPageView } from "@/components/ga-page-view"
import type { Metadata } from "next"

const SUPPORTED_LOCALES = ["en", "de"]

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params

  if (!SUPPORTED_LOCALES.includes(locale)) notFound()

  return {
    metadataBase: new URL("https://adventurousfabwears.co.in"),
    title: {
      default: "Adventurous Fabwears",
      template: "%s | Adventurous Fabwears",
    },
    description:
      "Premium sportswear and activewear fabrics engineered for stretch, durability, and long-term performance.",
    openGraph: {
      type: "website",
      siteName: "Adventurous Fabwears",
      title: "Adventurous Fabwears",
      description:
        "Leaders in high-performance sportswear and activewear fabrics.",
      url: `https://adventurousfabwears.co.in/${locale}`,
      images: [
        {
          url: "/og-af.png",
          width: 1200,
          height: 630,
          alt: "Adventurous Fabwears – Performance Fabrics",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Adventurous Fabwears",
      description:
        "Premium sportswear and activewear fabrics for global apparel brands.",
      images: ["/og-af.png"],
    },
  }
}

export default async function Layout({
  children,
  params,
}: LayoutProps) {
  const { locale } = await params

  if (!SUPPORTED_LOCALES.includes(locale)) notFound()

  const messages = (await import(`../../messages/${locale}.json`)).default
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>

      <body className="font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <Suspense fallback={null}>
              <GAPageView />
            </Suspense>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
