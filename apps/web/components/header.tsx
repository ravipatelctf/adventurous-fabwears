"use client"

import Link from "next/link"
import React from "react"
import { Menu, X, Mail, Phone } from "lucide-react"

import { Logo } from "@/components/logo"
import { Button } from "@workspace/ui/components/button"

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [emailHref, setEmailHref] = React.useState<string | null>(null)

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
    { name: "FAQs", href: "/faqs" },
    { name: "Certificates", href: "/certificates" },
  ]

  React.useEffect(() => {
    const isMobile =
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

    setEmailHref(
      isMobile
        ? "mailto:adventurousfabwears@gmail.com"
        : "https://mail.google.com/mail/?view=cm&fs=1&to=adventurousfabwears@gmail.com"
    )
  }, [])

  return (
    <header>
      <nav className="fixed z-20 w-full border-b bg-background backdrop-blur-3xl">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between py-3 lg:py-4">

            {/* LOGO */}
            <Link
              href="/"
              aria-label="home"
              className="flex items-center gap-2 shrink-0"
            >
              <Logo />
              <span className="font-medium">Adventurous Fabwears</span>
            </Link>

            {/* DESKTOP: NAV + CTA */}
            <div className="hidden lg:flex flex-1 items-center justify-between ml-12">

              {/* NAV LINKS */}
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA ACTIONS */}
              <div className="flex items-center gap-2">
                <Button asChild variant="ghost" size="sm">
                  <a
                    href="https://wa.me/919988940158"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    <Phone className="size-4" />
                    <span className="hidden xl:inline">
                      +91 99889 40158
                    </span>
                  </a>
                </Button>

                <Button asChild variant="ghost" size="sm">
                  <a
                    href={emailHref ?? "#"}
                    target={emailHref?.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    <Mail className="size-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setMenuState(!menuState)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {menuState ? <X /> : <Menu />}
            </button>
          </div>

          {/* MOBILE MENU */}
          {menuState && (
            <div className="lg:hidden mt-4 rounded-xl border bg-background p-6 shadow-xl space-y-6">
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuState(false)}
                      className="block text-muted-foreground hover:text-accent-foreground"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex gap-2">
                <Button asChild variant="ghost" size="sm">
                  <a href="https://wa.me/919988940158" target="_blank">
                    <Phone />
                  </a>
                </Button>

                <Button asChild variant="ghost" size="sm">
                  <a href={emailHref ?? "#"}>
                    <Mail />
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
