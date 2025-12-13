import React from 'react'
import Link from 'next/link'
import { HeroHeader } from './header'
import { Button } from '@workspace/ui/components/button'
import { InfiniteSlider } from '@workspace/ui/components/infinite-slider'
import { ProgressiveBlur } from '@workspace/ui/components/progressive-blur'

export default function HeroSection() {
  return (
    <>
      <HeroHeader />

      <main className="overflow-x-hidden">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] lg:min-h-[100vh]">

          {/* Background Video */}
          <video
            src="/videos/hero-video-1.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Hero Content */}
          <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-24 md:pt-36 lg:pt-44">
            <div className="max-w-2xl text-center lg:text-left">
              <h1 className="text-balance text-3xl font-medium text-white md:text-4xl xl:text-5xl">
                Leaders in Fabrics with Lycra<sup>®</sup> Fiber
              </h1>

              <p className="mt-6 max-w-xl text-lg text-white/90">
                Premium Lycra® and performance-driven activewear fabrics trusted
                by global brands for sportswear, athleisure, and high-stretch apparel.
              </p>

              <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                <Button asChild size="lg" className="px-6">
                  <Link href="#products">Explore Fabrics</Link>
                </Button>

                <Button asChild size="lg" variant="ghost" className="px-6 text-white">
                  <Link
                    target="_blank"
                    href="https://wa.me/919988940158?text=Hello%20Adventurous%20Fabwears%20Team%2C%0A%0AI%20am%20interested%20in%20your%20Lycra%C2%AE%2C%20sportswear%2C%20and%20activewear%20fabric%20range.%0APlease%20share%20your%20latest%20fabric%20catalog%2C%20specifications%2C%20MOQ%2C%20and%20pricing%20details.%0A%0ALooking%20forward%20to%20your%20response.%0AThank%20you."
                  >
                    Get Best Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* BRAND SLIDER SECTION */}
        <section className="bg-background pb-16 md:pb-32 mt-5">
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm">We work with the best brands</p>
              </div>

              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  {[
                    "lycra.com",
                    "www.directalpine.com",
                    "vuoriclothing.com",
                    "www.thrudark.com",
                    "www.aritzia.com",
                    "satisfyrunning.com",
                    "obermeyer.com",
                    "forloh.com",
                  ].map((site) => (
                    <div key={site} className="flex">
                      <img
                        className="mx-auto h-14 w-fit"
                        src={`https://cdn.brandfetch.io/${site}`}
                        alt={site}
                      />
                    </div>
                  ))}
                </InfiniteSlider>

                <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background" />
                <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background" />

                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
