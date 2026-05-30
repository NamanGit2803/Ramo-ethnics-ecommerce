"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Truck,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/products/ProductCard";

export default function Home() {
  const trending = products.filter((p) => p.isTrending);
  const newArrivals = products.filter((p) => p.isNew);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 px-4 py-12 lg:py-24 items-center">
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <p className="text-xs tracking-[0.3em] uppercase text-primary">
              Festive Edit · 2026
            </p>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
              Drape yourself in{" "}
              <em className="text-primary not-italic">timeless</em> elegance.
            </h1>

            <p className="text-muted-foreground max-w-md leading-relaxed">
              A quiet luxury collection of sarees, lehengas and kurtis —
              handpicked fabrics, gentle palettes, and craftsmanship that
              whispers.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/shop"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 text-sm tracking-widest uppercase hover:bg-primary/90 transition shadow-soft"
              >
                Shop Now
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/shop"
                className="inline-flex items-center gap-2 border border-foreground/30 px-7 py-3.5 text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition"
              >
                Explore Collection
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 fill-gold text-gold" />
                4.8 / 5 by 12k+ women
              </span>

              <span>Free shipping · Easy returns</span>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div
              className="absolute -inset-6 bg-gold/20 blur-3xl rounded-full"
              aria-hidden
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-luxe">
              <Image
                src="/assets/hero-saree.jpg"
                alt="Woman in maroon silk saree"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-6 -left-6 hidden sm:block bg-background border border-border/60 px-6 py-4 shadow-luxe rounded">
              <p className="text-xs tracking-widest uppercase text-muted-foreground">
                Bestseller
              </p>

              <p className="font-serif text-lg">
                Maroon Banarasi Silk
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
          {[
            { icon: Truck, label: "Free shipping over ₹1999" },
            { icon: ShieldCheck, label: "Authentic craftsmanship" },
            { icon: Sparkles, label: "Handpicked fabrics" },
            { icon: Star, label: "Loved by 12k+ women" },
          ].map(({ icon: Icon, label }, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-2 text-foreground/80"
            >
              <Icon className="h-4 w-4 text-primary" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-20">
        <SectionHeading
          eyebrow="Shop by Category"
          title="Find your moment"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((c) => (
            <Link
              key={c.name}
              href={`/shop?category=${c.name}`}
              className="group block"
            >
              <div className="aspect-[3/4] overflow-hidden bg-secondary/40 rounded-md relative">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <p className="mt-3 text-center font-serif text-sm sm:text-base group-hover:text-primary transition-colors">
                {c.name}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending */}
      <section className="container mx-auto px-4 py-12">
        <SectionHeading
          eyebrow="Trending Now"
          title="Loved this week"
          link
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
          {trending.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Offer banner */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative overflow-hidden rounded-md bg-primary text-primary-foreground px-6 py-16 sm:p-20 text-center">
          <div
            className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,var(--gold)_0%,transparent_50%)]"
            aria-hidden
          />

          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Festive Sale
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-4">
            Flat 20% Off Sitewide
          </h2>

          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            On every saree, lehenga and kurti. Limited time only.
          </p>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-background text-foreground px-7 py-3.5 text-sm tracking-widest uppercase hover:bg-gold hover:text-gold-foreground transition"
          >
            Shop the Edit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* New arrivals */}
      <section className="container mx-auto px-4 py-12">
        <SectionHeading
          eyebrow="Just In"
          title="New arrivals"
          link
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
          {newArrivals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/40 py-20 mt-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Kind words"
            title="From our women"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Aanya M.",
                text: "The fabric is dreamy and the fit was perfect. Felt like an heirloom in the making.",
              },
              {
                name: "Priya S.",
                text: "Wore the maroon saree to my engagement — everyone asked where it was from!",
              },
              {
                name: "Riya K.",
                text: "Beautiful packaging, quick delivery, and the kurti is now my festive favourite.",
              },
            ].map((t, i) => (
              <figure
                key={i}
                className="bg-background p-8 rounded-md shadow-soft"
              >
                <div className="flex gap-0.5 mb-4 text-gold">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-current"
                    />
                  ))}
                </div>

                <blockquote className="font-serif text-lg leading-relaxed mb-4">
                  "{t.text}"
                </blockquote>

                <figcaption className="text-xs tracking-widest uppercase text-muted-foreground">
                  — {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Insta gallery */}
      <section className="container mx-auto px-4 py-20">
        <SectionHeading
          eyebrow="@saanjh.studio"
          title="Wear it. Tag it."
        />

        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {products.slice(0, 6).map((p) => (
            <div
              key={p.id}
              className="aspect-square overflow-hidden rounded-md bg-secondary/40 relative"
            >
              <Image
                src={p.image}
                alt=""
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function SectionHeading({ eyebrow, title, link }) {
  return (
    <div className="flex items-end justify-between mb-10">
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
          {eyebrow}
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>

      {link && (
        <Link
          href="/shop"
          className="hidden sm:inline-flex items-center gap-2 text-sm tracking-widest uppercase hover:text-primary transition"
        >
          View all
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}