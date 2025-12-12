import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import FAQsTwo from "@/components/faqs-2"
import FooterSection from "@/components/footer"
import { HeroHeader } from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProductCatalog from "@/components/product-catalog"
import WallOfLoveSection from "@/components/testimonials"

export default function Page() {
  return (
    <>
      <HeroHeader />
      <HeroSection />
      <ProductCatalog />
      <AboutSection />
      <WallOfLoveSection />
      <ContactSection />
      <FAQsTwo />
      <FooterSection />
    </>
  )
}
