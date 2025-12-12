import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeroHeader } from './header'
import { Button } from '@workspace/ui/components/button'
import { InfiniteSlider } from '@workspace/ui/components/infinite-slider'
import { ProgressiveBlur } from '@workspace/ui/components/progressive-blur'


export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-26">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-3xl font-medium md:text-4xl lg:mt-16 xl:text-5xl">Leaders in Fabrics with Lycra<sup>®</sup> Fiber</h1>
                                <p className="mt-8 max-w-2xl text-pretty text-lg">
                                Premium Lycra® and performance-driven activewear fabrics trusted by global brands for sportswear, athleisure, and high-stretch apparel.
                                </p>
                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-5 text-base">
                                        <Link href="#products">
                                            <span className="text-nowrap">Explore Fabrics</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="px-5 text-base">
                                        <Link target="_blank" href="https://wa.me/919988940158">
                                            <span className="text-nowrap">Get Best Quote</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                                <div className="mt-10 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex justify-center items-center">
                                    <Image
                                        src="/hero-image.jpeg"
                                        alt="Abstract Object"
                                        width={2000}
                                        height={2000}
                                        className="w-full max-w-3xl object-contain"
                                        priority
                                    />
                                </div>
                        </div>
                    </div>
                </section>
                <section className="bg-background pb-16 md:pb-32">
                    <div className="group relative m-auto max-w-6xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm">We work with the best brands</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-15 w-fit"
                                            src="https://cdn.brandfetch.io/lycra.com?c=1id0prbph0q_bx0iJsm"
                                            alt="Lycra Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-14 w-fit"
                                            src="https://cdn.brandfetch.io/www.directalpine.com?c=1id0prbph0q_bx0iJsm"
                                            alt="Direct Alpine Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-14 w-fit"
                                            src="https://cdn.brandfetch.io/vuoriclothing.com?c=1id0prbph0q_bx0iJsm"
                                            alt="Vuori Clothing Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-15 w-fit"
                                            src="https://cdn.brandfetch.io/www.thrudark.com?c=1id0prbph0q_bx0iJsm"
                                            alt="Thrudark Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-15 w-fit"
                                            src="https://cdn.brandfetch.io/www.aritzia.com?c=1id0prbph0q_bx0iJsm"
                                            alt="Aritzia Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-14 w-fit"
                                            src="https://cdn.brandfetch.io/satisfyrunning.com?c=1id0prbph0q_bx0iJsm"
                                            alt="Satisfy Running Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-17 w-fit"
                                            src="https://cdn.brandfetch.io/obermeyer.com?c=1id0prbph0q_bx0iJsm"
                                            alt="Obermeyer Logo"
                                            height="28"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-16 w-fit"
                                            src="https://cdn.brandfetch.io/forloh.com?c=1id0prbph0q_bx0iJsm"
                                            alt="Forloh Logo"
                                            height="24"
                                            width="auto"
                                        />
                                    </div>
                                </InfiniteSlider>

                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
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
