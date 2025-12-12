import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { Card, CardContent } from "@workspace/ui/components/card"

type Testimonial = {
    name: string
    role: string
    image: string
    quote: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Arun Mehta',
        role: 'Sourcing Manager, Global Sportswear Brand',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        quote: 'Their Lycra®-based fabrics have consistently met our performance and durability standards. The stretch recovery and overall feel are exceptional.',
    },
    {
        name: 'Maria Gomez',
        role: 'Production Head, Activewear Manufacturer (Spain)',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        quote: 'Reliable quality and timely export shipments every single time. Their activewear fabrics helped us elevate our premium leggings and sports tops.',
    },
    {
        name: 'Daniel Koh',
        role: 'CEO, Athleisure Startup (Singapore)',
        image: 'https://randomuser.me/api/portraits/men/45.jpg',
        quote: 'Their Lycra® fibers and performance blends are some of the best we’ve sourced. Perfect balance of comfort, stretch, and breathability.',
    },
    {
        name: 'Emily Carter',
        role: 'Brand Director, Fitness Apparel Company (UK)',
        image: 'https://randomuser.me/api/portraits/women/38.jpg',
        quote: 'The fabric consistency and colorfastness are outstanding. Our customers immediately noticed the improvement in garment quality.',
    },
    {
        name: 'Ravi Prakash',
        role: 'Owner, Sportswear Manufacturing Unit (India)',
        image: 'https://randomuser.me/api/portraits/men/15.jpg',
        quote: 'From lightweight jerseys to high-stretch compression fabrics, everything we ordered exceeded expectations. Fantastic exporter to work with.',
    },
    {
        name: 'Sarah Williams',
        role: 'Procurement Lead, Athleisure Brand (USA)',
        image: 'https://randomuser.me/api/portraits/women/50.jpg',
        quote: 'Their fabric quality and service reliability make them our preferred supplier for Lycra® and performance fabrics. Highly recommended.',
    },
    {
        name: 'Ahmed Fahad',
        role: 'Senior Buyer, Gulf Sportswear Group (UAE)',
        image: 'https://randomuser.me/api/portraits/men/20.jpg',
        quote: 'Excellent export experience. The fabrics maintain stretch stability even after multiple washes, which our brands value greatly.',
    },
    {
        name: 'Laura Steiner',
        role: 'Apparel Designer, European Athleisure Label',
        image: 'https://randomuser.me/api/portraits/women/30.jpg',
        quote: 'The softness and premium feel of their activewear fabrics distinguish our collection on shelves. Perfect for modern sports fashion.',
    },
    {
        name: 'Takeshi Mori',
        role: 'Technical Fabric Specialist, Japan',
        image: 'https://randomuser.me/api/portraits/men/27.jpg',
        quote: 'Exceptional stretch fabrics with precise GSM and consistent dye quality. They understand global export standards very well.',
    },
    {
        name: 'Hannah Peters',
        role: 'Operations Manager, Yoga Apparel Brand (Germany)',
        image: 'https://randomuser.me/api/portraits/women/18.jpg',
        quote: 'We trust them for all our yoga leggings and premium performance-wear lines. Comfort, stretch, and breathability are top class.',
    },
    {
        name: 'Olivier Dupont',
        role: 'Athletic Wear Producer (France)',
        image: 'https://randomuser.me/api/portraits/men/33.jpg',
        quote: 'The Lycra® blend fabrics provide impressive elasticity without compromising durability. Ideal for high-performance sportswear.',
    },
    {
        name: 'Clara Nunes',
        role: 'Quality Control Lead, Brazil Sports Co.',
        image: 'https://randomuser.me/api/portraits/women/26.jpg',
        quote: 'Consistent quality, solid communication, and dependable export handling. Exactly what we look for in a long-term fabric supplier.',
    },
]


const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
    const result: Testimonial[][] = []
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize))
    }
    return result
}

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3))

export default function WallOfLoveSection() {
    return (
        <section id="testimonials" >
            <div className="py-16 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold">Trusted by Global Apparel Brands</h2>
                        <p className="mt-6">From activewear startups to global sportswear manufacturers, brands worldwide trust our premium Lycra® and performance fabrics.</p>
                    </div>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
                        {testimonialChunks.map((chunk, chunkIndex) => (
                            <div
                                key={chunkIndex}
                                className="space-y-3">
                                {chunk.map(({ name, role, quote, image }, index) => (
                                    <Card key={index}>
                                        <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                                            <Avatar className="size-9">
                                                <AvatarImage
                                                    alt={name}
                                                    src={image}
                                                    loading="lazy"
                                                    width="120"
                                                    height="120"
                                                />
                                                <AvatarFallback>ST</AvatarFallback>
                                            </Avatar>

                                            <div>
                                                <h3 className="font-medium">{name}</h3>

                                                <span className="text-muted-foreground block text-sm tracking-wide">{role}</span>

                                                <blockquote className="mt-3">
                                                    <p className="text-gray-700 dark:text-gray-300">{quote}</p>
                                                </blockquote>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
