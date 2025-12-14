const WHATSAPP_NUMBER = "919988940158";

type ProductEnquiry = {
  slug: string;
  name: string;
  image: string;
};

export function getGeneralWhatsAppLink() {
  const message = `
Hello Adventurous Fabwears Team,

I am interested in your Lycra®, sportswear, and activewear fabric range.

Please share your latest fabric catalog, specifications, MOQ, and pricing details.

Looking forward to your response.
Thank you.
  `;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getProductWhatsAppLink(product: ProductEnquiry) {
  const message = `
Hello Adventurous Fabwears Team,

I am interested in your *${product.name}*.

Please share:
- GSM options
- Available colors
- MOQ
- Pricing
- Delivery timeline

Product reference:
https://adventurousfabwears.co.in/products/${product.slug}

Looking forward to your response.
Thank you.
  `;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
