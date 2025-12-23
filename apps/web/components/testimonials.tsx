"use client"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Card, CardContent, CardHeader } from "@workspace/ui/components/card"

type Testimonial = {
  name: string
  location: string
  rating: number
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: "Sudhanshu",
    location: "Jhansi, Uttar Pradesh",
    rating: 5,
    quote:
      "The fleece jacket fabric quality is excellent and suitable for winter wear production. The material feels durable, warm, and consistent across the batch.",
  },
  {
    name: "Nischhal Print Gallery",
    location: "Kanpur, Uttar Pradesh",
    rating: 5,
    quote:
      "Cotton T-shirt fabric quality is very good for printing work. The fabric finish and texture work well for bulk production and repeat orders.",
  },
  {
    name: "Anshul Singhania",
    location: "Shimla, Himachal Pradesh",
    rating: 5,
    quote:
      "Winter jacket fabric quality met our expectations. The material is strong, comfortable, and suitable for cold-weather garments.",
  },
  {
    name: "Dipendra Kumar",
    location: "Madhubani, Bihar",
    rating: 5,
    quote:
      "Polyester Spandex fabric has good stretch and recovery. The quality is reliable and works well for activewear and fitted garments.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        {/* ------------------------------------------------------------------ */}
        {/*                                Header                                */}
        {/* ------------------------------------------------------------------ */}

        <div className="mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Trusted by Fabric Buyers Across India
          </h2>
          <p className="text-muted-foreground">
            Garment manufacturers, traders, and sportswear brands trust us for
            consistent quality, reliable delivery, and performance-driven fabrics.
          </p>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/*                           Testimonials Grid                          */}
        {/* ------------------------------------------------------------------ */}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="pb-0" />

              <CardContent className="grid h-full grid-rows-[1fr_auto] gap-6">
                {/* Quote */}
                <p className="text-base font-medium leading-relaxed">
                  “{testimonial.quote}”
                </p>

                {/* User Info */}
                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12 bg-muted">
                    <AvatarFallback className="text-lg font-semibold">
                      {testimonial.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="text-sm font-medium">
                      {testimonial.name}
                    </p>
                    <span className="block text-sm text-muted-foreground">
                      {testimonial.location}
                    </span>
                    <span className="text-sm text-yellow-500">
                      {"★".repeat(testimonial.rating)}
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
