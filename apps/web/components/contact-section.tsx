"use client"

import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@workspace/ui/components/card"
import { useTranslations } from "next-intl"

export default function ContactSection() {
  const t = useTranslations("contact")

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          {t("title")}
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-muted-foreground text-lg text-center">
          {t("subtitle")}
        </p>

        {/* Contact Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">

          {/* PHONE CARD */}
          <Card className="text-center flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">
                {t("cards.phone.title")}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col flex-1">
              <p className="text-muted-foreground text-lg font-medium">
                +91 99889 40158
              </p>
              <p className="text-muted-foreground text-lg font-medium">
                +91 62844 90113
              </p>

              <div className="mt-auto pt-6">
                <Button asChild className="w-full">
                  <Link href="https://wa.me/919988940158" target="_blank">
                    {t("cards.phone.cta")}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* EMAIL CARD */}
          <Card className="text-center flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">
                {t("cards.email.title")}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col flex-1">
              <p className="text-muted-foreground text-sm font-medium break-all">
                adventurousfabwears@gmail.com
              </p>

              <div className="mt-auto pt-6">
                <Button asChild className="w-full">
                  <Link href="mailto:adventurousfabwears@gmail.com">
                    {t("cards.email.cta")}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* ADDRESS CARD */}
          <Card className="text-center flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">
                {t("cards.address.title")}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col flex-1">
              <p className="text-muted-foreground text-md leading-relaxed">
                {t.rich("cards.address.value", {
                    br: () => <br />
                })}
              </p>

              <div className="mt-auto pt-6">
                <Button asChild className="w-full">
                  <Link
                    href="https://www.google.com/maps?q=30.8717201,75.9044335&z=17&hl=en"
                    target="_blank"
                  >
                    {t("cards.address.cta")}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}
