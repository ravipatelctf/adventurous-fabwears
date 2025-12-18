import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const SUPPORTED_LOCALES = ["en", "de"]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Ignore Next.js internals and static files
  if (
    pathname.startsWith("/_next") ||
    pathname.includes(".")
  ) {
    return
  }

  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )


  if (!pathnameHasLocale) {
    return NextResponse.redirect(
      new URL(`/en${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: ["/((?!_next).*)"],
}
