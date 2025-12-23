import Script from "next/script"
import { Suspense } from "react"
import type { Metadata } from "next"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
import { GAPageView } from "@/components/ga-page-view"

/* -------------------------------------------------------------------------- */
/*                                  Metadata                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  metadataBase: new URL("https://adventurousfabwears.co.in"),
  title: {
    default: "Adventurous Fabwears",
    template: "%s | Adventurous Fabwears",
  },
  description:
    "Premium sportswear and activewear fabrics engineered for stretch, durability, and long-term performance.",
  
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  
  openGraph: {
    type: "website",
    siteName: "Adventurous Fabwears",
    title: "Adventurous Fabwears",
    description:
      "Leaders in high-performance sportswear and activewear fabrics.",
    url: "https://adventurousfabwears.co.in",
    images: [
      {
        url: "/og-af.png",
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
      "Premium sportswear and activewear fabrics for global apparel brands.",
    images: ["/og-af.png"],
  },
}

/* -------------------------------------------------------------------------- */
/*                                   Layout                                   */
/* -------------------------------------------------------------------------- */

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
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
          <Suspense fallback={null}>
            <GAPageView />
          </Suspense>
          {children}
        </Providers>
      </body>
    </html>
  )
}
