import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import { Suspense } from "react"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
import { GAPageView } from "@/components/ga-page-view"

export const metadata = {
  icons: {
    icon: "/favicon.jpeg",
  },
}


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
