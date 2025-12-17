import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import { Suspense } from "react"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
import { GAPageView } from "@/components/ga-page-view"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://adventurousfabwears.co.in"),

  title: {
    default: "Adventurous Fabwears",
    template: "%s | Adventurous Fabwears",
  },

  description:
    "Premium Lycra® and performance-driven fabrics trusted by global sportswear and activewear brands.",

  openGraph: {
    type: "website",
    siteName: "Adventurous Fabwears",
    title: "Adventurous Fabwears",
    description:
      "Leaders in Lycra® and performance fabrics for sportswear, athleisure, and activewear.",
    url: "https://adventurousfabwears.co.in",

    images: [
      {
        url: "https://adventurousfabwears.co.in/og-af.png",
        width: 1200,
        height: 630,
        alt: "Adventurous Fabwears - Performance Fabrics",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Adventurous Fabwears",
    description:
      "Premium Lycra® and performance fabrics for global apparel brands.",
    images: [
      "https://adventurousfabwears.co.in/og-af.png",
    ],
  },
}



export default function Layout({ children }: { children: React.ReactNode }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="en" suppressHydrationWarning>
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
        <Providers>
          {/* ✅ REQUIRED for useSearchParams */}
          <Suspense fallback={null}>
            <GAPageView />
          </Suspense>

          {children}
        </Providers>
      </body>
    </html>
  )
}
