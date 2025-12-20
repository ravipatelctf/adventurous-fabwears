"use client"

import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export default function ContactSection() {
  return (
    <section id="contact" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* ------------------------------------------------------------------ */}
        {/*                                Heading                               */}
        {/* ------------------------------------------------------------------ */}

        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Contact Us
        </h2>

        {/* ------------------------------------------------------------------ */}
        {/*                               Subheading                             */}
        {/* ------------------------------------------------------------------ */}

        <p className="mt-4 text-center text-lg text-muted-foreground">
          We would love to hear from you. Reach out for fabric inquiries,
          bulk orders, or custom manufacturing requirements.
        </p>

        {/* ------------------------------------------------------------------ */}
        {/*                             Contact Cards                            */}
        {/* ------------------------------------------------------------------ */}

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* ----------------------------- PHONE CARD ------------------------ */}

          <Card className="flex flex-col text-center">
            <CardHeader>
              <CardTitle className="text-xl">Phone</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col">
              <p className="text-lg font-medium text-muted-foreground">
                +91 99889 40158
              </p>
              <p className="text-lg font-medium text-muted-foreground">
                +91 62844 90113
              </p>

              <div className="mt-auto pt-6">
                <Button asChild className="w-full">
                  <Link
                    href="https://wa.me/919988940158"
                    target="_blank"
                  >
                    WhatsApp Us
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* ----------------------------- EMAIL CARD ------------------------ */}

          <Card className="flex flex-col text-center">
            <CardHeader>
              <CardTitle className="text-xl">Email</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col">
              <p className="break-all text-sm font-medium text-muted-foreground">
                adventurousfabwears@gmail.com
              </p>

              <div className="mt-auto pt-6">
                <Button asChild className="w-full">
                  <Link href="mailto:adventurousfabwears@gmail.com">
                    Send Email
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* ---------------------------- ADDRESS CARD ----------------------- */}

          <Card className="flex flex-col text-center">
            <CardHeader>
              <CardTitle className="text-xl">Address</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col">
              <p className="text-md leading-relaxed text-muted-foreground">
                Plot No. 511/2-H/B-29,
                <br />
                Shanti Nagar, Giaspura,
                <br />
                Ludhiana - 141014, Punjab, India
              </p>

              <div className="mt-auto pt-6">
                <Button asChild className="w-full">
                  <Link
                    href="https://www.google.com/maps?q=30.8717201,75.9044335&z=17&hl=en"
                    target="_blank"
                  >
                    View on Map
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
