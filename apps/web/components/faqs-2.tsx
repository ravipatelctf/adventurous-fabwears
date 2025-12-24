"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import Link from "next/link"

const FAQ_ITEMS = [
  {
    key: "export",
    question: "Do you export fabrics internationally?",
    answer:
      "Yes. We export sportswear, and activewear fabrics worldwide. We ship to over 40+ countries including the USA, Europe, Middle East, and Southeast Asia.",
  },
  {
    key: "specialize",
    question: "What types of fabrics do you specialize in?",
    answer:
      "We specialize in Sportswear stretch fabrics, sportswear materials, activewear blends, polyester-spandex fabrics, and performance textiles designed for leggings, gym wear, and athleisure.",
  },
  {
    key: "samples",
    question: "Can you provide fabric samples before placing a bulk order?",
    answer:
      "Yes. We provide swatches and sample yardage for evaluation. Brands typically review GSM, stretch, colorfastness, and hand-feel before confirming bulk orders.",
  },
  {
    key: "moq",
    question: "What is the minimum order quantity (MOQ)?",
    answer:
      "MOQs vary depending on the fabric type, usually starting from 50–150 kg per color. For special blends or custom colors, MOQs may be slightly higher.",
  },
  {
    key: "customization",
    question: "Do you offer custom colors, GSM, or fabric compositions?",
    answer:
      "Absolutely. We offer custom dyeing, GSM adjustments, and specialized fabric compositions tailored to your sportswear or activewear product requirements.",
  },
  {
    key: "timeline",
    question: "How long does production and shipping take?",
    answer:
      "Standard production time is 12–18 days depending on quantity. International shipping typically takes 7–14 days via air or sea, based on destination.",
  },
  {
    key: "quality",
    question: "Do your fabrics meet global quality standards?",
    answer:
      "Yes. Our fabrics undergo strict quality checks for stretch recovery, colorfastness, durability, and moisture-wicking performance. Certifications can be provided upon request.",
  },
]

export default function FAQsTwo() {
  return (
    <section id="faqs" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* ------------------------------------------------------------------ */}
        {/*                                Header                                */}
        {/* ------------------------------------------------------------------ */}

        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-balance text-muted-foreground">
            Find answers to the most common questions about our Sportswear, sportswear,
            and activewear fabric exports.
          </p>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/*                               Accordion                              */}
        {/* ------------------------------------------------------------------ */}

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="ring-muted w-full rounded-2xl border bg-card px-8 py-3 shadow-sm ring-4 dark:ring-0"
          >
            {FAQ_ITEMS.map((item) => (
              <AccordionItem
                key={item.key}
                value={item.key}
                className="border-dashed"
              >
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* ------------------------------------------------------------------ */}
          {/*                                Footer                                */}
          {/* ------------------------------------------------------------------ */}

          <p className="mt-6 px-8 text-muted-foreground">
            Can&apos;t find what you&apos;re looking for? Contact our{" "}
            <Link
              href="/contact"
              className="font-medium text-primary hover:underline"
            >
              customer support team
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
