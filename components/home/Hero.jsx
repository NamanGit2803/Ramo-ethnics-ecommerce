'use client'

import Image from "next/image"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay";
import {
    ArrowRight,
    Star,
} from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";


const slides = [
    {
        title: "Celebrate Tradition",
        subtitle: "New Festive Collection",
        description:
            "Discover handcrafted ethnic wear designed with timeless elegance.",
        image: "/assets/hero-1.jpg",
        mobileImage: "/assets/mobile-hero2.jpg",
        href: "/collections/festive-wear",
        content: true,
    },

    {
        title: "Wedding Essentials",
        subtitle: "Luxury Edit",
        description:
            "Premium sarees and lehengas crafted for your special moments.",
        image: "/assets/hero2.jpg",
        mobileImage: "/assets/mobile-hero2.jpg",
        href: "/collections/wedding",
        content: true,
    },

    {
        title: "New Arrivals",
        subtitle: "Fresh Styles",
        description:
            "Explore our latest collection of modern ethnic fashion.",
        image: "/assets/hero-3.jpg",
        mobileImage: "/assets/mobile-hero2.jpg",
        href: "/collections/new-arrivals",
        content: false,
    },
];


const Hero = () => {
    return (
        <section className="relative overflow-hidden">
            <Carousel opts={{ loop: true, }} plugins={[
                // Autoplay({
                //     delay: 3000,
                //     stopOnInteraction: false,
                // }),
            ]}>
                <CarouselContent>
                    {slides.map((slide, index) => (
                        <CarouselItem key={index}>
                            <div className="relative min-h-dvh overflow-hidden">
                                {/* image */}
                                {/* desktop image  */}
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    priority={index === 0}
                                    className="hidden lg:block object-fill"
                                />

                                {/* mobile image  */}
                                <Image
                                    src={slide.mobileImage}
                                    alt={slide.title}
                                    fill
                                    priority={index === 0}
                                    className="lg:hidden object-cover object-center"
                                />

                                {/* content */}
                                {slide.content && <div className="relative z-10 container mx-auto px-4 min-h-dvh flex items-center ">
                                    <div className="relative max-w-md text-gold">
                                        {/* dark spread shadow */}
                                        <div className="absolute -inset-8 -z-10 rounded-3xl bg-foreground/50 blur-3xl" />
                                        <div className="mb-5 flex items-center gap-2 text-sm">
                                            <Star className="h-4 w-4 fill-current" />
                                            {slide.subtitle}
                                        </div>
                                        <h1 className="font-serif text-5xl lg:text-7xl leading-tight">
                                            {slide.title}
                                        </h1>
                                        <p className="mt-5 max-w-md text-lg text-primary-foreground">
                                            {slide.description}
                                        </p>
                                        <Link
                                            href={slide.href}
                                            className="group mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm bg-primary text-primary-foreground transition">
                                            Shop Now
                                            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-5 hidden lg:flex" />
                <CarouselNext className="right-5 hidden lg:flex" />
            </Carousel>
        </section>
    )
}

export default Hero