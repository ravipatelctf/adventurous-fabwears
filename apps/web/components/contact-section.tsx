import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"

export default function ContactSection() {
    return (
        <section id="contact" className="py-16 md:py-24 bg-background">
            <div className="mx-auto max-w-5xl px-6">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-center">
                    Contact Us
                </h2>

                {/* Subheading */}
                <p className="mt-4 text-muted-foreground text-lg text-center">
                    We would love to hear from you. Reach out for fabric inquiries,
                    bulk orders, or custom manufacturing requirements.
                </p>

                {/* Contact Cards */}
                <div className="mt-12 grid gap-8 md:grid-cols-3">

                    {/* PHONE CARD */}
                    <Card className="text-center flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-xl">Phone</CardTitle>
                        </CardHeader>

                        <CardContent className="flex flex-col flex-1">
                            <p className="text-muted-foreground text-lg font-medium">
                                +91 99889 40158
                            </p>
                            <p className="text-muted-foreground text-lg font-medium">
                                +91 62844 90113
                            </p>

                            {/* Push button to bottom */}
                            <div className="mt-auto pt-6">
                                <Button asChild className="w-full">
                                    <Link href="https://wa.me/919988940158" target="_blank">
                                        WhatsApp Us
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* EMAIL CARD */}
                    <Card className="text-center flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-xl">Email</CardTitle>
                        </CardHeader>

                        <CardContent className="flex flex-col flex-1">
                            <p className="text-muted-foreground text-sm font-medium break-all">
                                adventurousfabwears@gmail.com
                            </p>

                            {/* Push button to bottom */}
                            <div className="mt-auto pt-6">
                                <Button asChild className="w-full" variant="secondary">
                                    <Link href="mailto:adventurousfabwears@gmail.com">
                                        Send Email
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* ADDRESS CARD */}
                    <Card className="text-center flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-xl">Address</CardTitle>
                        </CardHeader>

                        <CardContent className="flex flex-col flex-1">
                            <p className="text-muted-foreground text-md leading-relaxed">
                                Plot No. 511/2-H/B-29,<br />
                                Shanti Nagar, Giaspura,<br />
                                Ludhiana - 141014, Punjab, India
                            </p>

                            {/* Push button to bottom */}
                            <div className="mt-auto pt-6">
                                <Button asChild className="w-full" variant="outline">
                                    <Link
                                        href="https://www.google.com/maps/search/511%2C%20Industrial%20Area%20C%2C%20Dhandari%20Kalan%2C%20Ludhiana%2C%20Punjab%20141003%2C%20India/@30.8579,75.9147,17z?hl=en"
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
