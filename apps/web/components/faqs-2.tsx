"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@workspace/ui/components/accordion"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"

export default function FAQsTwo() {
  const t = useTranslations("faqs")
  const locale = useLocale()

  const faqItems = [
    "export",
    "specialize",
    "samples",
    "moq",
    "customization",
    "timeline",
    "quality"
  ]

  return (
    <section id="faqs" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            {t("subtitle")}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0"
          >
            {faqItems.map((key) => (
              <AccordionItem
                key={key}
                value={key}
                className="border-dashed"
              >
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                  {t(`items.${key}.question`)}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">
                    {t(`items.${key}.answer`)}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-muted-foreground mt-6 px-8">
            {t("footer.text")}{" "}
            <Link
              href={`/${locale}/contact`}
              className="text-primary font-medium hover:underline"
            >
              {t("footer.link")}
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
