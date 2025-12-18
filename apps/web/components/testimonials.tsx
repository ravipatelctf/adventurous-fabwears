"use client"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Card, CardContent, CardHeader } from "@workspace/ui/components/card"
import { useTranslations } from "next-intl"

type Testimonial = {
  name: string
  location: string
  rating: number
  quoteKey: string
}

const testimonials: Testimonial[] = [
  {
    name: "Sudhanshu",
    location: "Jhansi, Uttar Pradesh",
    rating: 5,
    quoteKey: "fleece",
  },
  {
    name: "Nischhal Print Gallery",
    location: "Kanpur, Uttar Pradesh",
    rating: 5,
    quoteKey: "cotton",
  },
  {
    name: "Anshul Singhania",
    location: "Shimla, Himachal Pradesh",
    rating: 5,
    quoteKey: "winter",
  },
  {
    name: "Dipendra Kumar",
    location: "Madhubani, Bihar",
    rating: 5,
    quoteKey: "polyester",
  },
]

export default function Testimonials() {
  const t = useTranslations("testimonials")

  return (
    <section id="testimonials" className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">

        {/* Heading */}
        <div className="mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-medium lg:text-5xl">
            {t("title")}
          </h2>
          <p className="text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map(({ name, location, rating, quoteKey }, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="pb-0" />
              <CardContent className="grid h-full grid-rows-[1fr_auto] gap-6">

                {/* Quote */}
                <p className="text-base font-medium leading-relaxed">
                  “{t(`quotes.${quoteKey}`)}”
                </p>

                {/* User Info */}
                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12 bg-muted">
                    <AvatarFallback className="text-lg font-semibold">
                      {name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="text-sm font-medium">{name}</p>
                    <span className="text-muted-foreground block text-sm">
                      {location}
                    </span>
                    <span className="text-sm text-yellow-500">
                      {"★".repeat(rating)}
                    </span>
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
