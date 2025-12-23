// apps/web/lib/whatsapp.ts

import type { Product } from "@/lib/products"

const WHATSAPP_NUMBER = "919988940158"

function createWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function getGeneralWhatsAppLink() {
  const message = `
Hello Adventurous Fabwears Team,

I am interested in your fabric range including Sportswear, sportswear, and activewear materials.

Please share:
- Latest fabric catalog
- Specifications & GSM options
- MOQ details
- Pricing & delivery timeline

Looking forward to your response.

Thank you.
  `.trim()

  return createWhatsAppLink(message)
}

export function getProductWhatsAppLink(product: Product) {
  const message = `
Hello Adventurous Fabwears Team,

I am interested in your *${product.name}*.

Kindly share:
- GSM options (${product.gsm})
- Available colors
- MOQ (${product.moq})
- Pricing details
- Delivery timeline

Product reference:
https://adventurousfabwears.co.in/products/${product.slug}

Thank you.
  `.trim()

  return createWhatsAppLink(message)
}
