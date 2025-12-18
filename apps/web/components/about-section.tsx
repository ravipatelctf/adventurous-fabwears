"use client";

import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { useLocale, useTranslations } from "next-intl";

export default function AboutSection() {
    const t = useTranslations("about");
    const locale = useLocale();

    return (
        <section id="about" className="py-16 md:py-24 bg-background">
            <div className="mx-auto max-w-3xl px-6 text-center">

                {/* Heading */}
                <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
                    {t("title")}
                </h2>

                {/* Text Content */}
                <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
                    {t("intro")}
                </p>

                <ul className="mt-6 text-muted-foreground space-y-3 leading-relaxed text-left max-w-md mx-auto">
                    <li><strong>{t("bullets.garments.label")}:</strong> {t("bullets.garments.value")}</li>
                    <li><strong>{t("bullets.knitted.label")}:</strong> {t("bullets.knitted.value")}</li>
                    <li><strong>{t("bullets.sportswear.label")}:</strong> {t("bullets.sportswear.value")}</li>
                </ul>

                <p className="mt-6 text-muted-foreground leading-relaxed">
                    {t.rich("leadership", {
                        name: () => <strong>Mr. Mahinder Singh</strong>
                    })}
                </p>

                {/* CTA BUTTON */}
                <div className="mt-10">
                    <Button asChild size="lg" className="px-8">
                        <Link href={`/${locale}/about`}>
                            {t("cta")}
                        </Link>
                    </Button>
                </div>

            </div>
        </section>
    )
}
