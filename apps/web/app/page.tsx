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
      <FAQsTwo />
      <ContactSection />
      <div className="mb-10">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeQefVTkKtF4D1l7m4iJ_yy9TQmk7o0lWYbR-ZfrF50ogw93Q/viewform?embedded=true"
          width="100%"
          height="900"
        >
          Loading…
        </iframe>
      </div>
      <FooterSection />
    </>
  )
}
